import { Injectable } from "@nestjs/common";
import { EmployeeTools } from "./tools/employee.tools";
import { createToolRegistry } from "./tool.registry";

@Injectable()
export class ToolRouter {
  private registry: Record<string, (args: any) => Promise<any>>;

  constructor(private readonly employeeTools: EmployeeTools) {
    this.registry = createToolRegistry(employeeTools);
  }

  async execute(toolCall: { tool: string | null; arguments: any }) {
    if (!toolCall.tool) {
      return { answer: 'This data is not currently available.' };
    }

    const handler = this.registry[toolCall.tool];

    if (!handler) {
      throw new Error(`Tool not allowed: ${toolCall.tool}`);
    }

    return handler(toolCall.arguments);
  }
}
