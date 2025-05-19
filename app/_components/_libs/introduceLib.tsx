type SkillSubject = {
    [skillName:string]:SkillDescription;
}

type SkillDescription ={
    skillIcon:string;
    hashtag:string;
    skillDescription:string[];
}

export const SKILLS_VARIABLE:SkillSubject={
    WEB:{
        skillIcon:"./icons/html-icon.png",
        hashtag:"Front-end",
        skillDescription:[
            "● 웹 표준을 준수하기 위해 최선을 다합니다.",
            "● 인터렉티브 애니메이션 구현을 좋아합니다.",
        ]
    },
    CSS:{
        skillIcon:"./icons/css-icon.png",
        hashtag:"Front-end",
        skillDescription:[
            "● SCSS를 이용한 CSS제작이 가능합니다.",
            "● Grid, Flex를 이용한 최적의 레이아웃을 구상하려고 노력합니다."
        ]
    },
    JavaScript:{
        skillIcon:"./icons/javascript-icon.png",
        hashtag:"Front-end",
        skillDescription:[
            "● DOM, BOM 객체를 자유롭게 다룰 수 있습니다",
            "● TypeScript 문법을 사용할 줄 압니다.",
            "● GSAP, JQUERY를 이용한 애니메이션 구현이 가능합니다.",
            "● ES Module을 적절하게 사용하려고 합니다.",
            "● JS를 활용한 여러가지의 인터렉티브를 제작할 수 있습니다."
        ]
    },

    React:{
        skillIcon:"./icons/react-icon.png",
        hashtag:"Front-end",
        skillDescription:[
            "● Hook을 이용한 처리가 가능합니다.",
            "● 디렉토리 구조 최적화에 노력하고있습니다.",
            "● Redux의 기능을 이용하여 state를 관리 할 수 있습니다.",
            "● Next js를 이용한 프로젝트 제작이 가능합니다.",
            "● Router를 이용한 페이지 이동을 체계적으로 설계하려고 노력하고 있습니다."
        ]
    },

    GSAP:{
        skillIcon:"./icons/gsap-icon.png",
        hashtag:"Library",
        skillDescription:[
            "● CSS 라이브러리 GSAP을 사용할 줄 압니다.",
            "● GSAP을 이용하여 인터렉티브를 만들 수 있습니다.",
            "● Matter.js 물리엔진을 공부하고 있습니다.",
            "● GSAP을 이용한 웹 크롤링 프로젝트를 제작했습니다.",
            "● 웹 포토폴리오를 GSAP과 혼합하여 사용했습니다."
        ]
    },

    JQUERY:{
        skillIcon:"./icons/jquery-icon.png",
        hashtag:"Library",
        skillDescription:[
            "● Jquery를 이용하여 팀 프로젝트 애니메이션을 제작했습니다.",
            "● Jquery를 이용하여 Draggble 인터렉티브를 제작해보았습니다."
        ]
    },

    Java:{
        skillIcon:"./icons/java-icon.png",
        hashtag:"Back-end",
        skillDescription:[
            "● JAVA를 이용한 파일 입출력이 가능합니다.",
            "● SPRING BOOT와 RESTAPI에 대해 공부했습니다.",
            "● JSP로 서버 구축을 할 줄 압니다.",
            "● 메이븐을 활용한 데이터베이스 연결을 할 줄 압니다."
        ]
    },
    Python:{
        skillIcon:"./icons/python-icon.png",
        hashtag:"Back-end",
        skillDescription:[
            "● 모듈을 설계하는 방식을 압니다",
            "● Flask를 사용해보았고 깊게 공부하는 중입니다.",
            "● Selenium, BeatifulSoup, request등 여러가지 크롤링을 해보았습니다.",
            "● Numpy, Keras를 이용한 전형 데이터 전처리를 배웠습니다."

        ]
    },
    JSP:{
        skillIcon:"./icons/jsp-icon.png",
        hashtag:"Back-end",
        skillDescription:[
            "● JSP를 이용한 게시판 사이트를 구현해보았습니다.",
            "● Action Tag와 EL 태그를 사용할 줄 압니다.",
            "● Maven을 통해 스크립트 언어를 사용해보았습니다.",
        ]
    },
    "Spring Boot":{
        skillIcon:"./icons/springboot-icon.png",
        hashtag:"Back-end",
        skillDescription:[
            "● Spring boot를 이용한 팀 프로젝트를 제작해보았습니다.",
            "● Spring Boot를 이용한 어노테이션 개발이 가능합니다.",
            "● MyBatis를 이용한 데이터베이스 연결을 해보았습니다."
        ]
    },

    Flask:{
        skillIcon:"./icons/flask-icon.png",
        hashtag:"Back-end",
        skillDescription:[
            "● Flask를 이용하여 객체 탐지 프로젝트를 진행했습니다.",
            "● Flask를 이용한 웹 크롤링을 해보았습니다."
        ]
    },
    Oracle:{
        skillIcon:"./icons/oracle-icon.png",
        hashtag:"Back-end",
        skillDescription:[
            "● 팀 프로젝트에서 데이터베이스 설계 및 관리 담당을 했습니다.",
            "● 개인 게시판 사이트 제작에 데이터베이스를 설계 해보았습니다."
        ]
    },
}


