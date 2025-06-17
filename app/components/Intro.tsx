'use client';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import stylesIntro from './intro.module.scss';
import { useRef, useEffect } from 'react';

type HeaderProps = {
  onMenuClick: (section: string) => void;
};

export default function Intro({ onMenuClick }: HeaderProps) {
  /* Introduce Start: Gsap 애니메이션 시작 */
  const titleFirstLineRef = useRef<HTMLDivElement>(null);
  const titleSecondLineRef = useRef<HTMLDivElement>(null);
  const titleThirdLineRef = useRef<HTMLDivElement>(null);
  const titleThirdLineRefDescription = useRef<HTMLDivElement>(null);
  const titleFourthLineRef = useRef<HTMLDivElement>(null);
  const titleForuthLineRefDescription = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  /* title 애니메이션 TimeLine 세팅 */
  const titleTimeLine: gsap.core.Timeline = gsap.timeline({});

  useEffect(() => {
    gsap.to(layoutRef.current, {
      backgroundPositionX: '-=100000',
      backgroundPositionY: '+=100000',
      ease: 'none',
      duration: 40000,
    });
    /* Introduce Start Gsap 실행 JavaScript */
    const titleFirstLineTextSplit = SplitText.create(
      titleFirstLineRef.current,
      { type: 'chars' }
    );
    const titleSecondLineTextSplit = SplitText.create(
      titleSecondLineRef.current,
      { type: 'chars' }
    );
    const titleThirdLineTextSplit = SplitText.create(
      titleThirdLineRef.current,
      { type: 'chars' }
    );
    const titleThirdLineTextDescriptionSplit = SplitText.create(
      titleThirdLineRefDescription.current,
      { type: 'words, lines' }
    );
    const titleFourthLineTextSplit = SplitText.create(
      titleFourthLineRef.current,
      { type: 'chars' }
    );
    const titleFourthLineTextDescriptionSplit = SplitText.create(
      titleForuthLineRefDescription.current,
      { type: 'words, lines' }
    );

    titleTimeLine.from(titleFirstLineTextSplit.chars, {
      y: -100,
      opacity: 0,
      rotation: 'random(-160, 160)',
      duration: 0.7,
      ease: 'back',
      stagger: 0.2,
      onComplete: () => {
        /* Gsap TimeLine 끝난 후, 애니메이션 설정 */
        titleFirstLineTextSplit.chars.forEach((char) => {
          char.addEventListener('mouseenter', () => {
            gsap.to(char, {
              y: 'random[-20,-15,15,20]',
              rotation: -10,
              duration: 0.4,
              ease: 'ease.in',
            });
          });
          char.addEventListener('mouseleave', () => {
            gsap.to(char, {
              y: 0,
              rotation: 0,
              duration: 0.4,
              ease: 'ease.out',
            });
          });
          char.classList.add(`${stylesIntro.char}`);
        });
      },
    });

    titleTimeLine.from(titleSecondLineTextSplit.chars, {
      opacity: 0,
      duration: 0.7,
      ease: 'bounce',
      stagger: 0.02,
    });

    titleTimeLine.from(titleThirdLineTextSplit.chars, {
      opacity: 0,
      duration: 0.7,
      ease: 'bounce',
      stagger: 0.05,
      delay: 0.5,
    });

    titleTimeLine.from(titleThirdLineTextDescriptionSplit.words, {
      opacity: 0,
      duration: 0.5,
      ease: 'bounce',
      scale: 'random(2,3)',
      stagger: 0.05,
    });

    titleTimeLine.from(titleFourthLineTextSplit.chars, {
      opacity: 0,
      duration: 0.5,
      ease: 'bounce',
      stagger: 0.02,
    });

    titleTimeLine.from(titleFourthLineTextDescriptionSplit.words, {
      opacity: 0,
      duration: 0.5,
      ease: 'bounce',
      scale: 'random(2,3)',
      stagger: 0.05,
    });

    titleTimeLine.set(buttonRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: 'bounce',
    });
  });

  const layoutRef = useRef<HTMLDivElement>(null);
  const initialPostion = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });
  const animationFlag = useRef<string>('right');

  /* Mouse에 따라 배경화면 이동 세팅 */
  const handlerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!layoutRef.current) return;
    if (initialPostion.current.x == null) {
      initialPostion.current.x = e.clientX;
      initialPostion.current.y = e.clientY;
    }

    if (
      initialPostion.current.x > e.clientX &&
      animationFlag.current != 'right'
    ) {
      animationFlag.current = 'right';
      gsap.to(layoutRef.current, {
        backgroundPositionX: '-=100000',
        backgroundPositionY: '+=100000',
        ease: 'none',
        duration: 40000,
      });
    } else if (
      initialPostion.current.x < e.clientX &&
      animationFlag.current != 'left'
    ) {
      animationFlag.current = 'left';
      gsap.to(layoutRef.current, {
        backgroundPositionX: '+=100000',
        backgroundPositionY: '+=100000',
        ease: 'none',
        duration: 40000,
      });
    }
    initialPostion.current.x = e.clientX;
  };

  return (
    <div
      className={stylesIntro.layout}
      onMouseMove={(e) => {
        handlerMouseMove(e);
      }}
      ref={layoutRef}
    >
      <div className={stylesIntro.titleFirstLine} ref={titleFirstLineRef}>
        <span>&lt;</span>DEVELOPER<span>&gt;</span>
      </div>

      <div className={stylesIntro.titleSecondLine} ref={titleSecondLineRef}>
        Front-end <span>Developer</span> Minsehong
      </div>

      <div className={stylesIntro.titleThirdLine}></div>
      <div className={stylesIntro.titleThirdLine} ref={titleThirdLineRef}>
        인터랙티브 웹을 설계하는 개발자
      </div>

      <div
        className={stylesIntro.titleThirdLineDescription}
        ref={titleThirdLineRefDescription}
      >
        <span className={stylesIntro.yellow}>CSS</span>와
        <span className={stylesIntro.green}> JAVASCRIPT</span>를 이용해 다양한
        웹을 제작하며, <br />
        애니메이션 라이브러리를 활용한 개발에 열정을 가지고 있습니다.
        <br />
      </div>

      <div className={stylesIntro.titleFourthLine} ref={titleFourthLineRef}>
        앞과 뒤를 모두 설계하는 개발자
      </div>

      <div
        className={stylesIntro.titleFourthLineDescription}
        ref={titleForuthLineRefDescription}
      >
        프론트엔드 뿐만 아니라 백엔드에서도 재능있는 개발자가 되려고 합니다.
        <br />
        눈에 보이는 부분에 그치지 않고, 보이지 않는 기능까지 책임지는 개발자가
        되고자 합니다.
      </div>

      <div
        className={stylesIntro.button}
        ref={buttonRef}
        onClick={() => onMenuClick('about-me')}
      >
        시작하기
      </div>
    </div>
  );
}
