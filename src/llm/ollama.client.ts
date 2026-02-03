import axios, { options } from 'axios';

export class OllamaClient {
  private baseUrl = 'http://localhost:11434';

  async chat(messages) {
    const response = await axios.post(`${this.baseUrl}/api/chat`, {
      model: 'llama3.2:3b',
      messages,
      stream: false,
      temperature: 0.2,
      options:{
        tokens_score: true
      }
    });
    console.log('Ollama Response:', response);
    return response.data.message.content;
  }
}
