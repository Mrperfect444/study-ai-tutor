'use client';

import { useState } from 'react';
import { Paperclip, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const starterMessages = [
  {
    role: 'assistant',
    content:
      'I can explain uploaded notes, solve problems step by step, summarize documents, and generate quizzes. What would you like to study today?',
  },
];

export function ChatPanel() {
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) {
      return;
    }

    const nextUserMessage = { role: 'user', content: input };
    setMessages((current) => [...current, nextUserMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input, mode: 'Learn' }),
      });

      const data = await response.json();
      setMessages((current) => [...current, { role: 'assistant', content: data.reply ?? 'I am here to help.' }]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        { role: 'assistant', content: 'The tutor is temporarily unavailable. Please try again in a moment.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="max-h-[420px] space-y-3 overflow-y-auto rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`max-w-[82%] rounded-2xl p-3 text-sm ${
              message.role === 'assistant' ? 'bg-slate-800 text-slate-100' : 'ml-auto bg-blue-500 text-white'
            }`}
          >
            {message.content}
          </div>
        ))}

        {isLoading && (
          <div className="flex max-w-[82%] items-center gap-2 rounded-2xl bg-slate-800 p-3 text-sm text-slate-200">
            <Sparkles className="h-4 w-4 animate-pulse text-blue-300" />
            Tutor is thinking...
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-3">
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={3}
          placeholder="Ask the tutor anything..."
          className="w-full resize-none bg-transparent p-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
        />

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-400">
            <button className="rounded-lg border border-slate-700 p-2 text-sm hover:bg-slate-800">
              <Paperclip className="h-4 w-4" />
            </button>
            <span className="text-xs">Image, PDF, notes</span>
          </div>

          <Button onClick={handleSend} disabled={isLoading || !input.trim()} className="gap-2">
            <Send className="h-4 w-4" />
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
