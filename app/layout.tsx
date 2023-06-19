import { Metadata } from 'next';

import '#/styles/globals.css';
import Token from '#/ui/token';

export const metadata: Metadata = {
  title: {
    default: 'Next.js App Router',
    template: '%s | Next.js App Router',
  },
  description:
    'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="transition duration-150 ease-out [color-scheme:dark]"
    >
      <body className="min-w-xl min-h-xl flex h-screen items-center justify-center overflow-hidden">
        <main className="hidden xl:block">{children}</main>
        <Token />
      </body>
    </html>
  );
}
