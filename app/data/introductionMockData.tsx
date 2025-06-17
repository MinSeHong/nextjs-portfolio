type GridCardId = {
  [id: number]: GridCardTitle;
};

type GridCardTitle = {
  gridCardTitle: string;
  gridCardTitleSummary: string;
  gridCardDescription: string;
  gridCardImage: string;
  gridCardDate: string;
  gridCardGroup: string;
  projectCardLink: ProjectCardLinkBox[];
  descriptionTitleSkillStack: DescriptionTitleSkillStackIcon[];
  descriptionReview: string;
  descriptionViewTitle: DescriptionViewTitle[];
};

type ProjectCardLinkBox = {
  url: string;
  icon: string;
};

type DescriptionTitleSkillStackIcon = {
  icon: string;
  name: string;
  group: string;
};

type DescriptionViewTitle = {
  descriptionViewTitleName: string;
  descriptionViewBoxDescription: DescriptionViewBoxDescription[];
};

type DescriptionViewBoxDescription = {
  descriptionViewBoxImage: string;
  descriptionViewBoxDescriptionSubtitle: string;
  descriptionViewBoxDescriptionTitleDescription: string;
};

const path0: string = './images/projects/깃허브 웹 포토폴리오/';
const path: string = './images/projects/JSP 게시판 홈페이지/';
const path1: string = './images/projects/네이버 속보 기사 크롤링/';
const path2: string = './images/projects/마스크 착용 객체 탐지/';
const path3: string = './images/projects/학생 교사 저장 프로그래밍/';
const path4: string = './images/projects/FITME 팀프로젝트/';

