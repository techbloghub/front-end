import ThemeProvider from '@/commons/providers/ThemeProvider/ThemeProvider.tsx';
import '../commons/styles/globalStyles.css.ts';
import { Metadata } from 'next';
import QueryProvider from '@/commons/providers/QueryProvider/queryProvider.tsx';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
