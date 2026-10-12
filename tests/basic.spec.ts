# StudyAI Tutor

A Next.js AI tutor app for students, with image uploads, Google Drive integration workflow, study materials, subject management, and quiz generation.

## Features

- AI tutor chat interface
- Image upload support and visual question workflow
- Document and PDF-ready study material management
- Google Drive OAuth setup flow
- Subject dashboards and progress cards
- Practice quiz generation logic
- Secure placement of secrets and env configuration

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
3. Fill in your Supabase and Google credentials.
4. Run the app:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000

## Environment variables

See `.env.example` for required values.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run type-check
npm test
```

## Google OAuth setup

1. Create a Google Cloud project.
2. Enable Google Drive API.
3. Create OAuth client ID and secret.
4. Add redirect URI: `http://localhost:3000/api/drive/callback`
5. Add the values to `.env.local`.

## Supabase setup

1. Create a Supabase project.
2. Add project URL and anonymous key.
3. Add the service role and JWT secret as required.
4. Apply your database schema once ready.

## Notes

This scaffold implements the app architecture, secure env handling, tutor UI, and API stubs for AI and Drive workflows. Production-ready connectors such as Supabase Auth, real OCR/PDF processing, and secure Google Drive file retrieval should be added once service credentials are available.
