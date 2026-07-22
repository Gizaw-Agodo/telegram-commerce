import { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-gray-200">
      <main className="mx-auto flex min-h-screen w-full max-w-107.5 flex-col bg-white">
        {children}
      </main>
    </div>
  );
}