export type TutorMode = 'Learn' | 'Quick Answer' | 'Step-by-Step' | 'Practice' | 'Exam Revision' | 'Summarize' | 'Explain Simply';

export type TutorMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export type TutorRequest = {
  prompt: string;
  mode?: TutorMode;
  uploadedImage?: string;
};
