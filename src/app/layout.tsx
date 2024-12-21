import ThemeProvider from '@/providers/ThemeProvider/ThemeProvider';
import '../styles/globalStyles.css.ts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
