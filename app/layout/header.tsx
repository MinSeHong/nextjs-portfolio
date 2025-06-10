'use clinet';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>Intro</nav>
      <nav>Introduce</nav>
      <nav>Project</nav>
      <nav>Personality</nav>

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
