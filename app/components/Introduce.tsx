'use client';
import { useEffect, useRef, useState } from 'react';
import stylesIntroduce from './introduce.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import ScrollSmoother from 'gsap/src/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';
import { Flip } from 'gsap/all';

/* INTRODUCE 라이브러리 */
import {
  MOCK_SKILLS,
  MOCK_HOBBYS,
  MOCK_PLANS,
} from '../data/introduceMockData';
/* 프로젝트 카드 라이브러리 */
import { MOCK_GRID_CARDS } from '../data/introductionMockData';
/* PERSONALITY 라이브러리 */
import { MOCK_PERSONALITY } from '../data/personalityMockData';

import { forwardRef } from 'react';

type HeaderScollProps = {
  /* Introduction Start: Gsap 애니메이션 시작 */
  containerFirstRef?: React.RefObject<HTMLDivElement>;
  containerSecondRef?: React.RefObject<HTMLDivElement>;
  containerThirdRef?: React.RefObject<HTMLDivElement>;
};

export default function Introduce({
  containerFirstRef,
  containerSecondRef,
  containerThirdRef,
}: HeaderScollProps) {
  /* Introduction Start: Gsap Profile 애니메이션 */
  const profileImageRef = useRef<HTMLImageElement>(null);
  const profileGithubIconRef = useRef<HTMLImageElement>(null);
  const profileNotionIconRef = useRef<HTMLImageElement>(null);
  const profileMailIconRef = useRef<HTMLImageElement>(null);
  const profileFirstDetail = useRef<HTMLDivElement>(null);
  const profileSecondDetail = useRef<HTMLDivElement>(null);
  const profileThirdDetail = useRef<HTMLDivElement>(null);

  /* Introduction Start: Gsap 카드 SplitText */
  const cardFirstTitleRef = useRef<HTMLDivElement>(null);
  const cardSecondTitleRef = useRef<HTMLDivElement>(null);
  const cardThirdTitleRef = useRef<HTMLDivElement>(null);
  const cardFourthTitleRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const introductionRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger, Flip, ScrollSmoother);

  /* title 애니메이션 TimeLine 세팅 */
  const cardTimeLine: gsap.core.Timeline = gsap.timeline({});

  const [skillsLibraryActiveClick, setSkillsLibraryActiveClick] =
    useState<boolean>(false);

  function skillsLibraryActive(name: string) {
    if (skillsLibraryActiveClick == true) {
      return;
    }
    setSkillsLibraryActiveClick(true);
    skillsView.current = [];

    let MOCK_SKILLSS: any = null;

    if (name == 'NORMAL') {
      MOCK_SKILLSS = MOCK_SKILLS;
    } else if (name == 'FRONTEND') {
      MOCK_SKILLSS = Object.fromEntries(
        Object.entries(MOCK_SKILLS).filter(
          ([_, value]) => value.hashtag == 'Front-end'
        )
      );
    } else if (name == 'BACKEND') {
      MOCK_SKILLSS = Object.fromEntries(
        Object.entries(MOCK_SKILLS).filter(
          ([_, value]) => value.hashtag == 'Back-end'
        )
      );
    } else if (name == 'LIBRARY') {
      MOCK_SKILLSS = Object.fromEntries(
        Object.entries(MOCK_SKILLS).filter(
          ([_, value]) => value.hashtag == 'Library'
        )
      );
    }

    for (const subject in MOCK_SKILLSS) {
      const descriptions: any[] = [];
      const hastag: any[] = [];

      MOCK_SKILLSS[subject]['skillDescription'].map(
        (item: string, index: number) =>
          descriptions.push(
            <div key={index}>
              {item}
              <br />
            </div>
          )
      );

      if (MOCK_SKILLSS[subject]['hashtag'] == 'Front-end') {
        hastag.push(
          <div
            key="hastag"
            className={`${stylesIntroduce.skillHashtag} ${stylesIntroduce.orange}`}
          >
            {MOCK_SKILLSS[subject]['hashtag']}
          </div>
        );
      } else if (MOCK_SKILLSS[subject]['hashtag'] == 'Back-end') {
        hastag.push(
          <div
            key="hastag"
            className={`${stylesIntroduce.skillHashtag} ${stylesIntroduce.red}`}
          >
            {MOCK_SKILLSS[subject]['hashtag']}
          </div>
        );
      } else if (MOCK_SKILLSS[subject]['hashtag'] == 'Library') {
        hastag.push(
          <div
            key="hastag"
            className={`${stylesIntroduce.skillHashtag} ${stylesIntroduce.green}`}
          >
            {MOCK_SKILLSS[subject]['hashtag']}
          </div>
        );
      }

      skillsView.current.push(
        <div className="skillAnimation" key={subject}>
          <div className={stylesIntroduce.skillBox}>
            <div className={stylesIntroduce.skillicon}>
              <img src={MOCK_SKILLSS[subject]['skillIcon']} />
            </div>
            <div className={stylesIntroduce.skillSubject}>{subject}</div>
            {hastag}
          </div>
          <div className={stylesIntroduce.skilldescription}>{descriptions}</div>
        </div>
      );
    }

    setSkillsViewState(skillsView.current);
  }

  /* HOBBYS 라이브러리 실행 */
  const hobbysView = useRef<any[]>([]);
  function hobbysLibraryActive() {
    hobbysView.current = [];

    for (const subject in MOCK_HOBBYS) {
      const descriptions: any[] = [];
      const hastag: any[] = [];

      MOCK_HOBBYS[subject]['skillDescription'].map(
        (item: string, index: number) =>
          descriptions.push(
            <div key={index}>
              {item}
              <br />
            </div>
          )
      );

      hastag.push(
        <div
          key="hastag"
          className={`${stylesIntroduce.hobbyHashtag} ${stylesIntroduce.orange}`}
        >
          {MOCK_HOBBYS[subject]['hashtag']}
        </div>
      );

      hobbysView.current.push(
        <div className="hobbyAnimation" key={subject}>
          <div className={stylesIntroduce.hobbyBox}>
            <div className={stylesIntroduce.hobbyicon}>
              <img src={MOCK_HOBBYS[subject]['skillIcon']} />
            </div>
            <div className={stylesIntroduce.hobbySubject}>{subject}</div>
            {hastag}
          </div>
          <div className={stylesIntroduce.hobbydescription}>{descriptions}</div>
        </div>
      );
    }
  }

  /* 스킬 라이브러리 실행 */
  const skillsView = useRef<any[]>([]);
  const [skillsViewState, setSkillsViewState] = useState<any[]>([]);

  const plansView = useRef<any[]>([]);

  function plansLibraryActive() {
    plansView.current = [];

    for (const subject in MOCK_PLANS) {
      const descriptions: any[] = [];
      const hastag: any[] = [];

      MOCK_PLANS[subject]['skillDescription'].map(
        (item: string, index: number) =>
          descriptions.push(
            <div key={index}>
              {item}
              <br />
            </div>
          )
      );

      hastag.push(
        <div
          key="hastag"
          className={`${stylesIntroduce.planHashtag} ${stylesIntroduce.orange}`}
        >
          {MOCK_PLANS[subject]['hashtag']}
        </div>
      );

      plansView.current.push(
        <div className="planAnimation" key={subject}>
          <div className={stylesIntroduce.planBox}>
            <div className={stylesIntroduce.planIcon}>
              <img src={MOCK_PLANS[subject]['skillIcon']} />
            </div>
            <div className={stylesIntroduce.planSubject}>{subject}</div>
            {hastag}
          </div>
          <div className={stylesIntroduce.plandescription}>{descriptions}</div>
        </div>
      );
    }
  }

  useEffect(() => {
    gsap.from('.skillAnimation', {
      opacity: 0,
      duration: 0.2,
      ease: 'ease',
      stagger: 0.2,
      onComplete: () => {
        setSkillsLibraryActiveClick(false);
      },
    });
  }, [skillsViewState]);

  useEffect(() => {
    skillsLibraryActive('NORMAL');
    hobbysLibraryActive();
    plansLibraryActive();
  }, []);

  /* Skills Start: Gsap cardTimeLine 애니메이션 시작 */
  useEffect(() => {
    /* Introduce Start Gsap 실행 JavaScript */
    const cardFirstTitleRefSplit = SplitText.create(cardFirstTitleRef.current, {
      type: 'chars',
    });
    const cardSecondTitleRefSplit = SplitText.create(
      cardSecondTitleRef.current,
      { type: 'chars' }
    );
    const cardThirdTitleRefSplit = SplitText.create(cardThirdTitleRef.current, {
      type: 'chars',
    });
    const cardFourthTitleRefSplit = SplitText.create(
      cardFourthTitleRef.current,
      { type: 'chars' }
    );

    const cardAnimation = () => {
      /* Display:none 해제 */
      if (cardFirstTitleRef.current) {
        cardFirstTitleRef.current.style.display = 'block';
      }
      if (cardSecondTitleRef.current) {
        cardSecondTitleRef.current.style.display = 'block';
      }
      if (cardThirdTitleRef.current) {
        cardThirdTitleRef.current.style.display = 'block';
      }
      if (cardFourthTitleRef.current) {
        cardFourthTitleRef.current.style.display = 'block';
      }
      if (introductionRef.current) {
        introductionRef.current.style.display = '';
      }
      if (profileRef.current) {
        profileRef.current.style.display = '';
      }

      cardTimeLine.from(profileImageRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'bounce',
      });
      cardTimeLine.from(profileGithubIconRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: 'bounce',
      });
      cardTimeLine.from(profileNotionIconRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: 'bounce',
      });
      cardTimeLine.from(profileMailIconRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: 'bounce',
      });
      cardTimeLine.from(profileFirstDetail.current, {
        opacity: 0,
        duration: 0.2,
        scale: 0,
        ease: 'bounce',
      });
      cardTimeLine.from(profileSecondDetail.current, {
        opacity: 0,
        duration: 0.2,
        scale: 0,
        ease: 'bounce',
      });

      cardTimeLine.from(profileThirdDetail.current, {
        opacity: 0,
        duration: 0.2,
        scale: 0,
        ease: 'bounce',
      });

      cardTimeLine.from(`.${stylesIntroduce.card}`, {
        opacity: 0,
        duration: 0.2,
        scale: 0,
        ease: 'ease',
        stagger: 0.2,
      });

      cardTimeLine.from(cardFirstTitleRefSplit.chars, {
        opacity: 0,
        duration: 0.1,
        ease: 'bounce',
        stagger: 0.05,
      });
      cardTimeLine.from(cardSecondTitleRefSplit.chars, {
        opacity: 0,
        duration: 0.1,
        ease: 'bounce',
        stagger: 0.05,
      });
      cardTimeLine.from(cardThirdTitleRefSplit.chars, {
        opacity: 0,
        duration: 0.1,
        ease: 'bounce',
        stagger: 0.05,
      });
      cardTimeLine.from(cardFourthTitleRefSplit.chars, {
        opacity: 0,
        duration: 0.1,
        ease: 'bounce',
        stagger: 0.05,
        onComplete: () => {
          if (containerFirstRef.current) {
            containerFirstRef.current.style.pointerEvents = 'auto';
          }
        },
      });
    };

    gsap.from(containerFirstRef.current, {
      scrollTrigger: {
        trigger: containerFirstRef.current,
        start: 'top center',
      },
      opacity: 0,
      duration: 1,
      y: -10,
      x: -10,
      ease: 'ease',
      /* GSAP 애니메이션 종료시 함수 실행행 */
      onComplete: () => {
        cardAnimation();
      },
      onStart: () => {
        if (introductionRef.current) {
          introductionRef.current.style.display = 'none';
        }
        if (profileRef.current) {
          profileRef.current.style.display = 'none';
        }
      },
    });
  }, []);

  /* 프로젝트 카드 라이브러리 실행 */
  const projectView = useRef<any[]>([]);
  const projectCardLink = useRef<any[]>([]);
  const descriptionTitleSkillStack = useRef<any[]>([]);
  const descriptionViewTitle = useRef<any[]>([]);
  const descriptionViewList = useRef<any[]>([]);
  const descriptionViewBoxDescription = useRef<any[]>([]);
  const [projectViewState, setProjectViewState] = useState<any[]>([]);

  function projectCardLibraryActive() {
    const GRID_CARD_ID_VARIABLES: any = MOCK_GRID_CARDS;
    projectView.current = [];

    let indexNumber: number = 0;

    for (const index in GRID_CARD_ID_VARIABLES) {
      projectCardLink.current = [];
      descriptionViewTitle.current = [];

      descriptionViewList.current = [];
      descriptionViewBoxDescription.current = [];
      descriptionTitleSkillStack.current = [];

      /* 링크 버튼 제작 */
      for (const key in GRID_CARD_ID_VARIABLES[index]['projectCardLink']) {
        indexNumber++;

        if (
          GRID_CARD_ID_VARIABLES[index]['projectCardLink'][key]['url'] != ''
        ) {
          projectCardLink.current.push(
            <div
              className={stylesIntroduce.projectCardLinkBox}
              key={indexNumber}
            >
              <a
                href={`${GRID_CARD_ID_VARIABLES[index]['projectCardLink'][key]['url']}`}
                target="_target"
              >
                <img
                  src={
                    GRID_CARD_ID_VARIABLES[index]['projectCardLink'][key][
                      'icon'
                    ]
                  }
                />
              </a>
            </div>
          );
        } else {
          projectCardLink.current.push(
            <div
              className={stylesIntroduce.projectCardLinkBox}
              key={indexNumber}
            >
              <img
                src={
                  GRID_CARD_ID_VARIABLES[index]['projectCardLink'][key]['icon']
                }
              />
            </div>
          );
        }
      }

      /* 스킬 스택 아이템 제작 */
      for (let key in GRID_CARD_ID_VARIABLES[index][
        'descriptionTitleSkillStack'
      ]) {
        indexNumber++;
        descriptionTitleSkillStack.current.push(
          <div
            className={stylesIntroduce.descriptionTitleSkillStackIcon}
            key={indexNumber}
          >
            <img
              className={stylesIntroduce.descriptionTitleSkillStackIconImage}
              src={
                GRID_CARD_ID_VARIABLES[index]['descriptionTitleSkillStack'][
                  key
                ]['icon']
              }
            />
            <div className={stylesIntroduce.descriptionTitleSkillStackIconName}>
              {
                GRID_CARD_ID_VARIABLES[index]['descriptionTitleSkillStack'][
                  key
                ]['name']
              }
            </div>
          </div>
        );
      }

      /* 포스트잇 스크롤 기능 제작 */
      for (const key in GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle']) {
        indexNumber++;
        descriptionViewTitle.current.push(
          <div
            className={stylesIntroduce.descriptionFeatureStickyNote}
            key={indexNumber}
          >
            <img src={`./icons/post-it-green.png`} />
            <div
              onClick={(e) =>
                handlerScrollView(
                  e,
                  'normal',
                  GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key][
                    'descriptionViewTitleName'
                  ]
                )
              }
            >
              {
                GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key][
                  'descriptionViewTitleName'
                ]
              }
            </div>
          </div>
        );
      }

      /* 설명란 제작 */
      for (const key in Object.keys(
        GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle']
      )) {
        indexNumber++;

        descriptionViewBoxDescription.current = [];

        /* GSAP을 이용한 기능 이름 가져옴. */
        descriptionViewList.current.push(
          <div
            className={stylesIntroduce.descriptionViewTitle}
            data-feature={`${GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key]['descriptionViewTitleName']}`}
            key={indexNumber}
          >
            {
              GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key][
                'descriptionViewTitleName'
              ]
            }
          </div>
        );

        for (const subKey in GRID_CARD_ID_VARIABLES[index][
          'descriptionViewTitle'
        ][key]['descriptionViewBoxDescription']) {
          indexNumber++;

          descriptionViewBoxDescription.current.push(
            <div
              className={stylesIntroduce.descriptionViewBox}
              key={indexNumber}
            >
              <div className={stylesIntroduce.descriptionViewBoxImage}>
                <img
                  src={
                    GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key][
                      'descriptionViewBoxDescription'
                    ][subKey]['descriptionViewBoxImage']
                  }
                />
              </div>
              <div className={stylesIntroduce.descriptionViewBoxDescription}>
                <div
                  className={
                    stylesIntroduce.descriptionViewBoxDescriptionSubtitle
                  }
                >
                  <span>&lt;</span>
                  {
                    GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key][
                      'descriptionViewBoxDescription'
                    ][subKey]['descriptionViewBoxDescriptionSubtitle']
                  }
                  <span>/&gt;</span>
                </div>
                <div
                  className={
                    stylesIntroduce.descriptionViewBoxDescriptionTitleDescription
                  }
                >
                  {
                    GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key][
                      'descriptionViewBoxDescription'
                    ][subKey]['descriptionViewBoxDescriptionTitleDescription']
                  }
                </div>
              </div>
            </div>
          );
        }

        descriptionViewList.current.push(descriptionViewBoxDescription.current);
      }

      projectView.current.push(
        <div
          className={`${stylesIntroduce.gridCard} cardFilp${index}`}
          key={index}
          onClick={() => {
            handlerFlipFit(index, 'open');
          }}
          data-grid-card-group={GRID_CARD_ID_VARIABLES[index]['gridCardGroup']}
          data-view="true"
        >
          <img
            className={stylesIntroduce.gridCardImage}
            src={GRID_CARD_ID_VARIABLES[index]['gridCardImage']}
          />
          <div className={stylesIntroduce.gridCardTitle}>
            {GRID_CARD_ID_VARIABLES[index]['gridCardTitle']}
          </div>
          <div className={stylesIntroduce.gridCardDescription}>
            {GRID_CARD_ID_VARIABLES[index]['gridCardTitleSummary']}
          </div>
          <div className={stylesIntroduce.gridCardDate}>
            {GRID_CARD_ID_VARIABLES[index]['gridCardDate'].split(' ~ ')[1]}
          </div>
          <div className={stylesIntroduce.gridCardGroup}>
            {GRID_CARD_ID_VARIABLES[index]['gridCardGroup']}
          </div>
          {/* 프로젝트 설명용 생성 */}
          <div className={stylesIntroduce.projectBrowserStart}>
            <div className={stylesIntroduce.projectCard}>
              <img
                className={stylesIntroduce.projectCardImage}
                src={GRID_CARD_ID_VARIABLES[index]['gridCardImage']}
              />
              <div className={stylesIntroduce.projectCardTitle}>
                {GRID_CARD_ID_VARIABLES[index]['gridCardTitle']}
              </div>
              <div className={stylesIntroduce.projectCardDescription}>
                {GRID_CARD_ID_VARIABLES[index]['gridCardDescription']}
              </div>
              <div className={stylesIntroduce.projectCardLink}>
                {projectCardLink.current}
              </div>

              <div className={stylesIntroduce.projectCardDate}>
                {GRID_CARD_ID_VARIABLES[index]['gridCardDate']}
              </div>
            </div>
            <div className={stylesIntroduce.container}>
              <div
                className={stylesIntroduce.description}
                data-scrollgroup="description"
              >
                <div
                  className={stylesIntroduce.descriptionTitle}
                  data-scroll="skill-stack"
                >
                  <span className={stylesIntroduce.green}>&lt;</span>SKILL
                  STACKS<span className={stylesIntroduce.green}>/&gt;</span>
                </div>
                <div className={stylesIntroduce.descriptionTitleSkillStack}>
                  {descriptionTitleSkillStack.current}
                </div>

                <div
                  className={stylesIntroduce.descriptionTitle}
                  data-scroll="review"
                >
                  <span className={stylesIntroduce.green}>&lt;</span>REVIEW
                  <span className={stylesIntroduce.green}>/&gt;</span>
                </div>
                <div className={stylesIntroduce.descriptionReview}>
                  {GRID_CARD_ID_VARIABLES[index]['descriptionReview']}
                </div>

                <div
                  className={stylesIntroduce.descriptionTitle}
                  data-scroll="feature"
                >
                  <span className={stylesIntroduce.green}>&lt;</span>FEATURES
                  <span className={stylesIntroduce.green}>/&gt;</span>
                </div>
                <div className={stylesIntroduce.descriptionFeature}>
                  {descriptionViewTitle.current}
                </div>

                <div
                  className={stylesIntroduce.descriptionTitle}
                  data-scroll="view"
                >
                  <span className={stylesIntroduce.green}>&lt;</span>VIEWS
                  <span className={stylesIntroduce.green}>/&gt;</span>
                </div>

                <div className={stylesIntroduce.descriptionView}>
                  {descriptionViewList.current}
                </div>
              </div>
              <div className={stylesIntroduce.descriptionSliderButton}>
                <button
                  onClick={(e) => handlerScrollView(e, 'skill-stack', '')}
                >
                  <div>SKILL STACK</div>
                </button>
                <button onClick={(e) => handlerScrollView(e, 'review', '')}>
                  <div>REVIEW</div>
                </button>
                <button onClick={(e) => handlerScrollView(e, 'feature', '')}>
                  <div>FEATURE</div>
                </button>
                <button onClick={(e) => handlerScrollView(e, 'view', '')}>
                  <div>VIEW</div>
                </button>
              </div>
            </div>
          </div>

          <div
            className={stylesIntroduce.gridCardButton}
            onClick={() => {
              handlerFlipFit(index, 'close');
            }}
          >
            <img
              className={stylesIntroduce.gridCardButtonImage}
              src="./icons/close-button.svg"
            />
          </div>
        </div>
      );
    }
  }
  projectCardLibraryActive();

  useEffect(() => {
    setProjectViewState(projectView.current);
  }, []);

  /* Project 부분: Gsap Filp 애니메이션 설정 */
  const containerSecondBrowserRef = useRef<HTMLDivElement>(null);
  const containerSecondBrowserBlockRef = useRef<HTMLDivElement>(null);
  const flipped = useRef<boolean>(false);
  const clickDelay = useRef<boolean>(false);
  const originalStateRef = useRef<any>(null);

  useEffect(() => {
    gsap.to(containerSecondRef.current, {
      scrollTrigger: {
        trigger: containerSecondRef.current,
        start: 'top center',
      },
      opacity: 1,
      duration: 2,
      ease: 'ease',
    });
  });

  /* Card Gsap Filp 애니메이션 설정 */ /* 에러 시작 부분 */
  function handlerFlipFit(index: string, trigger: string) {
    if (clickDelay.current == true) {
      return;
    }

    if (!flipped.current && !clickDelay.current && trigger == 'open') {
      console.log('=====open=====');
      clickDelay.current = true;
      flipped.current = true;
      originalStateRef.current = Flip.getState(`.cardFilp${index}`);

      Flip.fit(`.cardFilp${index}`, containerSecondBrowserRef.current, {
        onStart: () => {
          const card = document.getElementsByClassName(
            `cardFilp${index}`
          )[0] as HTMLElement | undefined;
          if (card) {
            card.style.zIndex = '1';
            card.style.cursor = 'auto';
            if (containerSecondBrowserRef.current) {
              /* 애니메이션 끊김 방지로 pointer Event 설정 */
              containerSecondBrowserRef.current.style.pointerEvents = 'none';
              /* 카드 안에 Scroll 이동 제한 */
              containerSecondBrowserRef.current.style.overflow = 'hidden';
            }
          }
        },
        duration: 0.5,
        ease: 'power1.inOut',
        onComplete: () => {
          handlerFlipFitAfter(index);
        },
      });
    } else if (flipped.current && !clickDelay.current && trigger == 'close') {
      console.log('close');
      if (containerSecondBrowserRef.current) {
        /* 애니메이션 끊김 방지로 pointer Event 설정 */
        containerSecondBrowserRef.current.style.pointerEvents = 'none';
      }
      clickDelay.current = true;
      (
        document.querySelectorAll(
          `.cardFilp${index} .${stylesIntroduce.projectBrowserStart}`
        ) as NodeListOf<HTMLElement>
      ).forEach((element) => {
        element.style.opacity = '0';
      });

      filpOpenTimeLine.to(
        `.cardFilp${index} .${stylesIntroduce.gridCardButton}`,
        {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            (
              document.querySelectorAll(
                `.cardFilp${index} .${stylesIntroduce.gridCardButton}`
              ) as NodeListOf<HTMLElement>
            ).forEach((element) => {
              element.style.display = 'none';
            });
          },
        }
      );

      filpOpenTimeLine.to(
        [
          `.cardFilp${index} .${stylesIntroduce.gridCardImage}`,
          `.cardFilp${index} .${stylesIntroduce.gridCardTitle}`,
          `.cardFilp${index} .${stylesIntroduce.gridCardDescription}`,
          `.cardFilp${index} .${stylesIntroduce.gridCardDate}`,
          `.cardFilp${index} .${stylesIntroduce.gridCardGroup}`,
        ],
        {
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          onComplete: () => {
            Flip.fit(`.cardFilp${index}`, originalStateRef.current, {
              duration: 0.3,
              ease: 'power1.inOut',
              onComplete: () => {
                const card = document.getElementsByClassName(
                  `cardFilp${index}`
                )[0] as HTMLElement | undefined;
                if (card) {
                  card.style.zIndex = '0';
                  card.style.cursor = 'pointer';
                  card.style.pointerEvents = 'auto';
                  if (containerSecondBrowserRef.current) {
                    containerSecondBrowserRef.current.style.overflow = 'auto';
                    containerSecondBrowserRef.current.style.pointerEvents =
                      'auto';
                  }
                }
                flipped.current = false;
                clickDelay.current = false;
              },
            });
          },
        }
      );
    }
  }

  const filpOpenTimeLine: any = gsap.timeline({});
  const filpOpenTimeLineScrollInitialSetting = useRef<boolean>(false);

  /* Card Gsap Filp 애니메이션 다음 후처리 세팅 */
  function handlerFlipFitAfter(index: string) {
    (
      document.querySelectorAll(
        `.cardFilp${index} .${stylesIntroduce.projectBrowserStart}`
      ) as NodeListOf<HTMLElement>
    ).forEach((element) => {
      element.style.opacity = '1';
      element.style.pointerEvents = 'auto';
    });
    filpOpenTimeLine.to(
      [
        `.cardFilp${index} .${stylesIntroduce.gridCardImage}`,
        `.cardFilp${index} .${stylesIntroduce.gridCardTitle}`,
        `.cardFilp${index} .${stylesIntroduce.gridCardDescription}`,
        `.cardFilp${index} .${stylesIntroduce.gridCardDate}`,
        `.cardFilp${index} .${stylesIntroduce.gridCardGroup}`,
      ],
      {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      }
    );

    filpOpenTimeLine.from(
      [
        `.cardFilp${index} .${stylesIntroduce.projectCardImage}`,
        `.cardFilp${index} .${stylesIntroduce.projectCardTitle}`,
        `.cardFilp${index} .${stylesIntroduce.projectCardDescription}`,
      ],
      {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'ease',
      }
    );

    filpOpenTimeLine.from(
      `.cardFilp${index} .${stylesIntroduce.projectCardLinkBox}`,
      {
        opacity: 0,
        scale: 0,
        duration: 0.1,
        stagger: 0.05,
        ease: 'bounce.out',
      }
    );
    filpOpenTimeLine.from(
      [`.cardFilp${index} .${stylesIntroduce.projectCardDate}`],
      {
        opacity: 0,
        duration: 0.1,
        ease: 'ease',
      }
    );

    filpOpenTimeLine.from([`.cardFilp${index} .${stylesIntroduce.container}`], {
      delay: 0.3,
      opacity: 0,
      duration: 0.3,
      ease: 'ease',
    });

    filpOpenTimeLine.to(
      [`.cardFilp${index} .${stylesIntroduce.gridCardButton}`],
      {
        delay: 0.3,
        opacity: 1,
        duration: 0.3,
        ease: 'ease',
        onComplete: () => {
          (
            document.querySelectorAll(
              `.cardFilp${index} .${stylesIntroduce.gridCardButton}`
            ) as NodeListOf<HTMLElement>
          ).forEach((element) => {
            element.style.display = '';
            element.style.pointerEvents = 'auto';
          });
          clickDelay.current = false;
        },
      }
    );

    if (filpOpenTimeLineScrollInitialSetting.current == false) {
      document
        .querySelectorAll(`.${stylesIntroduce.description}`)
        .forEach((description) => {
          description
            .querySelectorAll(`.${stylesIntroduce.descriptionViewBox}`)
            .forEach((element) => {
              gsap.from(element, {
                opacity: 0,
                duration: 0.4,
                scrollTrigger: {
                  trigger: element,
                  scroller: description,
                  start: 'center bottom',
                  toggleActions: 'play none none reverse',
                },
              });
            });
        });
      filpOpenTimeLineScrollInitialSetting.current = true;
    }
  }

  /* 스크롤용 함수 생성 */
  function handlerScrollView(e: any, eventType: string, target: string) {
    let descriptionElement: any = null;
    let scrollTarget: any = null;
    console.log(target);
    if (eventType == 'normal') {
      descriptionElement = (
        ((e.target as HTMLElement).parentElement as HTMLElement)
          .parentElement as HTMLElement
      ).parentElement as HTMLElement;
      console.log(descriptionElement);

      scrollTarget = (
        descriptionElement.querySelectorAll(
          `[data-feature="${target}"]`
        )[0] as HTMLElement
      ).offsetTop;

      if (descriptionElement && scrollTarget) {
        descriptionElement.scrollTo({
          top: scrollTarget,
          behavior: 'smooth',
        });
      }
    } else {
      descriptionElement = (
        ((e.target as HTMLElement).parentElement as HTMLElement)
          .parentElement as HTMLElement
      ).querySelectorAll(`[data-scrollgroup="description"]`)[0] as HTMLElement;
      scrollTarget = (
        descriptionElement.querySelectorAll(
          `[data-scroll="${eventType}"]`
        )[0] as HTMLElement
      ).offsetTop;
      if (descriptionElement) {
        descriptionElement.scrollTo({
          top: scrollTarget,
          behavior: 'smooth',
        });
      }
    }
  }

  /* PROJECT 카드 플립 */
  function gridFilp(element: string) {
    if (clickDelay.current == true) {
      return;
    }
    if (containerSecondBrowserRef.current) {
      /* 애니메이션 끊김 방지로 pointer Event 설정 */
      containerSecondBrowserRef.current.style.pointerEvents = 'none';
    }
    clickDelay.current = true;

    const state: any = Flip.getState(
      document.querySelectorAll(`[data-grid-card-group]`)
    );

    if (element != 'NORMAL') {
      (
        document.querySelectorAll(
          `[data-grid-card-group]`
        ) as NodeListOf<HTMLElement>
      ).forEach((html) => {
        if (html.getAttribute('data-grid-card-group') == element) {
          html.setAttribute('data-view', 'true');
        } else if (html.getAttribute('data-grid-card-group') != element) {
          html.setAttribute('data-view', 'false');
        }
      });
    } else {
      (
        document.querySelectorAll(
          `[data-grid-card-group]`
        ) as NodeListOf<HTMLElement>
      ).forEach((html) => {
        html.setAttribute('data-view', 'true');
      });
    }

    Flip.from(state, {
      duration: 0.5,
      ease: 'power1.inOut',
      stagger: 0.3,
      onComplete: () => {
        gsap.set;
        if (containerSecondBrowserRef.current) {
          containerSecondBrowserRef.current.style.pointerEvents = 'auto';
        }
        clickDelay.current = false;
      },
    });
  }

  /* Rotation 카드 애니메이션 설정 */
  useEffect(() => {
    const axis: any = document.querySelector(
      `.${stylesIntroduce.cardRotationAxis}`
    );
    const card: HTMLDivElement[] = gsap.utils.toArray(
      `.${stylesIntroduce.cardRotationSubAxis}`
    );

    function setup() {
      if (axis && card) {
        const radius = 400;
        const axisCenter = axis.offsetHeight / 2;
        const total = card.length;
        const slice = (Math.PI * 2) / total;
        card.forEach((element, index, array) => {
          const angle = (index + 1 - array.length) * slice;
          const x = axisCenter - radius * Math.cos(angle);
          const y = axisCenter + radius * Math.sin(angle);
          gsap.set(element, {
            xPercent: -50,
            yPercent: -50,
            x: x,
            y: y,
            rotation: -angle + '_rad',
          });
        });
      }
    }
    setup();

    gsap.to(`.${stylesIntroduce.cardRotationAxis}`, {
      rotate: '+=360',
      ease: 'none',
      repeat: -1,
      duration: card.length * 10,
    });
  });

  const subTitleSubjectRef = useRef<any>(null);
  const subTitleDescriptionRef = useRef<any>(null);
  const subTitleClickDelay = useRef<boolean>(false);

  function personalityHandler(id: string) {
    if (subTitleClickDelay.current == true) {
      return;
    }
    subTitleClickDelay.current = true;
    const index: number = Number(id);

    if (subTitleSubjectRef.current) {
      subTitleSubjectRef.current.innerText = MOCK_PERSONALITY[index]['title'];
    }
    if (subTitleDescriptionRef.current) {
      subTitleDescriptionRef.current.innerHTML = '';
      for (const array in MOCK_PERSONALITY[index]['description']) {
        subTitleDescriptionRef.current.innerHTML +=
          MOCK_PERSONALITY[index]['description'][array];
        subTitleDescriptionRef.current.innerHTML += '<br/><br/>';
      }
    }
    if (subTitleDescriptionRef.current) {
      const words = SplitText.create(subTitleDescriptionRef.current, {
        type: 'words, lines',
      });
      const timeline: gsap.core.Timeline = gsap.timeline();

      timeline.from(subTitleSubjectRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'bounce',
        scale: 'random(1,0.5)',
      });

      timeline.from(words.words, {
        opacity: 0,
        duration: 1,
        ease: 'bounce',
        scale: 'random(2,0.5)',
        stagger: 0.05,
        onComplete: () => {
          subTitleClickDelay.current = false;
        },
      });
    }
  }

  const handleScroll = (section: string) => {
    let topOffset = null;

    if (section == 'containerFirstRef') {
      topOffset =
        containerFirstRef.current.getBoundingClientRect().top +
        window.scrollY -
        50;
    } else if (section == 'containerSecondRef') {
      topOffset =
        containerSecondRef.current.getBoundingClientRect().top +
        window.scrollY -
        50;
    }
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth',
    });
  };

  return (
    <div className={stylesIntroduce.layout}>
      {/* Project 소개용 창 */}
      <span
        className={stylesIntroduce.mainTitle}
        onClick={() => {
          handleScroll('containerFirstRef');
        }}
      >
        INTRODUCE
      </span>
      <div className={stylesIntroduce.containerFirst} ref={containerFirstRef}>
        <div className={stylesIntroduce.statusbar}>
          <span>INTRODUCE.EXE</span>
        </div>

        <div className={stylesIntroduce.profile} ref={profileRef}>
          <img src="./images/profile/profile.jpg" ref={profileImageRef} />
          <div className={stylesIntroduce.link}>
            <a href="https://github.com/minsehong" target="_blank">
              <img src="./icons/github-icon.svg" ref={profileGithubIconRef} />
            </a>
            <a
              href="https://www.notion.so/minsehong/Story-of-Minsehong-2044339956d080119278d19d365a900e?source=copy_link"
              target="_blank"
            >
              <img src="./icons/notion-icon.png" ref={profileNotionIconRef} />
            </a>
            <a href="mailto:rebellia@naver.com" target="_blank">
              <img src="./icons/mail-icon.svg" ref={profileMailIconRef} />
            </a>
          </div>
          <div ref={profileFirstDetail}>
            <span>&lt;</span>MinSeHong<span>/&gt;</span>
          </div>
          <div ref={profileSecondDetail}>
            <span>&lt;</span>rebellia@gmail.com<span>/&gt;</span>
          </div>
          <div ref={profileThirdDetail}>
            <span>&lt;</span>1997. 08. 30.<span>/&gt;</span>
          </div>
        </div>

        <div className={stylesIntroduce.introduction} ref={introductionRef}>
          <div className={stylesIntroduce.card}>
            <img
              src="./images/backgrounds/education.jpg"
              className={stylesIntroduce.cardImage}
            />
            <div className={stylesIntroduce.title} ref={cardFirstTitleRef}>
              TIMELINE
            </div>
            <div className={stylesIntroduce.descriptionTimeline}>
              <div className={stylesIntroduce.box}>
                <span className={stylesIntroduce.timeline}>2016.03</span>
                <br />
                수원대학교 입학
                <span className={stylesIntroduce.sub}>미디어SW학과</span>
              </div>
              <div className={stylesIntroduce.box}>
                <span className={stylesIntroduce.timeline}>
                  2018.04 ~ 2020.01
                </span>
                <br />
                해군 입대<span className={stylesIntroduce.sub}>전산병</span>
              </div>
              <div className={stylesIntroduce.box}>
                <span className={stylesIntroduce.timeline}>2023.08</span>
                <br />
                수원대학교 졸업
                <span className={stylesIntroduce.sub}>미디어SW학과</span>
              </div>
              <div className={stylesIntroduce.box}>
                <span className={stylesIntroduce.timeline}>
                  2023.08 ~ 2024.04
                </span>
                <br />
                웹서비스 개발자 교육 수료
                <span className={stylesIntroduce.sub}>한국ICT기술협회</span>
              </div>
              <div className={stylesIntroduce.box}>
                <span className={stylesIntroduce.timeline}>
                  2024.06 ~ 2024.12
                </span>
                <br />
                작당연구소
                <span className={stylesIntroduce.sub}>웹 개발 인턴</span>
              </div>
            </div>
          </div>

          <div className={stylesIntroduce.card}>
            <img
              src="./images/backgrounds/skills.jpg"
              className={stylesIntroduce.cardImage}
            />
            <div className={stylesIntroduce.title} ref={cardSecondTitleRef}>
              SKILLS
            </div>

            <div className={stylesIntroduce.descriptionSkillsButton}>
              <button
                onClick={() => {
                  skillsLibraryActive('FRONTEND');
                }}
              >
                FRONTEND
              </button>
              <button
                onClick={() => {
                  skillsLibraryActive('BACKEND');
                }}
              >
                BACKEND
              </button>
              <button
                onClick={() => {
                  skillsLibraryActive('LIBRARY');
                }}
              >
                LIBRARY
              </button>
            </div>

            <div className={stylesIntroduce.descriptionSkills}>
              <div className={stylesIntroduce.container}>{skillsViewState}</div>
            </div>
          </div>

          <div className={stylesIntroduce.card}>
            <img
              src="./images/backgrounds/hobby.jpg"
              className={stylesIntroduce.cardImage}
            />
            <div className={stylesIntroduce.title} ref={cardThirdTitleRef}>
              HOBBY
            </div>
            <div className={stylesIntroduce.descriptionHobbys}>
              <div className={stylesIntroduce.container}>
                {hobbysView.current}
              </div>
            </div>
          </div>
          <div className={stylesIntroduce.card}>
            <div className={stylesIntroduce.title} ref={cardFourthTitleRef}>
              <img
                src="./images/backgrounds/null.jpg"
                className={stylesIntroduce.cardImage}
              />
              PLANS
            </div>
            <div className={stylesIntroduce.descriptionPlans}>
              <div className={stylesIntroduce.container}>
                {plansView.current}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 창 */}
      <span
        className={stylesIntroduce.mainTitle}
        onClick={() => {
          handleScroll('containerSecondRef');
        }}
      >
        PROJECTS
      </span>
      <div className={stylesIntroduce.containerSecond} ref={containerSecondRef}>
        <div className={stylesIntroduce.statusbar}>
          <span>PROJECTS.EXE</span>
        </div>

        <div className={stylesIntroduce.containerSecondBrowserButton}>
          <div onClick={() => gridFilp('NORMAL')}>전체 보기</div>
          <div onClick={() => gridFilp('개인 프로젝트')}>개인프로젝트</div>
          <div onClick={() => gridFilp('팀 프로젝트')}>팀프로젝트</div>
        </div>

        <div
          className={stylesIntroduce.containerSecondBrowser}
          ref={containerSecondBrowserRef}
        >
          {projectViewState}
        </div>
      </div>

      <div className={stylesIntroduce.containerThird} ref={containerThirdRef}>
        <div className={stylesIntroduce.containerThirdContainer}>
          <span className={stylesIntroduce.subTitle}>PERSONALITY</span>

          <div
            className={stylesIntroduce.subTitleSubject}
            ref={subTitleSubjectRef}
          >
            MY PERSONALITY
          </div>
          <div
            className={stylesIntroduce.subTitleDescription}
            ref={subTitleDescriptionRef}
          >
            카드를 클릭하면 해당 성격에 대해서 설명이 나옵니다.
          </div>

          <div className={stylesIntroduce.cardRotationAxis}>
            {Object.entries(MOCK_PERSONALITY).map(([id, { title, image }]) => (
              <div
                className={stylesIntroduce.cardRotationSubAxis}
                key={id}
                onClick={() => personalityHandler(id)}
              >
                <div className={stylesIntroduce.cardRotationSubAxisBox}>
                  <img src={`./images/personality/${image}`} />
                  <div className={stylesIntroduce.certificationTitle}>
                    {title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
