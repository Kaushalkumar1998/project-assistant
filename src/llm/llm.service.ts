import { Injectable } from '@nestjs/common';
import { OllamaClient } from './ollama.client';
import { SYSTEM_PROMPT } from './system.prompt';
import { TOOLS } from './tools';
import { extractJson } from './json.util';
import { ToolRouter } from './tool.router';

@Injectable()
export class LlmService {
  private ollama = new OllamaClient();

  constructor(private readonly toolRouter: ToolRouter) {}

  async ask(question: string) {
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      {
        role: 'user',
        content: `
You MUST respond with a SINGLE valid JSON object.
No explanation. No markdown. No text.

### Tool selection rules
- If an employee ID is mentioned, use "getEmployeeById"
- If the user says "list" or "all employees", use "listAllEmployees"
- If the user says "create", use "createEmployee"
- If the user says "delete", use "deleteEmployee"
- If the user says "update", use "updateEmployee"
- If the user says "search", use "searchEmployees"
- If the user says "count" or "how many", use "getEmployeeCount"

If a tool applies:
{ "tool": "tool_name", "arguments": { ... } }

If no tool applies:
{ "tool": null, "arguments": {} }

User question:
"${question}"

Available tools:
${JSON.stringify(TOOLS, null, 2)}
`
      }
    ];

    // 1️⃣ Ask LLM
    const raw = await this.ollama.chat(messages);
    console.log('LLM Raw Response:', raw);

    // 2️⃣ Safely parse JSON
    const parsed = extractJson(raw);

    if (!parsed || typeof parsed.tool === 'undefined') {
      return {
        tool: null,
        data: null,
        error: 'LLM did not return valid JSON'
      };
    }

    // 3️⃣ If no tool selected → return as-is
    if (!parsed.tool) {
      return {
        tool: null,
        data: null
      };
    }

    // 4️⃣ EXECUTE TOOL (🔥 THIS IS THE MISSING GLUE)
    const data = await this.toolRouter.execute(parsed);

    // 5️⃣ Return RAW DB RESPONSE to frontend
    return {
      tool: parsed.tool,
      data
    };
  }
}