export const HOBBYS_VARIABLE:SkillSubject={
    JAPANESE:{
        skillIcon:"./icons/jlpt-logo.png",
        hashtag:"Language",
        skillDescription:[
            "● 일본어를 공부하는게 취미입니다.",
            "● 현재 JLPT2를 취득했고 JLPT1 도전 예정입니다."
        ]
    },

    DRAWING:{
        skillIcon:"./icons/paint-icon.png",
        hashtag:"Drawing",
        skillDescription:[
            "● 그림 그리는 것을 좋아합니다.",
            "● illustrator, ClipStudio를 사용할 줄 압니다."
        ]
    },
    HISTORY:{
        skillIcon:"./icons/history-icon.png",
        hashtag:"History",
        skillDescription:[
            "● 역사 관련 영상을 보는 것을 좋아합니다."
        ]
    },
    "MATTER.JS":{
        skillIcon:"./icons/matterjs-icon.svg",
        hashtag:"Programming",
        skillDescription:[
            "● 인터렉티브 웹을 색다르게 표현하기 위해 공부하고 있습니다.",
            "● MatterJS를 이용하여 물리엔진 구현을 해보았습니다."
            
        ]
    },

    "STABBLE DIFFUSION":{
        skillIcon:"./icons/stabbleDiffusion-icon.png",
        hashtag:"Programming",
        skillDescription:[
            "● 이미지 생성 AI를 독학하고 있습니다.",
            "● COMFY UI를 이용하여 이미지 생성 및 마스크 기능을 할 줄 압니다.",
            "● 구역 분리하여 이미지 생성하는 방법을 공부했습니다."
        ]
    },
}




export const PLANS_VARIABLE:SkillSubject={
    "WEB PORTFOLIO":{
        skillIcon:"./icons/css-icon.png",
        hashtag:"Working",
        skillDescription:[
            "● 디바이스에 따른 반응형 웹으로 제작",
            "● 마우스 효과 제작",
            "● 추가의 인터렉티브 컴포넌트 구상",
            "● Matter JS를 이용한 인터렉티브 추가",
        ]
    },
    JAPANESE:{
        skillIcon:"./icons/jlpt-logo.png",
        hashtag:"Language",
        skillDescription:[
            "● JLPT1 자격증 시험 준비"
        ]
    },
    "MATTER.JS":{
        skillIcon:"./icons/matterjs-icon.svg",
        hashtag:"Library",
        skillDescription:[
            "● Matter JS를 이용한 Collision 공부",
            "● Matter JS를 이용한 Constraints 공부",
        ]
    },
    "Three.JS":{
        skillIcon:"./icons/threejs-icon.png",
        hashtag:"Library",
        skillDescription:[
            "● Three JS를 이용한 3D 생성 공부"
        ]
    },
}