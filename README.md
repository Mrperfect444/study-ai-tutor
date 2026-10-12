import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'OAuth callback received. Complete your Google OAuth configuration to finish the Drive connection flow.',
    success: false,
  });
}
