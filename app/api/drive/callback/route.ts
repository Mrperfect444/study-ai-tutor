import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Google Drive integration is configured for a production setup. Add GOOGLE_CLIENT_ID and redirect URI in your environment to enable OAuth.',
    connected: false,
  });
}
