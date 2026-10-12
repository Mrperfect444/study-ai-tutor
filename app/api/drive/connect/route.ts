import { NextResponse } from 'next/server';
import { z } from 'zod';
import { buildTutorReply } from '@/lib/ai';

const requestSchema = z.object({
  prompt: z.string().min(1).max(5000),
  mode: z.enum(['Learn', 'Quick Answer', 'Step-by-Step', 'Practice', 'Exam Revision', 'Summarize', 'Explain Simply']).optional(),
  uploadedImage: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const body = requestSchema.parse(json);

    return NextResponse.json({
      reply: buildTutorReply({
        prompt: body.prompt,
        mode: body.mode,
        uploadedImage: body.uploadedImage,
      }),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Invalid request body.',
      },
      { status: 400 },
    );
  }
}
