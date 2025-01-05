import Moon from '@/components/atoms/Icons/Moon/Moon';
import Sun from '@/components/atoms/Icons/Sun/Sun';
import { Theme } from '@/types/theme';
import { ThemeIconProps } from './ThemeIcon.types';

export default function ThemeIcon({ setTheme, resolvedTheme }: ThemeIconProps) {
  return resolvedTheme === Theme.DARK ? (
    <Sun onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} />
  ) : (
    <Moon onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} />
  );
}
