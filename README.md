# StudyAI Tutor

A starter AI tutor app for students with a chat-based learning interface, image-ready workflow, and Google Drive foundation.

## Features
- AI tutor chat with multiple teaching modes
- Study dashboard with subjects and activity tracking
- Landing page with feature highlights
- Secure login and signup screens
- Tutor API route with mode-based responses
- Starter environment configuration

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checker
- `npm test` - Run tests

## Project Structure

```
app/
  ├── page.tsx              # Landing page
  ├── layout.tsx            # Root layout
  ├── globals.css           # Global styles
  ├── dashboard/
  │   └── page.tsx          # Dashboard
  ├── login/page.tsx        # Login page
  ├── signup/page.tsx       # Signup page
  └── api/
      └── tutor/route.ts    # AI tutor API

components/
  ├── tutor-layout.tsx      # Dashboard layout wrapper
  ├── chat-panel.tsx        # Chat interface
  └── ui/
      ├── button.tsx        # Button component
      └── input.tsx         # Input component

lib/
  ├── types.ts              # TypeScript types
  ├── utils.ts              # Utility functions
  └── ai.ts                 # AI helper functions
```

## Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your credentials:

- **Supabase**: Database and authentication backend
- **OpenAI**: AI tutor API key and model
- **Google OAuth**: Client ID and secret for Drive integration

### Deployment

The app is ready for Vercel deployment. Set environment variables in Vercel project settings.

## Features Roadmap

- [ ] Supabase authentication
- [ ] File upload and document processing
- [ ] Google Drive integration and OAuth
- [ ] Quiz generation and scoring
- [ ] Revision notes management
- [ ] Learning progress dashboard
- [ ] Real OpenAI API integration
- [ ] Production database schema

## Notes

- All API keys should be kept server-side
- This is a starter scaffold — production features require service setup
- See individual files for detailed documentation
