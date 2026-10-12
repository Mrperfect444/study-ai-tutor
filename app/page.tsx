import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  BrainCircuit,
  FileUp,
  Google,
  ImageUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Navigation */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 ring-1 ring-blue-400/40">
              <BrainCircuit className="h-5 w-5 text-blue-300" />
            </div>
            <div>
              <div className="text-lg font-semibold">StudyAI</div>
              <div className="text-xs text-slate-400">Tutor</div>
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-200">
                <Sparkles className="h-4 w-4" />
                AI-powered learning companion
              </div>
              <h1 className="text-5xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
                Learn smarter with your AI tutor.
              </h1>
              <p className="mt-6 text-lg text-slate-300 max-w-2xl">
                Upload notes, images, and documents. Ask questions. Get step-by-step explanations.
                Practice with AI-generated quizzes. Master any subject with your personal tutor.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/signup">
                  <Button size="lg" className="gap-2">
                    Start learning <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="secondary">
                    View demo
                  </Button>
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3 text-sm">
                {[
                  { label: "Mode-based learning", value: "7 teaching styles" },
                  { label: "Image analysis", value: "OCR + explain" },
                  { label: "Quiz generation", value: "Auto-graded" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-700 bg-slate-900/60 p-3">
                    <div className="text-slate-400">{item.label}</div>
                    <div className="mt-1 font-semibold text-blue-300">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-2xl">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-slate-300">AI Tutor Session</div>
                  <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
                    live
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl bg-slate-800 p-3 text-sm text-slate-200">
                    <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
                      <ImageUp className="h-3.5 w-3.5" />
                      You uploaded a graph
                    </div>
                    "Explain what this graph shows"
                  </div>

                  <div className="rounded-xl bg-blue-500/10 p-3 text-sm text-blue-100 ring-1 ring-blue-400/20">
                    <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-blue-200">
                      <BrainCircuit className="h-3.5 w-3.5" />
                      AI Tutor
                    </div>
                    This graph shows the relationship between X and Y. The slope indicates... Step by step:
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3 text-sm">
                      <Google className="mb-2 h-4 w-4 text-blue-300" />
                      <div className="font-medium">Google Drive</div>
                      <div className="mt-1 text-xs text-slate-400">Study notes synced</div>
                    </div>
                    <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3 text-sm">
                      <ShieldCheck className="mb-2 h-4 w-4 text-emerald-300" />
                      <div className="font-medium">Secure</div>
                      <div className="mt-1 text-xs text-slate-400">Private workspace</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-slate-800 bg-slate-900/50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black text-white md:text-5xl">Powerful features</h2>
            <p className="mt-4 text-lg text-slate-400">Everything you need to master any subject</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BrainCircuit,
                title: "AI Tutor",
                description: "7 teaching modes: Learn, Quick Answer, Step-by-Step, Practice, Exam Revision, Summarize, Explain Simply",
              },
              {
                icon: ImageUp,
                title: "Image Analysis",
                description: "Upload photos and diagrams. AI extracts text and explains the concepts in plain language.",
              },
              {
                icon: FileUp,
                title: "Document Upload",
                description: "Support for PDFs, images, Word docs, and text files. OCR and smart analysis included.",
              },
              {
                icon: Google,
                title: "Google Drive",
                description: "Connect your Drive and use your study materials directly without re-uploading.",
              },
              {
                icon: Sparkles,
                title: "Quiz Generation",
                description: "AI generates custom quizzes from your notes. Auto-grading with detailed explanations.",
              },
              {
                icon: ShieldCheck,
                title: "Private & Secure",
                description: "Your data is encrypted and never shared. Complete privacy for your study sessions.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 hover:border-slate-600 transition"
              >
                <Icon className="mb-4 h-6 w-6 text-blue-400" />
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black text-white md:text-5xl">Ready to transform your learning?</h2>
          <p className="mt-4 text-lg text-slate-400">
            Start with a free account. No credit card required.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Create free account <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Explore dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/90 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BrainCircuit className="h-5 w-5 text-blue-400" />
                <span className="font-semibold">StudyAI</span>
              </div>
              <p className="text-sm text-slate-400">Your personal AI tutor for every subject.</p>
            </div>
            <div>
              <div className="font-semibold mb-3">Product</div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/dashboard" className="hover:text-slate-200">Dashboard</Link></li>
                <li><Link href="/login" className="hover:text-slate-200">Login</Link></li>
                <li><Link href="/signup" className="hover:text-slate-200">Sign up</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Features</div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>AI Tutor</li>
                <li>Image Analysis</li>
                <li>Quiz Generation</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Legal</div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 StudyAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}