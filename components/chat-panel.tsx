import Link from 'next/link';
import { BrainCircuit, BookOpenText, FileText, FolderOpen, GraduationCap, LayoutDashboard, LibraryBig, MessageSquareText, NotebookPen, Settings, Sparkles, UserCircle2, Google } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: BrainCircuit, label: 'AI Tutor', href: '/dashboard' },
  { icon: GraduationCap, label: 'My Subjects', href: '/dashboard' },
  { icon: FileText, label: 'Study Materials', href: '/dashboard' },
  { icon: Google, label: 'Google Drive', href: '/dashboard' },
  { icon: NotebookPen, label: 'Practice Quizzes', href: '/dashboard' },
  { icon: LibraryBig, label: 'Revision Notes', href: '/dashboard' },
  { icon: Sparkles, label: 'Learning Progress', href: '/dashboard' },
  { icon: MessageSquareText, label: 'Conversation History', href: '/dashboard' },
  { icon: Settings, label: 'Settings', href: '/dashboard' },
];

export function TutorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-50">
      <aside className="hidden w-72 border-r border-slate-800 bg-slate-950/90 p-5 lg:block">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 ring-1 ring-blue-400/40">
            <BrainCircuit className="h-5 w-5 text-blue-300" />
          </div>
          <div>
            <div className="text-lg font-semibold">StudyAI</div>
            <div className="text-xs text-slate-400">Personal tutor</div>
          </div>
        </div>

        <nav className="mt-6 space-y-1">
          {navItems.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
              <UserCircle2 className="h-5 w-5 text-slate-200" />
            </div>
            <div>
              <div className="font-medium text-white">Student account</div>
              <div className="text-xs text-slate-400">student@studyai.dev</div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-6">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-slate-800 p-2 lg:hidden">
              <BookOpenText className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm text-slate-400">Today</div>
              <div className="font-semibold text-white">Study dashboard</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200">
              Connect Drive
            </button>
            <button className="rounded-xl bg-blue-500 px-3 py-2 text-sm font-medium text-white hover:bg-blue-400">
              New session
            </button>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
