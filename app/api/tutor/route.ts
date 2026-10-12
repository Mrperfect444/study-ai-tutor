import { TutorMode, TutorRequest } from '@/lib/types';

export function buildTutorReply({ prompt, mode = 'Learn' }: TutorRequest) {
  const normalizedMode = mode as TutorMode;
  const promptLower = prompt.toLowerCase();

  if (promptLower.includes('quiz') || promptLower.includes('practice')) {
    return `Here are 3 practice prompts for ${normalizedMode.toLowerCase()} mode:\n\n1. Define the key concept in your own words.\n2. Explain the process step by step.\n3. Apply the idea to a new example.`;
  }

  if (promptLower.includes('image') || promptLower.includes('photo') || promptLower.includes('diagram')) {
    return `I can analyse the uploaded visual asset. First, I identify the relevant text and relationships, then explain the concept in plain language. If a part of the image is unclear, I will say so clearly.`;
  }

  if (promptLower.includes('summary') || promptLower.includes('summarize')) {
    return `Summary: focus on the main idea, supporting evidence, and the most important takeaway. I would break the content into short sections and note the key definitions, formulas, or arguments.`;
  }

  return `Let’s work through it carefully.\n\n1. Identify the core concept.\n2. Break the problem into smaller steps.\n3. Explain each step clearly using examples.\n4. Confirm the final outcome.\n\nFor this question, the key idea is to understand the relationship between the known values and the missing variable before solving.`;
}
