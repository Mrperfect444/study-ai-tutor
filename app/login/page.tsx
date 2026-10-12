import Link from 'next/link';
import { ArrowRight, BookOpenText, BrainCircuit, Google, ImageUp, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10 text-slate-50">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 ring-1 ring-blue-400/40">
              <BrainCircuit className="h-5 w-5 text-blue-300" />
            </div>
            <div>
              <div className="text-lg font-semibold">StudyAI</div>
              <div className="text-xs text-slate-400">Tutor workspace</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Get started</Button>
            </Link>
          </div>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-200">
              <BookOpenText className="h-4 w-4" />
              AI-powered learning companion
            </div>
            <h1 className="max-w-xl text-5xl font-black tracking-tight text-white md:text-6xl">
              Learn smarter with your personal AI tutor.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Upload notes, photos, documents, and study materials from Google Drive. Ask questions, get step-by-step explanations, practise with quizzes, and stay organised by subject.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/signup">
                <Button size="lg" className="gap-2">
                  Start learning <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="secondary">Open demo dashboard</Button>
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Images', value: 'OCR + explain' },
                { label: 'Drive', value: 'Connected files' },
                { label: 'Quizzes', value: 'AI generated' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4">
                  <div className="text-sm text-slate-400">{item.label}</div>
                  <div className="mt-1 font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-700 bg-slate-900/80 p-5 shadow-soft">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-slate-300">Tutor workspace</div>
                <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
                  online
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-slate-800 p-3 text-sm text-slate-200">
                  <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
                    <ImageUp className="h-3.5 w-3.5" />
                    Uploaded image
                  </div>
                  “Explain this algebra question step by step.”
                </div>
                <div className="rounded-xl bg-blue-500/10 p-3 text-sm text-blue-100 ring-1 ring-blue-400/20">
                  <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-blue-200">
                    <BrainCircuit className="h-3.5 w-3.5" />
                    AI tutor
                  </div>
                  Start by isolating x. Move the constant to the other side, then divide both sides by 3.
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-700 bg-slate-900 p-3">
                    <Google className="mb-2 h-4 w-4 text-blue-300" />
                    <div className="text-sm font-medium">Drive synced</div>
                    <div className="mt-1 text-xs text-slate-400">Lecture notes ready</div>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-slate-900 p-3">
                    <ShieldCheck className="mb-2 h-4 w-4 text-emerald-300" />
                    <div className="text-sm font-medium">Secure</div>
                    <div className="mt-1 text-xs text-slate-400">Private study workspace</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
