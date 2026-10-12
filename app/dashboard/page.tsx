import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-soft">
        <div className="mb-6 text-center">
          <div className="text-2xl font-black">Create your account</div>
          <p className="mt-2 text-sm text-slate-400">Set up your private study workspace.</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Full name</label>
            <Input type="text" placeholder="Jane Student" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <Input type="email" placeholder="student@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <Input type="password" placeholder="Create a strong password" />
          </div>
          <Button className="w-full">Create account</Button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-blue-300 hover:text-blue-200">
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
}
