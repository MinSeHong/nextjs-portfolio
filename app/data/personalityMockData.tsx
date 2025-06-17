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
      `사용자 경험을 중요하게 생각하며, 이를 바탕으로 개발에 적용하고 있습니다.
      기능을 설계할 때는 다양한 상황을 고려하며 세심하게 구현하는 것을 중요하게 여깁니다.`,
    ],
  },
  2: {
    title: '남다른 경험을 제작',
    image: '2.jpg',
    description: [
      `인터랙티브 웹 제작 능력을 기르기 위해 CSS와 JavaScript를 활용한 다양한 기능을 공부하고 있습니다.
      Matter.js로 물리 엔진을 구현하고, GSAP을 이용한 인터랙티브한 연출, Three.js를 이용한 3D 표현 기술을 공부하며 몰입감 있는 웹 제작에 집중하고 있습니다.`,
    ],
  },

  3: {
    title: '앞과 뒤를 추구하는 자세',
    image: '3.jpg',
    description: [
      `웹 제작에 관심이 있어 프론트엔드로 시작하려고 합니다. 그러나 백엔드에 대한 지식과 관심이 없는 것은 아닙니다. 사용자에게 최고의 경험을 제공하는 것은 물론, 서버를 설계하며 모든 곳에 유능한 개발자가 되고자 합니다.`,
    ],
  },

  4: {
    title: '협업을 위한 서포터',
    image: '4.jpg',
    description: [
      `개발에서 가장 중요한 것은 협업이라 생각합니다. 팀의 목표를 이해하고, 이를 달성하기 위해 적극적으로 참여하는 자세를 가지고 있습니다. 팀 프로젝트나 과제에서도 동료들이 원활하게 일을 진행할 수 있도록 도우는 것을 좋아하며, 제 역할을 넘어 필요한 부분까지 책임지며 노력합니다.`,
    ],
  },
  5: {
    title: '도전적인 성향',
    image: '5.jpg',
    description: [
      `시간이 들더라도 직접 구현해보며, 원리를 깊이 이해하고 문제 해결 능력을 향상시키는 데 집중하고 있습니다.`,
    ],
  },
};
