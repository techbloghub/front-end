import Moon from '@/commons/components/atoms/Icons/Moon/Moon';
import Sun from '@/commons/components/atoms/Icons/Sun/Sun';
import { Theme } from '@/commons/types/theme';
import { ThemeIconProps } from './ThemeIcon.types';

export default function ThemeIcon({ setTheme, resolvedTheme }: ThemeIconProps) {
  return resolvedTheme === Theme.DARK ? (
    <Sun onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} />
  ) : (
    <Moon onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} />
  );
}
