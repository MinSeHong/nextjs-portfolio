type SkillSubject = {
  [skillName: string]: SkillDescription;
};

type SkillDescription = {
  skillIcon: string;
  hashtag: string;
  skillDescription: string[];
};

export const MOCK_SKILLS: SkillSubject = {
  CSS: {
    skillIcon: './icons/css-icon.png',
    hashtag: 'Front-end',
    skillDescription: [
      'SCSS를 이용한 CSS제작',
      'Grid, Flex를 이용한 레이아웃 구상',
      'CSS를 이용한 여러가지 인터랙티브 제작',
    ],
  },
  JavaScript: {
    skillIcon: './icons/javascript-icon.png',
    hashtag: 'Front-end',
    skillDescription: [
      'ES6+ 문법을 활용하며, 함수형 프로그래밍 및 비동기 처리 구현',
      'JavaScript로 동적인 UI 동작 및 사용자 이벤트 핸들링을 능숙하게 구현',
      '이벤트 위임, 클래스 조작, 요소 탐색 및 생성 등 자유로운 DOM 조작 ',
      'DOM을 활용한 모달, 드롭다운, 탭 메뉴 등 다양한 동적 UI를 구현',
    ],
  },

  React: {
    skillIcon: './icons/react-icon.png',
    hashtag: 'Front-end',
    skillDescription: [
      'React와 GSAP을 활용한 인터랙티브 UI 제작 경험',
      '팀 프로젝트에서 페이지 구조 설계, 컴포넌트 개발, 상태 관리 담당',
      'React Hooks에 익숙하며, 상태 관리와 컴포넌트 생명주기를 효율적으로 제어',
      'React Query와 Redux-Reudx를 상황에 따라 적절히 선택하며 사용',
    ],
  },

  GSAP: {
    skillIcon: './icons/gsap-icon.png',
    hashtag: 'Library',
    skillDescription: [
      'GSAP을 이용한 웹 크롤링 프로젝트 제작 경험',
      'Timeline, ScrollTrigger, Flip 등을 활용한 복잡한 UI 애니메이션 구현',
      '퍼포먼스를 고려한 트윈 설정 및 애니메이션 최적화 경험',
    ],
  },

  Java: {
    skillIcon: './icons/java-icon.png',
    hashtag: 'Back-end',
    skillDescription: [
      'Java 8 이상의 최신 문법과 람다, 스트림 API 활용 능력',
      'JDBC를 이용한 데이터베이스 연동 및 CRUD 기능 구현',
      '객체지향 프로그래밍에 기반한 Java 개발 경험 보유',
    ],
  },
  JSP: {
    skillIcon: './icons/jsp-icon.png',
    hashtag: 'Back-end',
    skillDescription: [
      'JSP를 이용한 게시판 사이트 구현',
      'MVC 패턴 기반 웹 애플리케이션 구조 설계 및 구현 경험',
      '데이터베이스와 연동하여 사용자 입력 데이터 처리 및 동적 컨텐츠 렌더링 구현',
      'JSTL, EL을 활용한 뷰 로직 간소화 경험',
    ],
  },
  'Spring Boot': {
    skillIcon: './icons/springboot-icon.png',
    hashtag: 'Back-end',
    skillDescription: [
      'RESTful API 설계 및 구현',
      'JPA, MyBatis 기반 데이터베이스 연동 경험',
      'MySQL를 이용한 CRUD 기능 구현 및 LMS 개발 인턴 참여',
    ],
  },
  Python: {
    skillIcon: './icons/python-icon.png',
    hashtag: 'Back-end',
    skillDescription: [
      '다양한 라이브러리(Numpy, Pandas)를 활용한 데이터 분석',
      'Flask를 이용한 웹 애플리케이션 개발 경험',
      'BS4, Selenium을 이용한 크롤링 페이지 구현',
    ],
  },
  Oracle: {
    skillIcon: './icons/oracle-icon.png',
    hashtag: 'Back-end',
    skillDescription: [
      'Oracle 데이터베이스를 이용한 데이터 모델링 및 SQL 쿼리 작성 경험',
      '팀 프로젝트에서 DB 설계 담당 및 관리 경험',
      'JDBC, MyBatis 등과 연동한 데이터베이스 연동 및 관리',
    ],
  },
};

export const MOCK_HOBBYS: SkillSubject = {
  'MATTER.JS': {
    skillIcon: './icons/matterjs-icon.svg',
    hashtag: 'Programming',
    skillDescription: [
      'Matter.js를 활용한 2D 물리 시뮬레이션 구현',
      '충돌 감지, 물체 운동, 중력 및 마찰력 적용',
      '사용자 입력에 따른 물리 기반 인터랙션 및 애니메이션 개발',
    ],
  },
  'COMFY UI': {
    skillIcon: './icons/stabbleDiffusion-icon.png',
    hashtag: 'Programming',
    skillDescription: [
      'Stable Diffusion 모델을 활용한 텍스트 기반 AI 이미지 생성',
      'AI 이미지 생성 후, 후처리 및 품질 개선',
      '프롬프트를 통해 원하는 스타일과 컨셉에 맞는 이미지 생성',
    ],
  },
  NOTION: {
    skillIcon: './icons/notion-icon.png',
    hashtag: 'Blogging',
    skillDescription: [
      '개발 및 공부를 Notion에서 체계적으로 관리하며 지속적인 성장과 자기 주도 학습을 실천',
    ],
  },
};

export const MOCK_PLANS: SkillSubject = {
  JAPANESE: {
    skillIcon: './icons/jlpt-logo.png',
    hashtag: 'Language',
    skillDescription: ['JLPT1 자격증 시험 준비'],
  },
  'Three.JS': {
    skillIcon: './icons/threejs-icon.png',
    hashtag: 'Library',
    skillDescription: [
      'Three.js를 활용한 3D 씬 구성 및 애니메이션 구현 공부',
      '카메라, 조명, 메쉬 등 기본 3D 요소 제어 공부',
    ],
  },
  'Android Studio': {
    skillIcon: './icons/android-studio-icon.png',
    hashtag: 'Library',
    skillDescription: ['Android Studio 개발 공부'],
  },
};
