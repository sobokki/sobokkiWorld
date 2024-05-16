'use client'

import { usePathname } from 'next/navigation';
import styles from './nav.module.scss';
import Link from 'next/link';

export function Nav() {
  const pathname = usePathname()


  return (
    <div className={styles.container}>
      <Link href="/" className={styles.Link}><div className={styles.title}>soeun’s</div></Link>

      <div className={styles.menus}>
        <Link href="/" className={`${styles.menu} ${pathname === '/' && styles.active}`}>home</Link>
        <Link href="/about" className={`${styles.menu} ${pathname === '/about' && styles.active}`}>About</Link>
        <Link href="/project" className={`${styles.menu} ${pathname === '/project' && styles.active}`}>Project</Link>
        <Link href="/visitor" className={`${styles.menu} ${pathname === '/visitor' && styles.active}`}>Visitor Book</Link>
      </div>
   
    </div>
  );
}