'use client';

import Image from 'next/image';
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
        <Image
          src="/images/buttons/dark.png"
          alt="theme"
          width={32}
          height={32}
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        />
      </nav>
    </header>
  );
}
