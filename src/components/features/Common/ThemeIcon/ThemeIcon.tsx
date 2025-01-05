import Moon from '@/components/atoms/Icons/Moon/Moon';
import Sun from '@/components/atoms/Icons/Sun/Sun';

export default function ThemeIcon({
  setTheme,
  resolvedTheme,
}: {
  setTheme: (theme: string) => void;
  resolvedTheme: string | undefined;
}) {
  return resolvedTheme === 'dark' ? (
    <Sun onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} />
  ) : (
    <Moon onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} />
  );
}
