import { TutorLayout } from '@/components/tutor-layout';
import { ChatPanel } from '@/components/chat-panel';

const mockSubjects = [
  { name: 'Mathematics', activity: '3 notes', accent: 'bg-violet-500/20 text-violet-200' },
  { name: 'Physics', activity: '2 quizzes', accent: 'bg-blue-500/20 text-blue-200' },
  { name: 'Biology', activity: '1 flashcard set', accent: 'bg-emerald-500/20 text-emerald-200' },
];

const recentActivity = [
  { title: 'Algebra practice', detail: 'Completed 2 practice questions', time: '1h ago' },
  { title: 'Physics summary', detail: 'Reviewed forces chapter', time: '3h ago' },
  { title: 'Chemistry revision', detail: 'Generated formula sheet', time: 'Today' },
];

export default function DashboardPage() {
  return (
    <TutorLayout>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: 'Study sessions', value: '18', trend: '+3 this week' },
            { label: 'Quizzes completed', value: '9', trend: '+2 this week' },
            { label: 'Average score', value: '86%', trend: '+8% improvement' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5">
              <div className="text-sm text-slate-400">{stat.label}</div>
              <div className="mt-4 text-3xl font-black text-white">{stat.value}</div>
              <div className="mt-2 text-xs text-emerald-300">{stat.trend}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">AI Tutor</h2>
              <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-2 py-1 text-xs text-blue-200">
                Live session
              </span>
            </div>
            <ChatPanel />
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-5">
              <h3 className="text-lg font-semibold">My subjects</h3>
              <div className="mt-4 space-y-3">
                {mockSubjects.map((subject) => (
                  <div key={subject.name} className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950/60 p-3">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs ${subject.accent}`}>
                        {subject.name.slice(0, 1)}
                      </span>
                      <div>
                        <div className="font-medium text-white">{subject.name}</div>
                        <div className="text-xs text-slate-400">{subject.activity}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-5">
              <h3 className="text-lg font-semibold">Recent activity</h3>
              <div className="mt-4 space-y-3">
                {recentActivity.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-medium text-white">{item.title}</div>
                      <span className="text-xs text-slate-400">{item.time}</span>
                    </div>
                    <div className="mt-1 text-sm text-slate-400">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TutorLayout>
  );
}
