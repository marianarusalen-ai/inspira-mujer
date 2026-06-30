export interface AIService {
  generateText(prompt: string): Promise<string>;
  summarize(text: string): Promise<string>;
  classify(text: string, categories: string[]): Promise<string>;
}

// Placeholder — implementar con OpenAI SDK en etapas posteriores
