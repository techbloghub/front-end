import './globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from '@/commons/components/provider/theme-provider.tsx';
import Header from '@/commons/components/layout/header.tsx';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechBlogHub - IT 기업 기술 블로그 포스트 모음',
  description: 'IT 기업 기술 블로그들의 최신 포스트 모음',
  icons: {
    icon: [
      {
        url: '/images/logos/logo.png',
        sizes: '32x32',
      },
      {
        url: '/images/logos/logo.png',
        sizes: '64x64',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
