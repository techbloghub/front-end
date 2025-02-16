'use client';

import Image from 'next/image';
import ThemeIcon from '@/commons/components/features/Common/ThemeIcon/ThemeIcon';
import { useTheme } from 'next-themes';
import * as styles from './header.css';

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className={styles.wrapper}>
      <a className={styles.left} href="/" aria-label="Home">
        <Image src="/images/logos/logo.png" alt="Logo" width={54} height={54} />
        <h1 className={styles.title}>TechBlogHub</h1>
      </a>
      <nav className={styles.right} aria-label="User controls">
        <ThemeIcon setTheme={setTheme} resolvedTheme={resolvedTheme} />
      </nav>
    </header>
  );
}
