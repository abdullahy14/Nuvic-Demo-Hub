import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nuvic Hub — Demo Map',
  description: 'Free trial docs + a preview of the full Nuvic system.',
  openGraph: {
    title: 'Nuvic Hub — Demo Map',
    description: 'Free trial docs + a preview of the full Nuvic system.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
