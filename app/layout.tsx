import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StudyAI Tutor",
  description: "AI-powered study assistant with image analysis and Google Drive support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
