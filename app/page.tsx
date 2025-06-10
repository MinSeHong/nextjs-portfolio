'use client';
import Introduce from './components/Introduce';
import Intro from './components/Intro';
import Header from './layout/header';
import { useRef } from 'react';

export default function Home() {
  /* Header Scroll 설정 */
  const containerFirstRef = useRef<HTMLDivElement>(null);
  const containerSecondRef = useRef<HTMLDivElement>(null);
  const containerThirdRef = useRef<HTMLDivElement>(null);

  const handleScroll = (section: string) => {
    const sectionMap: Record<string, React.RefObject<HTMLDivElement>> = {
      introduce: containerFirstRef,
      project: containerSecondRef,
      personality: containerThirdRef,
    };

    const targetRef = sectionMap[section];
    if (!targetRef?.current) return;

    let topOffset =
      targetRef.current.getBoundingClientRect().top + window.scrollY;

    if (section == 'introduce' || section == 'project') {
      topOffset -= 50;
    }

    window.scrollTo({
      top: topOffset,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Header onMenuClick={handleScroll} />
      <Intro onMenuClick={handleScroll} />
      <Introduce
        containerFirstRef={containerFirstRef}
        containerSecondRef={containerSecondRef}
        containerThirdRef={containerThirdRef}
      />
    </>
  );
}
