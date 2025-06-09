type PersonalityCardId = {
  [id: number]: PersonalityDescription;
};

type PersonalityDescription = {
  title: string;
  image: string;
  description: string[];
};

export const MOCK_PERSONALITY: PersonalityCardId = {
  1: {
    title: '융합적인 사고',
    image: '1.jpg',
    description: [
      `사용자 경험과 중심 그리고 더욱 더 나아가 
                개발의 연결점되는 다른 지식을 습득하며 개발하려고 합니다.`,
      `하나의 기능을 설계할 때도, 여러가지의 상황을
                고민해서 제작하고 있습니다.`,
    ],
  },
  2: {
    title: '남다른 경험을 제작',
    image: '2.jpg',
    description: [
      `사용자에게 최고의 경험을 선사하기 위해,
                CSS와 JAVASCRIPT를 활용한 여러가지 기능을 공부 중 입니다.`,
      `물리 엔진을 구현하기 위한 Matter.js, 인터렉티브를 색다르게 표현 할 수 있는
                GSAP 그리고 3D 표현하는 Three.js를 공부하고 있습니다.`,
    ],
  },

  3: {
    title: '앞과 뒤를 추구하는 자세',
    image: '3.jpg',
    description: [
      `웹을 제작하는 일에 관심이 있어 프론트엔드로 시작하려고 합니다. 하지만
                백엔드에 대한 지식과 관심이 없는 것은 아닙니다.`,
      `사용자에게 최고의 경험을 제공하고, 유지보수와 확장성을 고려한 설계를 하며,
                두가지 분야에 최고의 인재가 되려고 합니다.`,
    ],
  },

  4: {
    title: '협업을 위한 서포터',
    image: '4.jpg',
    description: [
      `개발에 있어 가장 중요한 것은 협동심이라고 생각합니다.`,
      `팀의 목표를 이해하고, 목표 달성하기 위해 적극적으로 기여하려는 성격을 가지고 있습니다`,
      `팀프로젝트나 과제에서 동료들이 원활하게 진행할 수 있도록 노력했으며,
                 나에게 주어진 일 뿐만 아니라 동료의 몫까지 도와주며 살아가고 있습니다.`,
    ],
  },
  5: {
    title: '도전적인 성향',
    image: '5.jpg',
    description: [
      `시간이 걸리더라도 직접 만들 수 있으면 만들어보려고 합니다.`,
      `직접 구현함으로써 기본적인 원리를 깊이 이해하고,
                문제 해결 능력을 향상시키는 데 초점을 두고 있습니다.`,
    ],
  },
};
