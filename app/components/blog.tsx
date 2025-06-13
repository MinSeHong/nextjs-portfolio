'use client';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import styles from './blog.module.scss';
import { useRef, useEffect } from 'react';
import Drawing from './canvas/drawing';

type HeaderScollProps = {
  footerRef?: React.RefObject<HTMLDivElement>;
};

export default function Blog({ footerRef }: HeaderScollProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.mainTitle} ref={footerRef}>
        Footer
      </div>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.statusbar}>title Subject</div>
          <div className={styles.browser}>
            <Drawing />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.mainTitle}>Matter JS</div>
          <div className={styles.description}>
            Matter JS를 이용한 여러가지 게임을 개발하고 있습니다.
          </div>
        </div>
      </div>
    </div>
  );
}
