'use client';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import styles from './blog.module.scss';
import { useRef, useEffect } from 'react';

type HeaderProps = {
  onMenuClick: (section: string) => void;
};

export default function Blog({ onMenuClick }: HeaderProps) {
  return <div className={styles.layout}></div>;
}
