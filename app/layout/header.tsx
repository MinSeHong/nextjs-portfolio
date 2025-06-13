'use clinet';
import { useEffect, useRef } from 'react';
import styles from './header.module.scss';

type HeaderProps = {
  onMenuClick: (section: string) => void;
};

export default function Header({ onMenuClick }: HeaderProps) {
  const scrollPosition = useRef<number>(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollPosition.current + 100) {
        headerRef.current.style.transform = 'scale(1,0)';
        scrollPosition.current = currentScrollY;
      } else if (currentScrollY < scrollPosition.current - 10) {
        headerRef.current.style.transform = 'scale(1,1)';
        scrollPosition.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <nav className={styles.mobile}>Menu</nav>
      <nav
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        Intro
      </nav>
      <nav onClick={() => onMenuClick('introduce')}>Introduce</nav>
      <nav onClick={() => onMenuClick('project')}>Project</nav>
      <nav onClick={() => onMenuClick('personality')}>Personality</nav>
      {/*<nav onClick={() => onMenuClick('footer')}>Footer</nav>*/}
      <div className={styles.iconBox}>
        <div>
          <a
            href="https://www.notion.so/minsehong/Story-of-Minsehong-2044339956d080119278d19d365a900e?source=copy_link"
            target="_blank"
          >
            <img src="./icons/notion-icon.png" />
          </a>
        </div>
        <div>
          <a href="https://github.com/MinSeHong" target="_blank">
            <img src="./icons/github-icon.svg" />
          </a>
        </div>
      </div>
    </header>
  );
}