export const MOCK_GRID_CARDS: GridCardId = {
  2: {
    gridCardTitle: '깃허브 웹 포토폴리오',
    gridCardTitleSummary: `별도의 CMS 없이 직접 코드를 작성해서 나만의 디자인으로 웹 포트폴리오를 제작했습니다.
       이를 통해 맞춤형 디자인과 기능 구현이 가능했고, 개발 역량을 효과적으로 보여주고 싶었습니다.`,
    gridCardGroup: '개인 프로젝트',
    gridCardDescription: `
       GitHub Pages에 게시한 웹 포트폴리오로,
        사이트 소개와 제작 과정을 상세하게 설명하기 위해 만들었습니다.`,
    gridCardImage: path0 + 'main.gif',
    gridCardDate: '2025.05.11 ~ 2025.05.27',
    projectCardLink: [
      {
        url: '',
        icon: './icons/people-icon.png',
      },
      {
        url: 'https://github.com/minsehong/nextjs-portfolio',
        icon: './icons/github-icon.svg',
      },
      {
        url: 'https://minsehong.github.io/',
        icon: './icons/page-icon.png',
      },
    ],
    descriptionTitleSkillStack: [
      {
        icon: './icons/html-icon.png',
        name: 'html',
        group: 'frontend',
      },
      {
        icon: './icons/javascript-icon.png',
        name: 'javascript',
        group: 'frontend',
      },
      {
        icon: './icons/nextjs-icon.png',
        name: 'next.js',
        group: 'frontend',
      },
      {
        icon: './icons/gsap-icon.png',
        name: 'gsap',
        group: 'library',
      },
    ],
    descriptionReview: `
            유지보수를 용이하게 하기 위해 디렉토리 구조를 체계적으로 설계했습니다.
            데이터 기반 렌더링(Data-driven Rendering) 방식을 적용하여 DOM을 동적으로 생성했고,
            TypeScript로 Mock Data를 설계해 컴포넌트에 주입하는 형태로 구성하여 반복되는 템플릿을 효율적으로 재사용할 수 있도록 했습니다.
            또한, 애니메이션 라이브러리인 GSAP을 활용해 다양한 인터랙티브 효과를 구현했습니다.
            `,
    descriptionViewTitle: [
      {
        descriptionViewTitleName: '설계 계획',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path0 + '1.png',
            descriptionViewBoxDescriptionSubtitle: '디렉토리 설계',
            descriptionViewBoxDescriptionTitleDescription: `
                        다양한 페이지를 효율적으로 구현하면서, 소규모 프로젝트에 맞는 디렉토리 구조를 고민했습니다.
                        정적 리소스(이미지, 폰트)는 public 폴더에 저장하고,
                        데이터 객체, 컴포넌트, CSS 파일은 app 디렉토리 내에서 관리하도록 구조화했습니다.
                        또한, 각 페이지의 컴포넌트와 데이터를 한곳에서 관리해 유지보수와 개발 편의성을 높였습니다.
                        `,
          },

          {
            descriptionViewBoxImage: path0 + '1_1.png',
            descriptionViewBoxDescriptionSubtitle: '데이터 기반 렌더링',
            descriptionViewBoxDescriptionTitleDescription: `
                        반복적인 데이터를 효율적으로 관리하고, 동적으로 DOM을 생성하는 방식을 고민했습니다.
                        또한, 개발 과정에서 발생할 수 있는 타입 오류를 최소화하고자 했습니다.
                        ‘data’ 폴더에 Mock Data를 TypeScript 객체 형태로 저장하여, 수정·추가·삭제가 용이하도록 구현했습니다.
                        이 Mock Data를 기반으로 DOM을 동적으로 생성하며, 명확한 타입 지정으로 사전 오류를 방지했습니다.
                        `,
          },

          {
            descriptionViewBoxImage: path0 + '1_2.gif',
            descriptionViewBoxDescriptionSubtitle: 'Mock Data 예시',
            descriptionViewBoxDescriptionTitleDescription: `
                        프로젝트 소개에 사용되는 Mock Data 예시입니다.
                        Mock Data를 별도로 관리하여 반복적인 DOM 생성 작업을 줄였고,
                        프로젝트 관련 내용을 손쉽게 추가하거나 삭제할 수 있도록 설계했습니다.
                        `,
          },
        ],
      },
      {
        descriptionViewTitleName: 'Introduce',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path0 + '2.gif',
            descriptionViewBoxDescriptionSubtitle: '진행 설명',
            descriptionViewBoxDescriptionTitleDescription: `
                        사용자가 방문하자마자 관심을 끌 수 있는 인터랙티브 요소를 만들려고 했는데, 
                        CSS 애니메이션으로 연속 동작을 구현할 때는 delay 값을 일일이 계산해야 해서 관리가 번거로웠습니다.
                        GSAP의 timeline() 기능을 활용해 애니메이션을 순차적으로 연결함으로써, 복잡한 delay 계산 없이도 자연스럽고 효율적인 연속 애니메이션을 구현했습니다.
                        `,
          },
          {
            descriptionViewBoxImage: path0 + '2_1.gif',
            descriptionViewBoxDescriptionSubtitle: '배경 이동',
            descriptionViewBoxDescriptionTitleDescription: `
                        시작 화면에 사용자에게 더 몰입감 있고 역동적인 경험을 주기 위해,
                         배경이 정적인 이미지가 아니라 마우스 움직임에 반응했으면 좋겠다고 생각했습니다.
                         패턴 형식의 배경 이미지를 사용하고, 마우스 이동 방향에 따라 CSS의 background-position을 동적으로 변경하도록 구현해, 
                         배경이 자연스럽게 움직이는 효과를 만들었습니다.
                        `,
          },
        ],
      },
      {
        descriptionViewTitleName: 'About Me',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path0 + '3.gif',
            descriptionViewBoxDescriptionSubtitle: '진행 설명',
            descriptionViewBoxDescriptionTitleDescription: `
                        운영체제 애플리케이션 창처럼 보이는 UI/UX를 만들고 싶었으며, 
                        스크롤을 내릴 때 특정 위치에 도달하면 해당 창이 자연스럽게 나타나도록 동작하게 하고 싶었습니다.
                        GSAP의 ScrollTrigger를 활용해 스크롤 위치에 도달하면 특정 창이 등장하도록 애니메이션을 구현했고
                        사용자에게 몰입감이 있도록 했습니다.
                        `,
          },
          {
            descriptionViewBoxImage: path0 + '3_1.gif',
            descriptionViewBoxDescriptionSubtitle: 'Hover',
            descriptionViewBoxDescriptionTitleDescription: `
                        사용자가 마우스를 올렸을 때 나에 대한 설명을 직관적으로 보여주고, 각 내용이 자연스럽게 확장되도록 만들고자 했습니다.
                        Flexbox 레이아웃을 활용해 레이아웃을 구성하고, Hover 시 요소가 부드럽게 확대되면서 설명이 보이도록 애니메이션을 적용했습니다.
                        `,
          },
        ],
      },
      {
        descriptionViewTitleName: 'Project',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path0 + '4.gif',
            descriptionViewBoxDescriptionSubtitle: '진행 설명',
            descriptionViewBoxDescriptionTitleDescription: `
                    프로젝트 목록은 카드 갤러리 형태로 구성하여, 한눈에 다양한 프로젝트를 확인할 수 있도록 했습니다.
                    또한, 추후 다른 프로젝트를 쉽게 추가할 수 있도록 컴포넌트 구조와 데이터 설계를 확장성 있게 구현했습니다.
                    `,
          },
          {
            descriptionViewBoxImage: path0 + '4_1.gif',
            descriptionViewBoxDescriptionSubtitle: 'GSAP Flip',
            descriptionViewBoxDescriptionTitleDescription: `
                        프로젝트 카드를 클릭하면, 한 화면 내에서 모달 형태로 상세 내용을 보여주도록 구현했습니다.
                        단순한 전환보다 인터랙티브한 사용자 경험을 제공하고자 GSAP의 Flip 기능을 활용했습니다.
                        사용자가 프로젝트 카드를 클릭하면 해당 카드가 전체 화면으로 확장되도록 구현하는 데 사용했습니다.
                        `,
          },
          {
            descriptionViewBoxImage: path0 + '4_2.gif',
            descriptionViewBoxDescriptionSubtitle: '프로젝트 상세 화면',
            descriptionViewBoxDescriptionTitleDescription: `
                        Flip 애니메이션을 활용해 프로젝트 카드가 전체 화면으로 자연스럽게 전환되도록 구성했으며,
                        전환된 화면에서는 해당 프로젝트에 대한 전체적인 요약 내용이 먼저 보이도록 배치했습니다.
                        그리고 각 구현마다 어떤 생각을 가지고 구현을 하게 됐는지에 대해 구체적인 설명을 볼 수 있습니다.
                        또한, 각 섹션의 제목을 클릭하면 해당 위치로 부드럽게 이동하는 scrollTo 기능을 적용해 사용자의 탐색 편의성도 고려했습니다.
                        `,
          },
        ],
      },
      {
        descriptionViewTitleName: 'Personality',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path0 + '5.gif',
            descriptionViewBoxDescriptionSubtitle: '진행 설명',
            descriptionViewBoxDescriptionTitleDescription: `
                    저의 성격을 표현하는 내용을 카드 형식으로 제작했으며,
                    각 카드를 클릭하면 뒷면이 회전하며 성격에 대한 설명을 확인할 수 있도록 구현했습니다.
                    CSS 3D Transform을 활용해 360도 회전하는 인터랙티브한 효과를 적용했고,
                    이를 통해 사용자들이 카드를 클릭하며 제 성향을 알아볼 수 있도록 만들었습니다.
                    `,
          },
        ],
      },
      {
        descriptionViewTitleName: '사용자 경험 고려',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path0 + '6.gif',
            descriptionViewBoxDescriptionSubtitle: '메뉴',
            descriptionViewBoxDescriptionTitleDescription: `
                    사용자 경험을 개선하기 위해 포트폴리오 소개 섹션으로 쉽게 이동할 수 있도록
                    상단 메뉴를 생성하고 스크롤 이동 기능을 구현했습니다.
                    또한, 화면에 집중할 수 있도록 아래로 스크롤할 때는 메뉴가 자동으로 숨겨지고,
                    사용자가 위로 스크롤할 경우 다시 메뉴가 나타나도록 스크립트를 적용해 인터랙티브한 내비게이션 경험을 구현했습니다.
                    `,
          },
          {
            descriptionViewBoxImage: path0 + '6_1.gif',
            descriptionViewBoxDescriptionSubtitle: '반응형 제작',
            descriptionViewBoxDescriptionTitleDescription: `
                    사용자 경험을 개선하기 위해 다양한 해상도에 대응하는 반응형 웹을 구현했습니다.
                    SCSS의 @mixin과 @include 문법을 활용해 반복되는 미디어 쿼리를 모듈화하고,
                    필요한 컴포넌트에 import하여 적용했습니다.
                    이렇게 구성함으로써 다양한 디바이스 환경에서 일관된 사용자 경험을 제공할 수 있었습니다.
                    `,
          },
        ],
      },
    ],
  },
  3: {
    gridCardTitle: `FITME 팀 프로젝트`,
    gridCardTitleSummary: `
            ‘FITME’는 ‘건강한 나’ 또는 ‘나에게 맞춤’이라는 의미로 합성한 단어입니다.
            AI가 사용자의 정보를 바탕으로 식단과 운동을 추천하며 일정을 관리해주는 헬스케어 서비스입니다.
            `,
    gridCardGroup: '팀 프로젝트',
    gridCardDescription: `
            AI를 활용한 팀 프로젝트를 기획하던 중, 식단과 운동을 동시에 체계적으로 관리해주는 통합 서비스가 부족하다는 점을 발견했습니다.
            사용자의 건강 관리를 효율적으로 지원하기 위해,
            식단과 운동을 함께 관리할 수 있는 플랫폼을 기획하고,
            AI 기반 피트니스 트레이너 기능을 포함한 통합 서비스를 개발하게 되었습니다.
            `,
    gridCardImage: path4 + '/main.gif',
    gridCardDate: '2023.12.08 ~ 2024.03.15',
    projectCardLink: [
      {
        url: '',
        icon: './icons/peoples-icon.png',
      },
      {
        url: 'https://github.com/MinSeHong/team-project-fitme',
        icon: './icons/github-icon.svg',
      },
    ],
    descriptionTitleSkillStack: [
      {
        icon: './icons/react-icon.png',
        name: 'react',
        group: 'frontend',
      },
      {
        icon: './icons/flask-icon.png',
        name: 'flask',
        group: 'library',
      },
      {
        icon: './icons/spring-icon.svg',
        name: 'spring boot',
        group: 'backend',
      },
      {
        icon: './icons/oracle-icon.png',
        name: 'oracle',
        group: 'dbms',
      },
      {
        icon: './icons/github-icon.svg',
        name: 'github',
        group: 'tool',
      },
      {
        icon: './icons/figma-icon.png',
        name: 'figma',
        group: 'tool',
      },
      {
        icon: './icons/notion-icon.png',
        name: 'notion',
        group: 'tool',
      },
    ],
    descriptionReview: `
            프로젝트에서 프론트엔드 개발과 기획을 주도했습니다.
            React의 디렉토리 구조를 설계하고, UML 및 데이터베이스 구조를 정의하여 전체적인 개발 흐름을 잡는 데 기여했습니다.
            기능 개발 측면에서는 SMTP 이메일 인증, 메인 페이지, 게임 페이지, 게시판 CRUD, 메디컬 설문지 작성 페이지 등을 직접 구현했고,
            플로팅 바와 사이드 메뉴의 애니메이션 효과도 적용해 사용자 경험을 개선했습니다.
            또한 팀원들이 원활하게 협업할 수 있도록 프론트엔드 개발 환경을 세팅하고 Notion을 통해 업무를 관리했습니다.
            `,
    descriptionViewTitle: [
      {
        descriptionViewTitleName: '데이터베이스 설계',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path4 + '1.png',
            descriptionViewBoxDescriptionSubtitle: 'UML 제작',
            descriptionViewBoxDescriptionTitleDescription: `
                            서비스에 필요한 기능을 분석한 뒤, 이를 기반으로 전체적인 흐름을 구조화하여 UML를 설계했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path4 + '1_1.png',
            descriptionViewBoxDescriptionSubtitle: 'DB설계 담당',
            descriptionViewBoxDescriptionTitleDescription: `
                            프로젝트에서 데이터베이스 설계를 전담했습니다.
                            회원 정보, 친구 추가, 채팅, 캘린더, 게시글, 소셜 로그인 등 다양한 기능에 필요한 테이블을 직접 설계했으며,
                            프로젝트 진행 중 발생하는 요구 사항에 따라 데이터베이스를 지속적으로 수정·보완하며 관리했습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '진행 계획',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path4 + '2.png',
            descriptionViewBoxDescriptionSubtitle: 'Notion 사용',
            descriptionViewBoxDescriptionTitleDescription: `
                            팀 프로젝트를 진행하면서 일정이나 자료가 흩어져 있어 협업 효율이 떨어지는 문제가 있었습니다.
                            Notion을 이용해 일정 관리, 회의록 작성, 자료 정리 등의 전용 페이지를 만들었고 팀원들과 공유하여 체계적인 협업 환경을 마련했습니다.
                            모든 정보가 한 곳에 모여 있어 팀원 간 커뮤니케이션이 원활해졌고, 업무 진행 상황을 쉽게 파악할 수 있어 협업 효율이 크게 향상되었습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path4 + '2_1.png',
            descriptionViewBoxDescriptionSubtitle: 'React 담당',
            descriptionViewBoxDescriptionTitleDescription: `
                            React에 대한 이해도가 높아 팀 내에서 프론트엔드 전반을 담당했습니다.
                            디렉토리 구조를 설계하고, 팀원들이 개발 중 겪는 문제를 해결하며 기술적인 지원을 제공했습니다.
                            또한 GitHub를 통해 코드 관리를 맡고, 프로젝트 일정에 맞춰 원활하게 진행되도록 전체 흐름을 조율했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path4 + '2_2.png',
            descriptionViewBoxDescriptionSubtitle: '팀원 멘토 담당',
            descriptionViewBoxDescriptionTitleDescription: `
                            코드에 익숙하지 않은 팀원들이 원활하게 작업할 수 있도록 멘토 역할을 맡았습니다.
                            팀원들에게 React 컴포넌트 구조와 상태 관리 방법을 설명하며, 코드를 깔끔하고 효율적으로 설계하는 방법을 알려줬습니다.
                            또한 팀원들이 보다 나은 코드를 작성할 수 있도록 서로 코드 리뷰를 하며 실질적인 도움을 제공했습니다.
                            이러한 멘토링 방식을 통해 팀원들에게 자신감을 불어넣었고, 그 결과 팀원들의 개발 역량이 크게 향상되어 프로젝트 진행이 원활해졌습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '메인 페이지 제작',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path4 + '3.png',
            descriptionViewBoxDescriptionSubtitle: '페이지 제작',
            descriptionViewBoxDescriptionTitleDescription: `
                            운동과 식단 관리를 위한 메인 페이지에 사용자에게 직관적이고 흥미로운 시작 화면을 제공하고 싶었습니다.
                            시작 화면에 운동 관련 영상을 배치하고, 서비스에 대한 간단한 설명을 포함하여 사용자가 한눈에 이해할 수 있도록 메인 페이지를 구성했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path4 + '3_1.gif',
            descriptionViewBoxDescriptionSubtitle: '페이지 이동',
            descriptionViewBoxDescriptionTitleDescription: `
                             페이지 간 이동 기능을 효율적으로 구현하고, 팀원들이 독립적으로 작업하면서 발생하는 충돌을 줄이고 싶었습니다.
                             React DOM Router를 활용해 페이지 이동 기능을 구현하고, 각 페이지별 컴포넌트를 미리 구성하여 팀원들이 독립적으로 작업할 수 있도록 구조를 설계했습니다.
                             덕분에 작업 간 충돌이 최소화되고, 프론트엔드 개발 중 발생하는 에러를 빠르게 파악하고 해결할 수 있었습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path4 + '3_2.gif',
            descriptionViewBoxDescriptionSubtitle: '사이드 메뉴 제작',
            descriptionViewBoxDescriptionTitleDescription: `
                            사이드바 메뉴의 공간 활용과 사용자 편의성을 높이고 싶었습니다.
                            우스 오버 시 하위 메뉴가 확장되어 표시되는 호버 기반 드롭다운 메뉴(Hover-based Dropdown Menu) 방식을 적용해, 
                            화면 공간을 효율적으로 사용하면서 직관적인 탐색이 가능하도록 구현했습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '이메일 인증',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path4 + '4.png',
            descriptionViewBoxDescriptionSubtitle: 'SMPT 이메일 인증',
            descriptionViewBoxDescriptionTitleDescription: `
                            매크로나 자동화 도구를 이용해 다수의 가짜 계정이 생성되는 문제를 방지하고 싶었습니다.
                            SMPT를 이용한 이메일 인증 절차를 도입해, 사용자가 실제 이메일을 소유했음을 확인하도록 했으며,
                             이를 통해 무분별한 다중 계정 생성을 효과적으로 차단했습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '챗봇 모달',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path4 + '5.gif',
            descriptionViewBoxDescriptionSubtitle: '모달 제작',
            descriptionViewBoxDescriptionTitleDescription: `
                            사용자와 실시간으로 대화하며 서비스 관련 문의에 정확히 답변할 수 있는 챗봇 기능이 필요했습니다.
                            실시간 채팅이 가능한 챗봇 모달을 제작하고 GPT API를 활용해 서비스에 맞는 답변을 제공하도록 구현했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path4 + '5_1.png',
            descriptionViewBoxDescriptionSubtitle: 'Web Speech Api',
            descriptionViewBoxDescriptionTitleDescription: `
                            사용자 편의를 위해 텍스트 입력 외에도 음성으로 질문하고 답변을 들을 수 있는 기능이 있으면 좋을 것 같았습니다.
                             Web Speech API를 활용해 음성 인식 기능을 구현했고,
                              챗봇 답변을 음성으로 전달하는 기능도 함께 제공해서 자연스럽고 편리한 대화를 할 수 있도록 했습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '당뇨병 진단 페이지',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path4 + '6.png',
            descriptionViewBoxDescriptionSubtitle: '페이지 제작',
            descriptionViewBoxDescriptionTitleDescription: `
                            사용자가 입력한 정보로 정확한 진단 결과를 제공하는 페이지가 필요했습니다.
                            당뇨병 진단이 가능한 웹 페이지를 제작하고, 진단 결과에 필요한 값을 입력할 수 있도록 페이지를 구현했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path4 + '6_1.gif',
            descriptionViewBoxDescriptionSubtitle: '설문지 애니메이션',
            descriptionViewBoxDescriptionTitleDescription: `
                            당뇨병 진단 설문지를 사용자가 쉽게 사용할 수 있도록 제작해보기로 했습니다.
                            애니메이션 효과를 적용해 설문지를 단계별로 자연스럽게 진행되도록 구현했고, 
                            설문 진행 상황에 맞춰 진행 바를 표시했습니다. 
                            또한 사용자가 언제든 이전 질문으로 돌아갈 수 있는 기능도 제공하여 편의성을 높였습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '찍먹 페이지',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path4 + '7.gif',
            descriptionViewBoxDescriptionSubtitle: '페이지 제작',
            descriptionViewBoxDescriptionTitleDescription: `
                            서비스를 더 많은 사람이 이용하도록 유도할 방법이 필요했습니다.
                            운동 게임을 도입해 사용자가 참여해서 포인트를 얻을 수 있도록 제안을 했고,
                            보유 포인트로 상품을 구매할 수 있도록 페이지를 제작했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path4 + '7_1.png',
            descriptionViewBoxDescriptionSubtitle: '상품 크롤링 기능',
            descriptionViewBoxDescriptionTitleDescription: `
                            서비스에서 상품을 직접 판매하는건 어렵다고 생각했습니다.
                            별도의 상품 판매를 만드는 대신, 특정 홈쇼핑 사이트를 크롤링해 상품 정보를 가져오도록 했습니다.
                            사용자가 포인트로 상품을 구매하면, 실제 결제는 관리자가 대신 결제하도록 설계했습니다.
                            이를 통해 별도의 상품 설계 없이 사용자에게 상품 구매를 할 수 있도록 제작했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path4 + '7_2.gif',
            descriptionViewBoxDescriptionSubtitle: '상품 구매/찜 페이지',
            descriptionViewBoxDescriptionTitleDescription: `
                            사용자가 구매한 상품과 찜한 상품을 각각 확인하도록 하는 기능이 있어야 한다고 생각했습니다.
                            구매한 상품과 찜한 상품 목록을 확인할 수 있는 페이지를 구현하여,
                            사용자가 편리하게 자신의 상품 내역을 관리할 수 있도록 했습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '게임 페이지',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path4 + '8.png',
            descriptionViewBoxDescriptionSubtitle: '페이지 제작',
            descriptionViewBoxDescriptionTitleDescription: `
                            서비스 이용자 수를 늘리기 위해 운동 게임을 도입했습니다.
                            사용자들이 게임을 즐기면서 자연스럽게 서비스에 관심을 갖도록 유도했으며, 
                            게임을 통해 포인트를 획득하고 이 포인트로 상품을 구매할 수 있도록 구현했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path4 + '8_1.gif',
            descriptionViewBoxDescriptionSubtitle: '게임 방 목록 디자인',
            descriptionViewBoxDescriptionTitleDescription: `
                            실시간으로 사용자들이 참여할 수 있는 게임 방 목록을 제공했습니다.
                            게임 방의 진행 상황과 참여 인원 등 상세 정보를 실시간으로 확인할 수 있도록 구현하고
                            사용자가 편리하게 원하는 방에 참여할 수 있도록 했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path4 + '8_2.gif',
            descriptionViewBoxDescriptionSubtitle: '프로필 이미지 생성 AI',
            descriptionViewBoxDescriptionTitleDescription: `
                            기존에 고정적으로 제공되는 기본 프로필 이미지만으로는 선택의 폭이 제한적일 거 같았습니다.
                            GPT API를 활용해 텍스트 입력으로 기본 프로필 이미지를 생성하는 기능을 구현했습니다.
                            예를 들어 ‘귀여운 고양이’ 같은 문구를 입력하면 AI가 해당 이미지를 생성하고, 
                            프로필 사진으로 사용할 수 있습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path4 + '8_3.gif',
            descriptionViewBoxDescriptionSubtitle: '게임 방 생성 모달',
            descriptionViewBoxDescriptionTitleDescription: `
                            사용자가 직접 게임 방을 생성할 수 있도록 모달 창을 구현하여, 자유롭게 방을 만들고 게임을 시작할 수 있도록 했습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '소셜 커뮤니티',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path4 + '9.gif',
            descriptionViewBoxDescriptionSubtitle: '페이지 제작 및 기능 설계',
            descriptionViewBoxDescriptionTitleDescription: `
                            커뮤니티 게시판을 사용자들이 편리하게 이용하고 여러가지 기능을 사용할 수 있도록 하고 싶었습니다.
                            스크롤을 내리면 자동으로 이전 글이 추가되는 무한 스크롤 기능을 구현해 사용자 경험을 높였습니다.
                            또한 친구 추가, 친구 목록 조회, 게시판 CRUD, 팔로우·팔로워, 좋아요, 스크랩 기능을 설계·구현하여 커뮤니티 내 소통과 참여가 활성화되도록 했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path4 + '9_1.gif',
            descriptionViewBoxDescriptionSubtitle: '친구 관련 기능',
            descriptionViewBoxDescriptionTitleDescription: `
                            소셜 커뮤니티에서 사용자들이 원활하게 친구 관계를 관리할 수 있는 기능이 필요할 것 같았습니다.
                            친구 추가, 친구 목록 조회, 친구 삭제, 친구 요청 등 필수적인 친구 관련 기능들을 페이지로 제작하고 CRUD를 구현했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path4 + '9_2.gif',
            descriptionViewBoxDescriptionSubtitle: '게시판 기능',
            descriptionViewBoxDescriptionTitleDescription: `
                            게시글 내 여러 이미지를 효과적으로 보여주고, 사용자와의 다양한 상호작용 기능을 만들기로 했습니다.
                            게시글 이미지를 가로 스크롤 방식으로 여러 장 볼 수 있도록 구현했으며, 좋아요, 스크랩, 신고, 조회수 기능 등 다양한 상호작용 기능도 설계·개발했습니다.
                            게시글 상세보기는 모달 형태로 구현해, 사용자가 페이지 이동 없이도 빠르게 내용을 확인하고 상호작용할 수 있도록 만들었습니다.
                            `,
          },
        ],
      },
    ],
  },
  4: {
    gridCardTitle: '마스크 착용 객체 탐지',
    gridCardTitleSummary: `
            YOLO v8 객체 탐지를 이용하여 마스크 착용한 사람들을 탐지하는 프로젝트를 제작했습니다.
            Python을 이용하여 제작하였고 결과 값을 웹에 출력합니다.
            `,
    gridCardGroup: '개인 프로젝트',
    gridCardDescription: `
            마스크 착용 여부를 인식하는 프로그램을 구현하고, 이를 웹에서 쉽게 확인할 수 있는 기능을 만들어보기로 했습니다.
            Python과 Flask로 백엔드 서버를 구축하고, YOLOv8 모델을 활용해 마스크 착용 여부를 분류하도록 학습시켰습니다.
            분석 결과를 웹 페이지에 표시하도록 구현해 사용자가 직관적으로 볼 수 있도록 했습니다.
            `,
    gridCardImage: path2 + '/main.png',
    gridCardDate: '2024.02.12 ~ 2024.02.15',
    projectCardLink: [
      {
        url: '개인, 단체 프로젝트 구분',
        icon: './icons/people-icon.png',
      },
      {
        url: 'https://github.com/MinSeHong/python-yolo-object-detection-project',
        icon: './icons/github-icon.svg',
      },
    ],
    descriptionTitleSkillStack: [
      {
        icon: './icons/html-icon.png',
        name: 'html',
        group: 'frontend',
      },
      {
        icon: './icons/javascript-icon.png',
        name: 'javascript',
        group: 'frontend',
      },
      {
        icon: './icons/python-icon.png',
        name: 'python',
        group: 'backend',
      },
    ],
    descriptionReview: `
            YOLO 모델을 활용해 마스크 착용 여부를 구분하도록 학습시켰습니다.
            사용자는 웹에서 이미지를 업로드하고, Flask 서버에 요청을 보내 결과를 받아옵니다.
            받아온 결과는 웹페이지에 표시되며, jQuery를 이용해 시각적 효과를 더했습니다.
            `,
    descriptionViewTitle: [
      {
        descriptionViewTitleName: 'FLASK서버 구축',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path2 + '1.png',
            descriptionViewBoxDescriptionSubtitle: 'FLASK 서버',
            descriptionViewBoxDescriptionTitleDescription: `
                            웹에서 업로드한 이미지에 대한 객체 탐지 결과를 실시간으로 반환할 서버가 필요했습니다.
                            Flask 서버를 구축해 웹에서 업로드된 이미지를 처리하고, 객체 탐지 결과를 계산한 뒤 웹에 결과 값을 전달하도록 구현했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path2 + '1_1.png',
            descriptionViewBoxDescriptionSubtitle: 'YOLO 객체 탐지 사용',
            descriptionViewBoxDescriptionTitleDescription: `
                            마스크 착용 여부를 정확히 구분할 수 있는 기능이 필요했습니다.
                            YOLOv8이 해당 기능을 지원한다는 점을 알게 되어 이를 활용하기로 결정했습니다.
                            마스크 착용자와 미착용자의 이미지를 학습시켜, 마스크 착용 여부를 효과적으로 구분하는 모델을 구현했습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '웹 페이지 제작',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path2 + '2.png',
            descriptionViewBoxDescriptionSubtitle: '웹페이지 배경',
            descriptionViewBoxDescriptionTitleDescription: `
                            모델에서 반환되는 값이 숫자나 텍스트 형태라, 사용자가 결과를 직관적으로 이해하기 어려웠습니다.
                            사용자가 이미지를 업로드하고, 결과를 이미지로 직접 확인할 수 있는 웹 페이지를 제작해 이해를 돕도록 했습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '객체탐지',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path2 + '3.png',
            descriptionViewBoxDescriptionSubtitle: '이미지 업로드',
            descriptionViewBoxDescriptionTitleDescription: `
                            ‘UPLOAD’ 버튼을 통해 이미지를 업로드할 수 있으며,
                            업로드한 이미지는 미리보기로 화면에 표시됩니다.
                            서버에 요청을 보내 결과를 받기 전까지는 로딩 화면이 나타나도록 구현했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path2 + '3_1.png',
            descriptionViewBoxDescriptionSubtitle: '결과값 출력',
            descriptionViewBoxDescriptionTitleDescription: `
                            마스크를 착용한 사람 위치에 빨간 네모를 표시하고,
                            정확도 수치를 보여주도록 츨력해 잘 탐지했는지 확인할 수 있도록 했습니다.
                            `,
          },
        ],
      },
    ],
  },
  5: {
    gridCardTitle: '네이버 속보 기사 크롤링',
    gridCardTitleSummary: `Python으로 네이버 속보 기사를 크롤링해 새로운 페이지에 출력되도록 했습니다.
            `,
    gridCardGroup: '개인 프로젝트',
    gridCardDescription: `
            Python의 bs4 라이브러리를 사용해 네이버 속보 기사를 크롤링하였고, 
            크롤링한 데이터를 GSAP을 활용해 카드 형태로 시각화하여 웹에 구현했습니다.
            `,
    gridCardImage: path1 + '/main.gif',
    gridCardDate: '2024.01.04 ~ 2024.01.10',
    projectCardLink: [
      {
        url: '',
        icon: './icons/people-icon.png',
      },
      {
        url: 'https://github.com/MinSeHong/python-crawling-project',
        icon: './icons/github-icon.svg',
      },
    ],
    descriptionTitleSkillStack: [
      {
        icon: './icons/html-icon.png',
        name: 'html',
        group: 'frontend',
      },
      {
        icon: './icons/javascript-icon.png',
        name: 'javascript',
        group: 'frontend',
      },
      {
        icon: './icons/gsap-icon.png',
        name: 'gsap',
        group: 'library',
      },
      {
        icon: './icons/python-icon.png',
        name: 'python',
        group: 'backend',
      },
    ],
    descriptionReview: `
              웹에서 크롤링 데이터를 받아와 사용자에게 시각적으로 흥미롭게 보여주고자 했습니다.
              Python의 Flask를 사용해 백엔드 서버를 구축하고, 웹에서 Flask 서버로 요청을 보내 크롤링된 데이터를 받아오도록 구현했습니다.
              받아온 데이터를 인터랙티브하게 표현하기 위해 GSAP 라이브러리를 활용했습니다.
            `,
    descriptionViewTitle: [
      {
        descriptionViewTitleName: 'FLASK 서버 구축',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path1 + '1.png',
            descriptionViewBoxDescriptionSubtitle: '네이버 기사 크롤링',
            descriptionViewBoxDescriptionTitleDescription: `
                            Python의 bs4(BeautifulSoup)를 활용해 네이버 기사에서 원하는 내용을 크롤링했고,
                             해당 기능은 Python 모듈로 구성해 재사용성과 유지보수성을 높였습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path1 + '1_1.png',
            descriptionViewBoxDescriptionSubtitle: '응답 값 설정',
            descriptionViewBoxDescriptionTitleDescription: `
                            클라이언트가 웹 요청을 보냈을 때, 가독성이 높고 활용하기 쉬운 형태로 데이터를 전달할 필요가 있었습니다.
                            클라이언트의 웹 요청에 대해 응답 데이터를 객체(JSON) 형태로 반환하도록 처리해, 
                            프론트엔드에서 데이터를 효율적으로 활용할 수 있도록 했습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '웹 페이지 제작',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path1 + '2.png',
            descriptionViewBoxDescriptionSubtitle: '웹페이지 배경',
            descriptionViewBoxDescriptionTitleDescription: `
                            단순한 배경보다는 사용자에게 흥미를 줄 수 있는 디자인을 고민했습니다. 특히, 크롤링된 데이터를 재미있고 창의적으로 표현하고 싶었습니다.
                            디자인에 재미 요소를 더하기 위해 배경을 칠판으로 구성하고, 
                            그 위에 카드가 하나씩 나타나도록 연출했습니다. 이를 통해 정보 전달과 시각적 흥미도 높일 수 있도록 했습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: 'GSAP 애니메이션',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path1 + '3.gif',
            descriptionViewBoxDescriptionSubtitle: '시작 화면',
            descriptionViewBoxDescriptionTitleDescription: `
                            단순한 제목 출력 대신, 사용자의 시선을 끌 수 있는 애니메이션과 인터랙티브 요소를 추가하고 싶었습니다.
                            GSAP의 SplitText를 활용해 'CRAWLING'이라는 제목의 글자가 순차적으로 등장하도록 구성했습니다.
                            또한, GSAP의 Draggable 기능을 적용해 사용자가 텍스트를 자유롭게 드래그할 수 있도록 만들어 시각적 재미를 추가했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path1 + '3_1.gif',
            descriptionViewBoxDescriptionSubtitle: '크롤링 시작 애니메이션',
            descriptionViewBoxDescriptionTitleDescription: `
                            크롤링 버튼 클릭하고 크롤링이 진행되는 동안 사용자가 응답이 없는 것처럼 느끼지 않도록, 진행 상태를 직관적으로 알려줄 방법이 필요했습니다.
                            GSAP의 SplitText를 활용해 'LOADING' 텍스트를 문자 단위(char)로 분리한 뒤, toArray를 통해 각 글자에 순차적인 애니메이션을 적용했습니다.
                            각 글자가 360도 회전하며 로딩 상태임을 동적으로 표현했고, 사용자 경험을 더욱 생동감 있게 제작했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path1 + '3_2.gif',
            descriptionViewBoxDescriptionSubtitle: '카드 애니메이션',
            descriptionViewBoxDescriptionTitleDescription: `
                            크롤링한 데이터를 단순 나열하는 대신, 시각적으로 흥미롭게 표현하고자 했습니다.
                            특히 칠판 배경과 어울리도록 카드 형태의 디자인을 제작했으며, 크롤링 데이터는 카드로 출력되도록 구현했습니다.
                            크롤링 데이터는 카드 형태로 나오고, GSAP의 Physics2DPlugin을 활용해 무작위로 펼쳐지도록 애니메이션을 적용했습니다.
                            이러한 애니메이션을 제작해 시각적 재미를 더했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path1 + '3_3.gif',
            descriptionViewBoxDescriptionSubtitle: 'DRAGGABLE 기능',
            descriptionViewBoxDescriptionTitleDescription: `
                            카드가 무작위로 펼쳐진 상태에 머무르지 않고, 사직접 드래그하고 던질 수 있는 인터랙티브한 기능이 있으면 좋을 것 같았습니다.
                            GSAP의 Draggable 기능을 활용해 카드를 마우스로 드래그하고 던질 수 있도록 구현했습니다.
                            또한, 칠판 영역 밖으로 카드가 이동하지 않도록 설정해 사용자 경험을 개선했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path1 + '3_4.gif',
            descriptionViewBoxDescriptionSubtitle: 'SINGLE CLICK',
            descriptionViewBoxDescriptionTitleDescription: `
                            카드에 담긴 기사의 자세한 내용은, 사용자가 카드를 클릭하면 나오도록 하는게 좋을 것 같다고 생각했습니다.
                            카드를 클릭하면 기사 제목과 내용을 카드 옆에 표시하도록 했으며,
                            더블 클릭 시에는 해당 기사 사이트가 새 창으로 열리도록 구현해 사용자의 접근성을 높였습니다.
                            `,
          },
        ],
      },
    ],
  },
  6: {
    gridCardTitle: 'JSP 게시판 홈페이지',
    gridCardTitleSummary: `Java JSP 이용하여 게시글을 작성할 수 있는 홈페이지를 개발했습니다.
            `,
    gridCardGroup: '개인 프로젝트',
    gridCardDescription: `교육 기관에서 게시판 홈페이지 프로젝트를 수행했습니다.
            프로젝트는 4주의 기간동안 진행했으며 DataBase 구축, Tomcat 서버 구축,
            JSP를 이용한 회원 로그인, 게시글 CRUD를 제작했습니다.
            `,
    gridCardImage: path + '/main.gif',
    gridCardDate: '2023.11.08 ~ 2023.12.01',
    projectCardLink: [
      {
        url: '',
        icon: './icons/people-icon.png',
      },
      {
        url: 'https://github.com/MinSeHong/jsp-homepage-project',
        icon: './icons/github-icon.svg',
      },
    ],
    descriptionTitleSkillStack: [
      {
        icon: './icons/html-icon.png',
        name: 'html',
        group: 'frontend',
      },
      {
        icon: './icons/javascript-icon.png',
        name: 'javascript',
        group: 'frontend',
      },
      {
        icon: './icons/jsp-icon.png',
        name: 'jsp',
        group: 'backend',
      },
      {
        icon: './icons/tomcat-icon.png',
        name: 'tomcat',
        group: 'backend',
      },
    ],
    descriptionReview: ` 
            Oracle을 이용하여 DataBase를 설계 하고, Eclipse를 이용하여 Tomcat 서버를 구축했습니다.

            웹 프로그래밍 언어를 깊게 이해하고 싶어, 직접 만들 수 있는 기능들은 API 사용하지 않고
            만들어 보았습니다. 사용자의 상호작용에 따라 발생할 수 있는 예외를 최소화 하려고 했으며,
            게시판 CRUD를 제작하면서 여러가지 디테일을 적용해 보았습니다.

            또한 웹 소켓을 이용한 실시간 채팅기능, 이미지 업로드 그리고 웹 페이징 기능 등을 제작해보았습니다.
            `,
    descriptionViewTitle: [
      {
        descriptionViewTitleName: '회원가입/탈퇴 기능',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path + '1.gif',
            descriptionViewBoxDescriptionSubtitle: '회원 로그인 페이지',
            descriptionViewBoxDescriptionTitleDescription: `
                            로그인과 회원 가입 화면을 분리하지 않고 한 화면에서 직관적으로 전환할 수 있는 UI를 구현하고 싶었습니다.
                            하나의 div에 로그인과 회원 가입 내용을 배치하고, 
                            흰색 버튼 클릭 시 div가 회전하며 두 화면이 자연스럽게 전환되도록 만들었습니다.
                            이 방식을 이용해 사용자가 손쉽게 화면을 전환할 수 있게 했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path + '1_1.gif',
            descriptionViewBoxDescriptionSubtitle: '회원가입 유효성 검사',
            descriptionViewBoxDescriptionTitleDescription: `
                            회원 가입은 아이디, 이메일, 비밀번호, 학력 사항, 그리고 취미를 입력하도록 제작했습니다.
                            유효성 검사는 먼저 JavaScript에서 수행하여 사용자 입력을 즉시 확인할 수 있도록 했고, 이후 서버에 요청을 보내도록 구성했습니다.
                            이를 통해 즉각적인 피드백으로 사용자 경험을 향상시키고, 불필요한 서버 요청을 줄여 서버 부담을 줄일 수 있었습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path + '1_2.png',
            descriptionViewBoxDescriptionSubtitle: '회원정보 수정&탈퇴',
            descriptionViewBoxDescriptionTitleDescription: `
                            개인정보 보호를 위해 자신의 회원 정보를 자유롭게 수정할 수 있는 기능과, 
                            탈퇴 시 관련 데이터가 완전히 삭제되어야 하는 점을 고민했습니다.
                            회원 정보 수정 기능과 메모 기능을 구현해 사용자가 자신의 정보를 관리할 수 있도록 했으며,
                            회원 탈퇴 시 작성한 글과 댓글을 모두 삭제하여 개인정보 보호에 신경썼습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path + '1_3.gif',
            descriptionViewBoxDescriptionSubtitle: '로그인 후 페이지 이동',
            descriptionViewBoxDescriptionTitleDescription: `
                            아이디와 비밀번호 형식을 먼저 검증하지 않으면, 잘못된 입력으로 인해 서버에 불필요한 요청이 많이 발생할 수 있어 효율성이 떨어졌습니다.
                            JavaScript를 사용해 아이디와 비밀번호 형식을 클라이언트 측에서 먼저 검증하여 불필요한 서버 요청을 줄였습니다. 
                            이후 서버에 요청해 회원 정보를 확인하고, 등록된 회원이면 게시판 페이지로 이동하도록 처리했습니다.
                            `,
          },
        ],
      },

      {
        descriptionViewTitleName: '메인 홈페이지 레이아웃',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path + '2.png',
            descriptionViewBoxDescriptionSubtitle: '레이아웃 설계',
            descriptionViewBoxDescriptionTitleDescription: `
                            여러 페이지를 별도로 열지 않고 한 화면 내에서 페이지 이동이 가능하도록 하면서,
                             주요 기능(회원 정보 수정, 로그아웃)을 쉽게 접근할 수 있게 구성하고 싶었습니다.
                            각 레이아웃에 iframe을 활용해 내부 페이지 이동이 가능하도록 구현했고, 
                            상단에 회원 정보 수정과 로그아웃 기능을 배치해 편리하게 접근할 수 있도록 했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path + '2_1.png',
            descriptionViewBoxDescriptionSubtitle: '메인 홈페이지 디자인',
            descriptionViewBoxDescriptionTitleDescription: `
                            회원 로그인 한 후 처음에 보여주는 화면입니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '글 작성 게시판',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path + '3.gif',
            descriptionViewBoxDescriptionSubtitle: '웹 페이징',
            descriptionViewBoxDescriptionTitleDescription: `
                            게시글이 많아질 경우 한 화면에 모두 표시하면 가독성이 떨어지고, 사용자가 원하는 글을 찾기 어려웠습니다.
                            페이징 기능을 구현해 다음 페이지와 이전 페이지로 손쉽게 이동할 수 있도록 개선했습니다.
                            데이터베이스에서 글 데이터를 가져오고, 전체 글 개수에 따라 페이징이 동적으로 적용되도록 사용자 편의성을 높였습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path + '3_0.gif',
            descriptionViewBoxDescriptionSubtitle: '웹 페이징 검색',
            descriptionViewBoxDescriptionTitleDescription: `
                            게시글이 많아질수록 원하는 글을 빠르게 찾기 어려워 검색 기능과 함께 결과에 맞는 페이징이 필요했습니다.
                            게시글의 제목, 작성자, 내용 등을 기준으로 검색할 수 있는 기능을 구현했고,
                            검색 결과에 따라 페이징이 새로 적용되도록 해서 검색 결과를 탐색할 수 있게 했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path + '3_1.gif',
            descriptionViewBoxDescriptionSubtitle: '게시글 CRUD',
            descriptionViewBoxDescriptionTitleDescription: `
                            다양한 텍스트 에디터가 존재하지만, 웹 프로그램에 대한 이해를 높이고자 기능을 직접 구현해보고 싶었습니다.
                            웹 프로그램에 대한 이해를 높이고자 직접 텍스트 에디터를 제작해보았습니다.
                            직접 텍스트 에디터를 제작하고, execCommand 기능을 활용해 글자의 속성을 변경할 수 있도록 구현했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path + '3_2.png',
            descriptionViewBoxDescriptionSubtitle: '게시글 보기',
            descriptionViewBoxDescriptionTitleDescription: `
                            게시글을 클릭했을 때, 작성자가 아닌 사용자가 수정하거나 삭제하지 못하도록 관리할 필요가 있었습니다.
                            게시글 상세 화면에서 내가 작성한 글인 경우에만 삭제 및 수정 버튼이 나타나도록 구현해, 권한을 명확히 하고 사용자 경험을 개선했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path + '3_3.gif',
            descriptionViewBoxDescriptionSubtitle: '게시글 댓글 기능',
            descriptionViewBoxDescriptionTitleDescription: `
                            게시글만으로는 소통이 제한적이라, 사용자 간 의견 교환과 피드백을 위한 댓글 기능이 필요하다고 느꼈습니다. 
                            또한, 사용자가 자신의 댓글을 쉽게 구분하고 관리할 수 있어야 했습니다.
                            여러 사람이 댓글을 작성할 수 있도록 기능을 구현했고, 내가 작성한 댓글은 빨간색으로 표시하여 쉽게 구분할 수 있게 했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path + '3_4.gif',
            descriptionViewBoxDescriptionSubtitle: '댓글 수정',
            descriptionViewBoxDescriptionTitleDescription: `
                            작성한 댓글에 대해 삭제 및 수정 기능을 제공해 사용자 편의성을 높였습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path + '3_5.gif',
            descriptionViewBoxDescriptionSubtitle: '웹 페이징 디테일',
            descriptionViewBoxDescriptionTitleDescription: `
                            게시글 검색 후 다른 게시글로 이동하거나 페이지를 벗어났을 때, 검색 기록이 사라져 사용자가 다시 검색하기 불편한 문제가 있었습니다.
                            검색 파라미터를 유지하도록 구현해서 사용자 편의성을 높였습니다.
                            `,
          },
        ],
      },

      {
        descriptionViewTitleName: '이미지 게시판',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path + '4.gif',
            descriptionViewBoxDescriptionSubtitle: '이미지 게시판 화면',
            descriptionViewBoxDescriptionTitleDescription: `
                        이미지 업로드가 가능한 게시판을 구현하면서, 여러 이미지를 깔끔하게 보여주고, 대표 이미지를 명확히 표시할 방법이 필요했습니다.
                        이미지를 올릴 수 있는 게시판을 구현하고, CSS Grid를 활용해 카드 갤러리 형태로 제작했습니다.
                        처음 올린 이미지를 썸네일로 표시해 사용자가 대표 이미지를 쉽게 확인할 수 있도록 했습니다.
                        `,
          },
          {
            descriptionViewBoxImage: path + '4_1.gif',
            descriptionViewBoxDescriptionSubtitle: '이미지 업로드',
            descriptionViewBoxDescriptionTitleDescription: `
                        사용자가 여러 이미지를 첨부할 수 있도록 하면서, 서버에 이미지 저장 시 파일 이름 중복으로 인한 오류를 방지할 필요가 있었습니다.
                        여러 이미지를 첨부해 글을 작성할 수 있도록 구현하고, 게시글 작성 완료 시 서버에 이미지를 저장하도록 처리했습니다.
                        또한, 파일 이름이 중복되지 않도록 네이밍 시퀀스를 제작해 안정적으로 이미지를 관리할 수 있게 했습니다.
                        `,
          },
        ],
      },

      {
        descriptionViewTitleName: 'WEB 소켓 API',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path + '5.gif',
            descriptionViewBoxDescriptionSubtitle: '실시간 채팅기능',
            descriptionViewBoxDescriptionTitleDescription: `
                        이용자들이 서로 실시간으로 소통할 수 있는 기능이 있으면 좋을 것 같았고, 이용자의 입장과 퇴장을 알 수 있는 알림 기능도 고민했습니다.
                        WebSocket을 활용해 실시간 채팅 기능을 제작하여 사용자들이 자유롭게 대화할 수 있도록 했습니다.
                        또한, 사용자가 들어오거나 나갈 때마다 메시지 알람이 가도록 구현해 소통 상황을 효과적으로 전달할 수 있게 했습니다.
                        `,
          },
          {
            descriptionViewBoxImage: path + '5_1.png',
            descriptionViewBoxDescriptionSubtitle: 'WEB 소켓 API',
            descriptionViewBoxDescriptionTitleDescription: `
                        웹에서 실시간 채팅하는 모습입니다.
                        `,
          },
        ],
      },

      {
        descriptionViewTitleName: '데이터베이스 설계 방법',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path + '6.png',
            descriptionViewBoxDescriptionSubtitle: 'ERMASTER 사용',
            descriptionViewBoxDescriptionTitleDescription: `
                            데이터베이스 설계와 관리를 효율적으로 하기 위해 시각화 도구와 신뢰성 높은 DBMS를 활용할 필요하다고 느꼈습니다.
                            ERMASTER를 알게되어 이를 이용해 데이터베이스를 설계를 했습니다.
                            DB를 빠르게 제작할 수 있게 되었고 이를 이용해 팀프로젝트에서도 쉽게 제작할 수 있었습니다.
                            `,
          },
        ],
      },
    ],
  },
  7: {
    gridCardTitle: '컬렉션 저장 프로그래밍',
    gridCardTitleSummary: `
            학생과 교사 데이터를 Java 컬렉션에 저장하고, 이를 불러오는 기능을 구현했습니다.
            `,
    gridCardGroup: '개인 프로젝트',
    gridCardDescription: `
            교육 기관에서 처음으로 진행했던 개인 프로젝트입니다.
            Eclipse의 콘솔을 이용하여 학생과 교사를 저장할 수 있도록 제작했습니다.
            `,
    gridCardImage: path3 + '/main.gif',
    gridCardDate: '2023.9.29 ~ 2023.10.13',
    projectCardLink: [
      {
        url: '',
        icon: './icons/people-icon.png',
      },
      {
        url: 'https://github.com/MinSeHong/Java-Project-Collection',
        icon: './icons/github-icon.svg',
      },
    ],
    descriptionTitleSkillStack: [
      {
        icon: './icons/java-icon.png',
        name: 'java',
        group: 'backend',
      },
      {
        icon: './icons/eclipse-icon.png',
        name: 'eclipse',
        group: 'tool',
      },
    ],
    descriptionReview: `
            객체 지향 프로그래밍을 연습하면서, 공통된 속성을 가진 정보를 효율적으로 관리하고 방법에 대해 고민했습니다.
            공통 속성을 가진 Person 클래스를 부모 클래스로 정의하고, 이를 상속하는 Student와 Teacher 클래스를 구현했습니다.
            객체 정보를 Excel 형식으로 콘솔에 출력되도록 구성했으며, 콘솔 글자 색상을 다르게 표현하는 기능을 활용해 친화적인 인터페이스를 구현했습니다.
            `,
    descriptionViewTitle: [
      {
        descriptionViewTitleName: 'COLLECTION 설계',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path3 + '1.png',
            descriptionViewBoxDescriptionSubtitle: '클래스 계획',
            descriptionViewBoxDescriptionTitleDescription: `
                            학생과 교사 정보를 효율적으로 관리할 수 있도록, 중복되는 데이터를 줄이고 구조적인 클래스 설계를 어떻게 할지 고민했습니다.
                            공통적으로 가지는 속성(이름, 나이, 주소 등)을 Person이라는 부모 클래스로 정의하고, 
                            이를 상속받는 Student와 Teacher 클래스를 구현하여 중복을 최소화하고 유지보수가 쉬운 구조로 설계했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path3 + '1_1.png',
            descriptionViewBoxDescriptionSubtitle: '클래스 설명',
            descriptionViewBoxDescriptionTitleDescription: `
                            Person 부모 클래스에 인자 생성자를 정의하여 객체 생성 시 필요한 데이터를 한 번에 초기화할 수 있도록 했고,
                            각 필드에 대해 setter와 getter 메서드를 제공해 캡슐화를 유지하며 데이터를 안전하게 접근하도록 구성했습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: 'Console GUI',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path3 + '2.png',
            descriptionViewBoxDescriptionSubtitle: '색상 Code 이용',
            descriptionViewBoxDescriptionTitleDescription: `
                            콘솔 출력 시 텍스트에 색상을 적용해 가독성을 높이고, 정보를 더 직관적으로 전달할 수 있는 방법이 있을지 고민했습니다.
                            콘솔에서 색상 코드를 활용하면 텍스트에 색상을 입힐 수 있다는 점을 알게 되었고, 유니코드 기반의 ANSI 색상 코드를 사용했습니다. 
                            색상 코드를 static 변수로 선언하여 재사용성을 높이고, 문자열에 붙여 사용했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path3 + '2_1.png',
            descriptionViewBoxDescriptionSubtitle: '글자 정렬 Mothod',
            descriptionViewBoxDescriptionTitleDescription: `
                            Eclipse의 기본 폰트인 'Consolas'는 한글과 영어의 글자 너비가 달라,
                             콘솔에서 표 형태로 출력할 때 열 정렬이 깨지는 문제가 발생했습니다.
                            영어와 한글이 들어가 있으면 정렬이 맞지 않는다는 점을 고려해, 한글과 영어의 너비 차이를 계산한 후, 
                            필요한 만큼의 여백을 추가로 삽입하는 메서드를 직접 구현했습니다. 이를 통해 다양한 문자 조합에서도 열이 고르게 정렬되도록 개선했습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '애니메이션',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path3 + '3.gif',
            descriptionViewBoxDescriptionSubtitle: '실행 화면',
            descriptionViewBoxDescriptionTitleDescription: `
                            단순한 텍스트 출력이 아닌, 사용자에게 더 흥미롭고 동적인 출력 방식이 없을까 고민했습니다.
                            Thread.sleep()을 활용해 글자가 한 글자씩 지연되며 출력되는 애니메이션 효과를 보이도록 했으며,
                            출력에 생동감을 더했습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '메뉴 선택',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path3 + '4.gif',
            descriptionViewBoxDescriptionSubtitle: '실행 화면',
            descriptionViewBoxDescriptionTitleDescription: `
                            사용자에게 다양한 기능을 제공하되, 복잡하지 않고 직관적으로 사용할 수 있는 방법이 무엇일지 고민했습니다.
                            메뉴 GUI를 만들어 사용자가 원하는 기능을 직접 선택할 수 있도록 구성하기로 했습니다.
                            번호 또는 키 입력 방식으로 동작하며, 콘솔 사용을 쉽게할 수 있도록 노력했습니다.
                            `,
          },
        ],
      },
      {
        descriptionViewTitleName: '메뉴 기능',
        descriptionViewBoxDescription: [
          {
            descriptionViewBoxImage: path3 + '5.gif',
            descriptionViewBoxDescriptionSubtitle: '학생&교사 추가',
            descriptionViewBoxDescriptionTitleDescription: `
                            사용자 입력 중 잘못된 값이 들어올 경우 프로그램이 예기치 않게 종료되는 문제를 방지하고, 
                            기능 수행 중에도 쉽게 메뉴로 돌아갈 수 있도록 구성할 필요가 있었습니다.
                            try ~ catch 문을 활용해 입력값에 대한 유효성 검사를 수행하고, 
                            예외 발생 시 적절한 안내 메시지를 출력한 후 프로그램이 종료되지 않도록 처리했습니다.
                            또한, 진행 중에 언제든지 메뉴로 돌아갈 수 있도록 흐름을 제어하여 사용자 경험을 개선했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path3 + '5_1.gif',
            descriptionViewBoxDescriptionSubtitle: '학생&교사 검색',
            descriptionViewBoxDescriptionTitleDescription: `
                            학생과 교사 정보를 다양한 기준으로 정렬 출력하는 방법을 고민해봤습니다.
                            Collection의 sort 메서드를 활용해 이름, 나이, 주소, 전화번호 등 여러 기준으로 정렬 기능을 구현했고,
                            출력 시 열이 일정하게 맞춰지도록 전용 메서드를 작성해 사용자가 보기 좋게 개선했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path3 + '5_2.gif',
            descriptionViewBoxDescriptionSubtitle: '학생&교사 수정',
            descriptionViewBoxDescriptionTitleDescription: `
                            많은 학생과 교사 정보 중 원하는 데이터를 쉽게 찾고, 수정까지 직관적으로 할 수 있는 기능이 필요할 것 같았습니다.
                            사용자가 검색어를 입력하면 해당 조건에 맞는 학생과 교사 정보를 필터링하여 보여주고, 
                            결과 리스트에서 번호를 선택해 원하는 항목을 수정할 수 있도록 기능을 구현했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path3 + '5_3.gif',
            descriptionViewBoxDescriptionSubtitle: '학생&교사 초기화',
            descriptionViewBoxDescriptionTitleDescription: `
                            입력된 학생과 교사 정보를 초기화하여 새로운 데이터로 다시 시작할 수 있는 기능이 필요하다고 생각했습니다.
                            기존 데이터를 하나씩 삭제하는 번거로움을 피하기 위해, 리셋 기능을 구현해서 사용자가 편리하게 초기화하도록 했습니다.
                            `,
          },
          {
            descriptionViewBoxImage: path3 + '5_1.gif',
            descriptionViewBoxDescriptionSubtitle: '학생&교사 불러오기',
            descriptionViewBoxDescriptionTitleDescription: `
                            프로그램 종료 후에도 입력된 학생과 교사 정보를 유지하고, 다시 실행할 때 쉽게 불러올 수 있는 방법이 필요했습니다.
                            컬렉션 데이터를 파일로 저장하는 기능을 구현했고, 프로그램 시작 시 저장된 파일에서 데이터를 읽어와 기존 목록을 복원할 수 있도록 했습니다. 
                            이를 통해 사용자 편의성과 데이터 지속성을 확보했습니다.
                            `,
          },
        ],
      },
    ],
  },
  /*
    sample:{
        gridCardTitle:"카드 제목",
        gridCardTitleSummary:
            `
            `
        ,
        gridCardDescription:
            `
            `
        ,
        gridCardImage:path1+"/main.png"
        ,
        gridCardDate:"2023.12.01",
        projectCardLink:[
            {
                url:"개인, 단체 프로젝트 구분",
                icon:"./icons/people-icon.png"
            },
            {
                url:"",
                icon:""
            }
        ],
        descriptionTitleSkillStack:[
            {
                icon:"./icons/html-icon.png",
                name:"Html",
                group:"frontend"
            }
        ],
        descriptionReview:
            `
            사후강평평
            `
        ,
        descriptionViewTitle:[
            {
                descriptionViewTitleName:"주제",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path+"1.png",
                        descriptionViewBoxDescriptionSubtitle:"제목",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            설명명
                            `
                    }
                ]
            },
        ]
    }*/
};
