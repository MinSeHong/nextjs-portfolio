type GridCardId = {
    [id:number]:GridCardTitle;
}

type GridCardTitle ={
    gridCardTitle:string;
    gridCardTitleSummary:string;
    gridCardDescription:string;
    gridCardImage:string;
    gridCardDate:string;
    gridCardGroup:string;
    projectCardLink:ProjectCardLinkBox[];
    descriptionTitleSkillStack:DescriptionTitleSkillStackIcon[];
    
    
    descriptionReview:string;
    descriptionViewTitle:DescriptionViewTitle[];
}


type ProjectCardLinkBox ={
    url:string;
    icon:string;
}

type DescriptionTitleSkillStackIcon = {
    icon:string;
    name:string;
    group:string;
}

type DescriptionViewTitle = {
    descriptionViewTitleName:string;
    descriptionViewBoxDescription:DescriptionViewBoxDescription[];
}

type DescriptionViewBoxDescription = {
    descriptionViewBoxImage:string;
    descriptionViewBoxDescriptionSubtitle:string;
    descriptionViewBoxDescriptionTitleDescription:string;
}


const path0:string = "./images/projects/깃허브 웹 포토폴리오/";
const path:string = "./images/projects/JSP 게시판 홈페이지/";
const path1:string = "./images/projects/네이버 속보 기사 크롤링/";
const path2:string = "./images/projects/마스크 착용 객체 탐지/";
const path3:string = "./images/projects/학생 교사 저장 프로그래밍/";
const path4:string = "./images/projects/FITME 팀프로젝트/";

export const GRID_CARD_ID_VARIABLE:GridCardId={
    1:{
        gridCardTitle:"깃허브 웹 포토폴리오",
        gridCardTitleSummary:"NextJS와 TypeScript를 이용하여 웹 포토폴리오를 제작했습니다. 여러가지의 인터렉티브를 제작했으며 계속 업데이트 할 예정입니다.",
        gridCardGroup:"개인 프로젝트",
        gridCardDescription:
            `공부한 지식을 이용하여 깃허브 포토폴리오를 제작했습니다.
            추가 정보를 넣을 수 있도록 모듈 라이브러리 제작을 했고, AppRouter기능을 이용하여 깃허브 블로그를 제작해 나아갈 예정입니다.`
        ,
        gridCardImage:path0+"main.gif"
        ,
        gridCardDate:"2025.05.11 ~ Working",
        projectCardLink:[
            {
                url:"",
                icon:"./icons/people-icon.png"
            },
            {
                url:"https://github.com/MinSeHong/NextJS-Portfolio",
                icon:"./icons/github-icon.svg"
            },
            {
                url:"https://minsehong.github.io/",
                icon:"./icons/page-icon.png"
            },
        ],
        descriptionTitleSkillStack:[
            {
                icon:"./icons/html-icon.png",
                name:"html",
                group:"frontend"
            },
            {
                icon:"./icons/javascript-icon.png",
                name:"javascript",
                group:"frontend"
            },
            {
                icon:"./icons/nextjs-icon.png",
                name:"next.js",
                group:"frontend"
            },
            {
                icon:"./icons/react-icon.png",
                name:"react",
                group:"frontend"
            },
            {
                icon:"./icons/gsap-icon.png",
                name:"gsap",
                group:"library"
            },
 
        ],
        descriptionReview:
            `웹 포토폴리오를 처음으로 완성해보았습니다.
            예전에 웹 포토폴리오 제작을 여러번 시도했지만 원하는 기능을 자유롭게 만들지 못했습니다.
            수 많은 실패를 발판 삼아 웹 제작 툴 없이 웹 포토폴리오를 완성하게 됐습니다.`
        ,
        descriptionViewTitle:[
            {
                descriptionViewTitleName:"설계 계획",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path0+"1.png",
                        descriptionViewBoxDescriptionSubtitle:"디렉토리 설계",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        여러 페이지를 생성하기 위해 다음과 같이 디렉토리를 설계 했습니다.
                        Public 폴더에는 정적 이미지와 폰트를 저장하는 용도,
                        값을 저장하기 위한 객체 라이브러리, 컴포넌트, css는 app에 넣기로 했습니다.
                        `
                    },

                    {   
                        descriptionViewBoxImage:path0+"1_1.png",
                        descriptionViewBoxDescriptionSubtitle:"임시 라이브러리 제작",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        TypeScript를 이용해 객체를 생성하고 수정, 추가, 삭제를 쉽게 하도록 했습니다.
                        그리고 객체를 이용해 DOM을 생성합니다.
                        `
                    },

                    {   
                        descriptionViewBoxImage:path0+"1_2.gif",
                        descriptionViewBoxDescriptionSubtitle:"저장된 데이터",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        프로젝트에 관련된 데이터를 저장한 모습입니다.
                        `
                    }
                ]
            },
            {
                descriptionViewTitleName:"시작 화면",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path0+"2.gif",
                        descriptionViewBoxDescriptionSubtitle:"진행 설명",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        GSAP의 SplitText를 이용하여 글자 애니메이션 효과를 주었습니다.
                        `
                    },
                    {   
                        descriptionViewBoxImage:path0+"2_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"마우스 위치에 따른 배경 이동",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        시작 화면에 마우스가 있을 시 마우스의 위치를 계산하고
                        마우스의 위치의 변화에 따라 배경이 움직이도록 제작했습니다.
                        `
                    },
                ]
            },
            {
                descriptionViewTitleName:"소개 화면",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path0+"3.gif",
                        descriptionViewBoxDescriptionSubtitle:"진행 설명",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        Gsap의 ScrollTriger와 Timeline을 이용하여 소개화면을 제작했습니다.
                        소개 부분은 창 형태로 제작했습니다.
                        `
                    },
                    {   
                        descriptionViewBoxImage:path0+"3_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"CSS, JS를 사용한 애니메이션",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        CSS, JS를 이용하여 플립 형태의 애니메이션 기능을 넣었습니다.

                        `
                    },
                ]
            },
            {
                descriptionViewTitleName:"프로젝트 화면",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path0+"4.gif",
                        descriptionViewBoxDescriptionSubtitle:"진행 설명",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        프로젝트 목록은 카드 형태로 볼 수 있게 했습니다.
                        Gsap을 이용해서 특정 부분만 분류하는 애니메이션을 제작했습니다.
                        `
                    },
                    {   
                        descriptionViewBoxImage:path0+"4_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"플립",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        프로젝트를 선택하면, 카드가 확대되면서 전체 화면을 감싸도록 제작했습니다. 
                        `
                    },
                    {   
                        descriptionViewBoxImage:path0+"4_2.gif",
                        descriptionViewBoxDescriptionSubtitle:"프로젝트 상세 화면",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        각 주제를 클릭하면 해당 주제로 이동하도록 scrollTo를 사용했습니다.
                        그리고 Gsap을 이용하여 스크롤하면 설명이 나오도록 제작했습니다.
                        `
                    },
                ]
            },
        ]
    },
    2:{
        gridCardTitle:`FITME 팀 프로젝트`,
        gridCardTitleSummary:
            `교육기관에서 진행했던 팀 프로젝트 입니다.
            FITME는 '건강한 나' 또는 '나에게 맞춤화'라는 의미로,
            운동과 식단 관리를 제공하는 서비스입니다.
            `
        ,
        gridCardGroup:"팀 프로젝트",
        gridCardDescription:
            `기존에 있는 운동과 식단관리 서비스들이 부족하다고 느끼고 출발한 이 
            프로젝트입니다. AI 기술로 사용자의 신체 조건과 식습관 분석하고, 이를 바탕으로 개인화된 식단과 운동 계획을 제공합니다.
            또한, 사용자들이 게임을 통해 운동 할 수 있도록 제공합니다.
            `
        ,
        gridCardImage:path4+"/main.gif"
        ,
        gridCardDate:"2023.12.08 ~ 2024.03.15",
        projectCardLink:[
            {
                url:"",
                icon:"./icons/peoples-icon.png"
            },
            {
                url:"https://github.com/MinSeHong/Team-Project-Fitme-Back-end",
                icon:"./icons/github-icon.svg"
            },
            {
                url:"https://github.com/MinSeHong/Team-Project-Fitme-React",
                icon:"./icons/github-icon.svg"
            }
        ],
        descriptionTitleSkillStack:[
            {
                icon:"./icons/react-icon.png",
                name:"react",
                group:"frontend"
            },
            {
                icon:"./icons/bootstrap-icon.png",
                name:"bootstrap",
                group:"library"
            },
            {
                icon:"./icons/chartjs-icon.png",
                name:"chartjs",
                group:"library"
            },
            {
                icon:"./icons/flask-icon.png",
                name:"flask",
                group:"library"
            },
            {
                icon:"./icons/selenium-icon.png",
                name:"selenium",
                group:"library"
            },
            {
                icon:"./icons/yolo-icon.png",
                name:"yolo",
                group:"library"
            },
            {
                icon:"./icons/spring-icon.svg",
                name:"spring boot",
                group:"backend"
            },
            {
                icon:"./icons/springsecurity-icon.png",
                name:"spring security",
                group:"library"
            },
            {
                icon:"./icons/oracle-icon.png",
                name:"oracle",
                group:"dbms"
            },
            {
                icon:"./icons/kakao-icon.png",
                name:"kakako api",
                group:"api"
            },
            {
                icon:"./icons/youtube-icon.png",
                name:"youtube api",
                group:"api"
            },
            {
                icon:"./icons/googlecloud-icon.png",
                name:"google cloud api",
                group:"api"
            },
            {
                icon:"./icons/github-icon.svg",
                name:"github",
                group:"tool"
            },
            {
                icon:"./icons/figma-icon.png",
                name:"figma",
                group:"tool"
            },
            {
                icon:"./icons/notion-icon.png",
                name:"notion",
                group:"tool"
            },


        ],
        descriptionReview:
            `리액트 디렉토리 구조, UML과 데이터베이스 설계를 담당했습니다.
            SMPT를 이용한 이메일 인증, 메인 페이지, 게임 페이지, 게시판 페이지 및 CRUD 그리고 메디컬 설문지 페이지 등을 제작했으며
            플로팅 바와 사이드 메뉴 애니메이션을 구현했습니다. 
            팀원들이 작업을 수월하게 할 수 있도록 프론트엔드와 Notion를 관리했으며, Figma를 이용한 웹페이지 디자인을 했습니다.
            `
        ,
        descriptionViewTitle:[
            {
                descriptionViewTitleName:"데이터베이스 설계",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path4+"1.png",
                        descriptionViewBoxDescriptionSubtitle:"UML 제작",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            팀원들의 요구 사항들을 종합하여 UML로 제작했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"1_1.png",
                        descriptionViewBoxDescriptionSubtitle:"DB설계 담당",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            ERMASTER을 이용하여 데이터베이스를 설계 했습니다.
                            회원 정보, 친구 추가, 채팅, 캘린더, 게시글, 소셜 로그인 등 테이블을 제작했으며,
                            ORACLE을 이용해 데이터를 저장하고 관리했습니다.
                            `
                    },                    
                ]
            },
            {
                descriptionViewTitleName:"진행 계획",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path4+"2.png",
                        descriptionViewBoxDescriptionSubtitle:"Notion 관리 담당",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            팀 프로젝트를 수월하게 진행할 수 있도록 Notion을 사용했습니다.
                            노션의 페이지를 제작하고 관리했습니다.         
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"2_1.png",
                        descriptionViewBoxDescriptionSubtitle:"React 책임 담당",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            팀 프로젝트에서 리액트를 전반적으로 담당했습니다.
                            리액트 디렉토리 구조를 설계하고,
                            프론트를 제작하는 팀원들이 문제가 생기면 해결해주었습니다.
                            Github에 작업물을 합칠 때 충돌이 일어나지 않도록 관리 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"2_2.png",
                        descriptionViewBoxDescriptionSubtitle:"팀원 멘토 담당",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            코드에 익숙하지 않은 팀원들을 위해 멘토 담당했습니다.
                            정기적으로 멘토링을 하며, 팀원들이 팀 프로젝트를 수월하게 제작할 수 있도록 했습니다.
                            `
                    }
                ]
            },
            {
                descriptionViewTitleName:"메인 페이지 제작",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path4+"3.png",
                        descriptionViewBoxDescriptionSubtitle:"페이지 제작",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            운동과 식단관리 메인 페이지를 제작했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"3_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"페이지 이동",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            Router을 이용하여 페이지를 이동하도록 제작했습니다.
                            페이지 컴포넌트를 미리 만들어서 팀원들이 만든 컴포넌트 안에서
                            작업을 할 수 있도록 지시했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"3_2.gif",
                        descriptionViewBoxDescriptionSubtitle:"사이드 메뉴 제작",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            사이드 메뉴 애니메이션을 제작했습니다.
                            메뉴를 클릭해서 페이지 이동하며,
                            로그인 해야 접속이 가능한 페이지는 접속이 안되도록 처리를 했습니다.
                            `
                    } 
                ]
            },
            {
                descriptionViewTitleName:"이메일 인증",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path4+"4.png",
                        descriptionViewBoxDescriptionSubtitle:"SMPT 이메일 인증",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            SMPT를 이용하여 회원가입 할 때, 이메일 인증하도록 했습니다.
                            회원가입에서 이메일을 입력하고, 인증번호를 전송 하면 다음과 같이
                            인증 번호가 보내집니다.
                            `
                    },
                ]
            },
            {
                descriptionViewTitleName:"챗봇 모달",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path4+"5.gif",
                        descriptionViewBoxDescriptionSubtitle:"모달 제작",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            실시간 채팅할 수 있는 챗봇 페이지를 제작했습니다.
                            채팅을 입력해서 요청을 보내고
                            결과 값을 말풍선으로 출력되도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"5_1.png",
                        descriptionViewBoxDescriptionSubtitle:"Web Speech Api",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            Web Speech Api을 이용하여 음성 인식으로 질문할 수 있도록 했습니다.
                            또한 챗봇이 대답할 때 음성으로 알려 줄 수 있도록 기능을 제공합니다.
                            `
                    },
                ]
            },
            {
                descriptionViewTitleName:"당뇨병 진단 페이지",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path4+"6.png",
                        descriptionViewBoxDescriptionSubtitle:"페이지 제작",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            당뇨병 진단할 수 있는 페이지가 필요해서
                            제작하게 됐습니다. 사용자가 정보를 입력하면 입력한 정보에 따라
                            진단할 수가 있습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"6_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"설문지 애니메이션",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            당뇨병 진단 설문지를 애니메이션 형태로 이동하도록 제작했습니다.
                            설문지 진행에 따라 진행바가 나타나도록 했으며,
                            설문 도중 이전 지문으로 돌아갈 수 있도록 했습니다.
                            `
                    }
                ]
            },
            {
                descriptionViewTitleName:"찍먹 페이지",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path4+"7.gif",
                        descriptionViewBoxDescriptionSubtitle:"페이지 제작",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            가지고 있는 포인트로 음식 구매할 수 있는 페이지입니다.
                            홈쇼핑 스타일로 웹 페이지를 제작했으며
                            최신 배너가 자동으로 이동하도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"7_1.png",
                        descriptionViewBoxDescriptionSubtitle:"상품 크롤링 기능",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            selenium을 이용해서 특정 홈페이지를 크롤링하고, 상품 구매 목록이 나타나도록 제작했습니다.
                            상품을 찜할 수 있고, 부트페이를 이용하여 결제할 수 있도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"7_2.gif",
                        descriptionViewBoxDescriptionSubtitle:"상품 구매/찜 페이지",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            데이터베이스에서 정보를 가져와
                            내가 구매했던 상품과 찜했던 목록을 볼 수 있는 페이지를 제작했습니다.
                            `
                    },

                ]
            },
            {
                descriptionViewTitleName:"게임 페이지",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path4+"8.png",
                        descriptionViewBoxDescriptionSubtitle:"페이지 제작",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            운동 게임을 할 수 있는 페이지를 제작했습니다.
                            운동 게임을 해서 포인트를 얻고, 포인트를 이용해서
                            상품을 구매할 수 있습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"8_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"게임 방 목록 디자인",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            실시간으로 사람들끼리 게임할 수 있는 방을 보여줍니다.
                            게임이 어느 정도 진행이 됐는지, 인원은 몇명인지 상세 정보를 나타냅니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"8_2.gif",
                        descriptionViewBoxDescriptionSubtitle:"프로필 이미지 생성 AI",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            GPT API로 이미지를 생성하고 프로필로 적용할 수 있도록 제작했습니다.
                            "귀여운 고양이"를 입력하면, 귀여운 고양이 이미지를 생성합니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"8_3.gif",
                        descriptionViewBoxDescriptionSubtitle:"게임 방 생성 모달",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            다른 사람이 만든 게임 방을 들어가는 대신, 방을 만들 수 있는 모달을 제작했습니다.
                            `
                    }
                ]
            },
            {
                descriptionViewTitleName:"소셜 커뮤니티",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path4+"9.gif",
                        descriptionViewBoxDescriptionSubtitle:"페이지 제작 및 기능 설계",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            사람들끼리 소통하는 게시판 입니다.
                            스크롤로 내려가면, 예전에 올렸던 글을 새로 밑에 생성합니다.
                            소셜 커뮤니티에 필요한 기능인 친구 추가, 친구 목록,
                            게시판 CRUD, 팔로우, 팔로워, 좋아요 그리고 스크랩 기능을 설계했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"9_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"친구 관련 기능",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            친구 추가, 친구 목록, 친구 삭제 그리고 친구 요청 등.
                            소셜 커뮤니티에 필요한 기본적인 기능을 설계하고 제작했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"9_2.gif",
                        descriptionViewBoxDescriptionSubtitle:"게시판 기능",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            게시글의 이미지가 자동으로 횡 스크롤 하도록 제작했습니다.
                            게시글 CRUD 뿐만 아니라. 좋아요, 스크랩, 게시글 신고, 보기같은
                            여러가지 상호작용을 설계했습니다.
                            `
                    }
                ]
            },
        ]
    }
    ,
    3:{
        gridCardTitle:"마스크 착용 객체 탐지",
        gridCardTitleSummary:
            `
            YOLO v8 객체 탐지를 이용하여 마스크 착용한 사람들을 탐지하는 프로젝트를 제작했습니다.
            Python을 이용하여 제작하였고 결과 값을 웹에서 보여줍니다.
            `
        ,
        gridCardGroup:"개인 프로젝트",
        gridCardDescription:
            `
            Python을 이용하여 FLASK 서버를 만들었습니다. 
            Yolo v8을 이용하여 마스크를 착용한 사람과 안 착용한 사람을 구분하는 방법을 학습했고,
            결과 값은 웹 페이지에 나타나도록 했습니다.
            `
        ,
        gridCardImage:path2+"/main.png"
        ,
        gridCardDate:"2024.02.12 ~ 2024.02.15",
        projectCardLink:[
            {
                url:"개인, 단체 프로젝트 구분",
                icon:"./icons/people-icon.png"
            },
            {
                url:"https://github.com/MinSeHong/Object_Detection",
                icon:"./icons/github-icon.svg"
            }
        ],
        descriptionTitleSkillStack:[
            {
                icon:"./icons/html-icon.png",
                name:"html",
                group:"frontend"
            },
            {
                icon:"./icons/css-icon.png",
                name:"css",
                group:"frontend"
            },
            {
                icon:"./icons/javascript-icon.png",
                name:"javascript",
                group:"frontend"
            },
            {
                icon:"./icons/jquery-icon.png",
                name:"jquery",
                group:"library"
            },
            {
                icon:"./icons/python-icon.png",
                name:"python",
                group:"backend"
            },
            {
                icon:"./icons/yolo-icon.png",
                name:"yolo",
                group:"library"
            },
            {
                icon:"./icons/pycharm-icon.png",
                name:"pycharm",
                group:"tool"
            },
        ],
        descriptionReview:
            `
            YOLO를 이용하여 마스크 착용한 사람과 안 착용한 사람을 구분할 수 있도록 학습을 했습니다.
            웹에서 이미지를 업로드하고 FLASK 서버에 요청을 하면, 결과를 가져오도록 했습니다.
            결과 값을 웹페이지에 나타나도록 했으며, JQUERY를 이용한 애니메이션을 적용해 보았습니다.
            `
        ,
        descriptionViewTitle:[
            {
                descriptionViewTitleName:"FLASK서버 구축",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path2+"1.png",
                        descriptionViewBoxDescriptionSubtitle:"FLASK 서버",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            객체 탐지 결과값을 반환하기 위해 FLASK 서버를 구축했습니다.
                            웹에서 이미지를 업로드하면, FLASK 서버가 사용자 요청을 받습니다.
                            그 다음 결과값을 웹에 전달합니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path2+"1_1.png",
                        descriptionViewBoxDescriptionSubtitle:"YOLO 객체 탐지 사용",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            객체 탐지에 사용된 모델은 Yolo v8을 사용했습니다.
                            객체 탐지는 마스크를 착용한 사람과 안 착용한 사람을 구분하도록 데이터를 학습했습니다.
                            `
                    }
                ]
            },
            {
                descriptionViewTitleName:"웹 페이지 제작",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path2+"2.png",
                        descriptionViewBoxDescriptionSubtitle:"웹페이지 배경",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            웹 페이지는 이미지를 업로드하고 결과값을 볼 수 있도록 간단하게 제작했습니다.
                            `
                    }
                ]
            },
            {
                descriptionViewTitleName:"객체탐지",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path2+"3.png",
                        descriptionViewBoxDescriptionSubtitle:"이미지 업로드",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            "UPLOAD"버튼으로 이미지를 업로드합니다. 업로드할 이미지는
                            미리보기로 나타나도록 했습니다. 요청보내면 결과값을 
                            받기 전까지 로딩 화면이 나오도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path2+"3_1.png",
                        descriptionViewBoxDescriptionSubtitle:"결과값 출력",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            서버에서 결과값을 받으면, 마스크 착용한 사람의 위치를 빨간 네모로 표시하도록 했습니다.
                            빨간 네모 위에 있는 값은 마스크 착용한 사람인지 정확도를 나타냅니다.
                            `
                    }
                ]
            },
        ]
    },
    4:{
        gridCardTitle:"네이버 속보 기사 크롤링",
        gridCardTitleSummary:
            `Python으로 네이버 속보 기사 페이지를 크롤링하고, 새로운 페이지에 나타나도록 했습니다.
            `
        ,
        gridCardGroup:"개인 프로젝트",
        gridCardDescription:
            `
            Python의 Selenium 라이브러리를 이용해서 네이버 속보 기사를 크롤링 하도록 했습니다.
            크롤링한 부분 중에서 원하는 정보을 얻습니다.
            그리고 CSS 라이브러리인 GSAP을 사용해서 카드 형태의 애니메이션으로 나타나도록 웹을 제작했습니다.
            `
        ,
        gridCardImage:path1+"/main.gif"
        ,
        gridCardDate:"2024.01.04 ~ 2024.01.10",
        projectCardLink:[
            {
                url:"",
                icon:"./icons/people-icon.png"
            },
            {
                url:"https://github.com/MinSeHong/Python_Crawling",
                icon:"./icons/github-icon.svg"
            }
        ],
        descriptionTitleSkillStack:[
            {
                icon:"./icons/html-icon.png",
                name:"html",
                group:"frontend"
            },
            {
                icon:"./icons/css-icon.png",
                name:"css",
                group:"frontend"
            },
            {
                icon:"./icons/javascript-icon.png",
                name:"javascript",
                group:"frontend"
            },
            {
                icon:"./icons/gsap-icon.png",
                name:"gsap",
                group:"library"
            },
            {
                icon:"./icons/jquery-icon.png",
                name:"jquery",
                group:"library"
            },
            {
                icon:"./icons/python-icon.png",
                name:"python",
                group:"backend"
            },
            {
                icon:"./icons/selenium-icon.png",
                name:"selenium",
                group:"library"
            },            
            {
                icon:"./icons/pycharm-icon.png",
                name:"pycharm",
                group:"tool"
            },    

        ],
        descriptionReview:
            `Python의 Flask를 이용하여 백 서버를 구축했습니다.
            웹에서 Flask 서버에 요청을 보내면 크롤링 된 값을 가져옵니다.
            크롤링 한 데이터를 재밌게 표현하기 위해 GSAP Library를 이용해 보았습니다.
            `
        ,
        descriptionViewTitle:[
            {
                descriptionViewTitleName:"FLASK 서버 구축",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path1+"1.png",
                        descriptionViewBoxDescriptionSubtitle:"네이버 기사 크롤링",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            네이버 기사의 특정 부분을 크롤링 하기 위해 Selenium을 사용했습니다.
                            크롤링을 하는 부분은 Module로 제작을 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path1+"1_1.png",
                        descriptionViewBoxDescriptionSubtitle:"응답 값 설정",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            웹에서 요청을 받으면 결과 값을 객체 형태로 전달하도록 했습니다.
                            `
                    }
                ]
            },
            {
                descriptionViewTitleName:"웹 페이지 제작",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path1+"2.png",
                        descriptionViewBoxDescriptionSubtitle:"웹페이지 배경",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            칠판 위에 카드가 나타나도록 배경을 디자인 했습니다.
                            `
                    }
                ]
            },
            {
                descriptionViewTitleName:"GSAP 애니메이션",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path1+"3.gif",
                        descriptionViewBoxDescriptionSubtitle:"시작 화면",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            "CRAWLING"이라는 제목이 나오고 칠판 배경이 나타납니다.
                            그 다음 네이버 속보를 크롤링할 수 있는 버튼이 나타납니다.
                            `
                    }
                    ,
                    {   
                        descriptionViewBoxImage:path1+"3_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"크롤링 시작",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            크롤링 버튼을 누르면 크롤링이 되는 동안 "LOADING"이
                            나타나도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path1+"3_2.gif",
                        descriptionViewBoxDescriptionSubtitle:"카드 애니메이션",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            크롤링 값을 가져오고, 크롤링 된 데이터를 카드 형태로 등장하도록 했습니다.
                            등장하는 카드는 GSAP의 PYSHICS2D를 이용하여 무작위로 펴지도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path1+"3_3.gif",
                        descriptionViewBoxDescriptionSubtitle:"DRAGGABLE 기능",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            각각의 카드는 직접 마우스로 드래그할 수 있습니다.
                            카드를 집고 던질 수 있도록 했으며, 칠판 밖으로 나가지 않도록 설정했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path1+"3_4.gif",
                        descriptionViewBoxDescriptionSubtitle:"SINGLE CLICK",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            각각의 카드를 클릭하면 기사의 제목과 내용이 나오도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path1+"3_5.gif",
                        descriptionViewBoxDescriptionSubtitle:"DOUBLE CLICK",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            카드를 더블 클릭 할 시, 해당 기사의 사이트를 열도록 합니다.
                            `
                    },
                ]
            },
        ]
    },
    5:{
        gridCardTitle:"JSP 게시판 홈페이지",
        gridCardTitleSummary:
            `Java JSP를 이용하여 게시판 홈페이지를 제작했습니다.
            `
        ,
        gridCardGroup:"개인 프로젝트",
        gridCardDescription:
            `교육 기관에서 게시판 홈페이지 제작 프로젝트를 수행했습니다.
            프로젝트 기간은 4주의 기간으로 DataBase 구축, Tomcat 서버 구축,
            JSP를 이용한 회원 로그인, 게시글 CRUD를 제작하는 것이였습니다.
            `
        ,
        gridCardImage:path+"/main.gif"
        ,
        gridCardDate:"2023.11.08 ~ 2023.12.01",
        projectCardLink:[
            {
                url:"",
                icon:"./icons/people-icon.png"
            },
            {
                url:"https://github.com/MinSeHong/Board_Homepage",
                icon:"./icons/github-icon.svg"
            }
        ],
        descriptionTitleSkillStack:[
            {
                icon:"./icons/html-icon.png",
                name:"html",
                group:"frontend"
            },
            {
                icon:"./icons/css-icon.png",
                name:"css",
                group:"frontend"
            },
            {
                icon:"./icons/javascript-icon.png",
                name:"javascript",
                group:"frontend"
            },
            {
                icon:"./icons/jsp-icon.png",
                name:"jsp",
                group:"backend"
            }, 
            {
                icon:"./icons/eclipse-icon.png",
                name:"eclipse",
                group:"tool"
            },
            {
                icon:"./icons/tomcat-icon.png",
                name:"tomcat",
                group:"backend"
            },
            {
                icon:"./icons/ermaster-icon.png",
                name:"ermaster",
                group:"library"
            },
        ],
        descriptionReview:
            ` 
            Oracle을 이용하여 DataBase를 설계 하고, Eclipse를 이용하여 Tomcat 서버를 구축했습니다.

            웹 프로그래밍 언어를 깊게 이해하고 싶어, 직접 만들 수 있는 기능들은 API 사용하지 않고
            만들어 보았습니다. 사용자의 상호작용에 따라 발생할 수 있는 예외를 최소화 하려고 했으며,
            게시판 CRUD를 제작하면서 여러가지 디테일을 적용해 보았습니다.

            또한 웹 소켓을 이용한 실시간 채팅기능, 이미지 업로드 그리고 웹 페이징 기능 등을 제작해보았습니다.
            `
        ,
        descriptionViewTitle:[
            {
                descriptionViewTitleName:"회원가입/탈퇴 기능",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path+"1.gif",
                        descriptionViewBoxDescriptionSubtitle:"회원 로그인 페이지",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            하나의 Div 안에 로그인과 회원 가입을 넣었습니다.
                            흰색 버튼을 클릭하면 로그인 또는 회원 가입이 보이도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path+"1_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"회원가입 유효성 검사",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            회원 가입은 아이디, 이메일, 비밀번호, 학력 사항 그리고 취미를 입력하도록 제작했습니다.
                            JAVASCRIPT를 이용한 유효성 검사가 성공하면 서버에 요청을 보내 데이터베이스에 존재하고 있는 회원인지 확인합니다.
                            중복된 회원이 없으면 가입이 됩니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path+"1_2.png",
                        descriptionViewBoxDescriptionSubtitle:"회원정보 수정&탈퇴",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            회원 정보를 추가로 수정할 수 있는 기능을 만들었습니다.
                            예전에 입력했던 정보를 다시 바꿀 수 있도록 만들었으며,
                            따로 메모할 수 있는 기능을 추가 했습니다.
                            회원 탈퇴를 누르면, 작성했던 글과 댓글이 삭제 되도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path+"1_3.gif",
                        descriptionViewBoxDescriptionSubtitle:"로그인 후 페이지 이동",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            회원정보가 맞는지 서버에서 확인후,
                            회원 정보가 맞으면 게시판 페이지로 이동합니다.

                            `
                    },
                ]
            },

            {
                descriptionViewTitleName:"메인 홈페이지 레이아웃",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path+"2.png",
                        descriptionViewBoxDescriptionSubtitle:"레이아웃 설계",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            각 레이아웃마다 iframe을 이용하여 페이지 이동하도록 했습니다.
                            상단에는 회원 정보 수정과 로그아웃 할 수 있도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path+"2_1.png",
                        descriptionViewBoxDescriptionSubtitle:"메인 홈페이지 디자인",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            회원 로그인 한 후 처음에 보여주는 화면입니다.
                            `
                    },
                ]
            },
            {
                descriptionViewTitleName:"글 작성 게시판",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path+"3.gif",
                        descriptionViewBoxDescriptionSubtitle:"웹 페이징",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            페이징 기능을 넣어서 다음 페이지와 이전 페이지로 이동할 수 있도록 했습니다.
                            페이징 기능은 데이터베이스에서 글 관련 내용을 가져오고, 글의 갯수에 따라 페이징이 되도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path+"3_0.gif",
                        descriptionViewBoxDescriptionSubtitle:"웹 페이징 검색",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            게시글의 제목, 작성자 그리고 내용에 따라서 검색할 수 있도록 제작했습니다.
                            게시글 관련 검색을 하면 새롭게 페이징이 되도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path+"3_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"게시글 CRUD",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            게시글 작성할 때, 텍스트를 편집할 수 있는 기능을 만들어 보았습니다.
                            글자의 속성을 변경할 수 있도록 execCommand를 이용했습니다.
                            웹 프로그램을 깊게 이해하고 싶어 API 대신 직접 만들어보았습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path+"3_2.png",
                        descriptionViewBoxDescriptionSubtitle:"게시글 보기",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            게시글을 클릭하면 보여주는 화면입니다.
                            내가 작성한 글이면 삭제 또는 수정할 수 있는 버튼이 나오도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path+"3_3.gif",
                        descriptionViewBoxDescriptionSubtitle:"게시글 댓글 기능",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            여러 사람들이 댓글 작성할 수 있도록 만들었습니다.
                            내가 작성한 댓글은 빨간색으로 나오도록 했으며,
                            작성한 댓글은 삭제 또는 수정할 수 있도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path+"3_4.gif",
                        descriptionViewBoxDescriptionSubtitle:"댓글 수정",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            작성한 댓글을 수정하는 모습입니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path+"3_5.gif",
                        descriptionViewBoxDescriptionSubtitle:"웹 페이징 디테일",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            게시글 검색후 다른 게시글로 이동하거나 나갔을 때,
                            검색했던 기록이 그대로 남아있도록 했습니다.
                            `
                    },
                ]
            }
            ,

            {
                descriptionViewTitleName:"이미지 게시판",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path+"4.gif",
                        descriptionViewBoxDescriptionSubtitle:"이미지 게시판 화면",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        이미지를 올릴수 있는 게시판입니다.
                        글 보기 부분은 CSS Grid 기능을 이용하여 제작했습니다.
                        처음부터 올린 이미지가 썸네일로 보이도록 했습니다.
                        `
                    },
                    {   
                        descriptionViewBoxImage:path+"4_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"이미지 업로드",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        이미지를 여러개 첨부해서 글을 작성할 수 있도록 했습니다.
                        게시글 작성 완료하면 서버에 요청을 보내 이미지를 저장합니다.
                        또한 이미지를 저장할 때 파일 이름이 중복되지 않도록 했습니다.
                        `
                    },
                ]
            },

            {
                descriptionViewTitleName:"WEB 소켓 API",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path+"5.gif",
                        descriptionViewBoxDescriptionSubtitle:"실시간 채팅기능",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        홈페이지 이용하는 사람들이 서로 실시간 대화할 수 있도록 채팅 기능을 제작했습니다.
                        사용자가 들어오거나 나갔을 경우 메세지로 알람이 가도록 했습니다.
                        `
                    },
                    {   
                        descriptionViewBoxImage:path+"5_1.png",
                        descriptionViewBoxDescriptionSubtitle:"WEB 소켓 API",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        Maven에서 제공하는 WEB 소켓을 이용했습니다.
                        서버에서 WEB 소켓 API를 적용했으며,
                        웹에서 실시간 채팅할 수 있도록 했습니다.
                        `
                    },
                ]
            },


            {
                descriptionViewTitleName:"데이터베이스 설계 방법",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path+"6.png",
                        descriptionViewBoxDescriptionSubtitle:"ERMASTER 사용",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            DB를 제작할 때 ERMASTER를 사용하여 설계했습니다.
                            DB는 ORACLE을 사용을 했습니다.
                            테이블은 회원, 게시글, 게시글 댓글 그리고 이미지 등을 만들었습니다.
                            `
                    }
                ]
            },


        ]
    },  
    6:{
        gridCardTitle:"컬렉션 저장 프로그래밍",
        gridCardTitleSummary:
            `
            Eclipse의 Console을 이용하여 학생과 교사를 JAVA Collection으로 저장하고 불러오는 기능.
            `
        ,
        gridCardGroup:"개인 프로젝트",
        gridCardDescription:
            `
            교육 기관에서 처음으로 진행했던 개인 프로젝트입니다.
            Eclipse의 콘솔을 이용하여 학생과 교사를 저장할 수 있는 콘솔 프로그램을 제작했습니다.
            색상 Code를 넣어서 GUI형태로 출력하도록 했습니다. 또한 한글과 글자가 혼합 사용할 시 padding을 이용한
            글자 정렬이 제대로 되지 않았습니다. 기본으로 사용하고 있는 Font를 기준으로 padding과 같은 기능을 하는 Method를 만들어 정렬이 잘 나오도록 시도했습니다.
            `
        ,
        gridCardImage:path3+"/main.gif"
        ,
        gridCardDate:"2023.9.29 ~ 2023.10.13",
        projectCardLink:[
            {
                url:"",
                icon:"./icons/people-icon.png"
            },
            {
                url:"https://github.com/MinSeHong/Java-Project-Collection",
                icon:"./icons/github-icon.svg"
            }
        ],
        descriptionTitleSkillStack:[
            {
                icon:"./icons/java-icon.png",
                name:"java",
                group:"backend"
            },
            {
                icon:"./icons/eclipse-icon.png",
                name:"eclipse",
                group:"tool"
            },
        ],
        descriptionReview:
            `
            부모 클래스(Person)를 만들고 자식 클래스(학생, 교사)로 부모를 상속합니다.
            학생과 교사를 Console에서 Execel 형태로 출력하도록 했습니다.
            Console에 출력되는 글자 색상을 다르게 할 수 있다는 것을 알게 되어
            여러개의 색상 코드를 이용하여 GUI 형태로 제작했습니다.
            `
        ,
        descriptionViewTitle:[
            {
                descriptionViewTitleName:"COLLECTION 설계",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path3+"1.png",
                        descriptionViewBoxDescriptionSubtitle:"클래스 계획",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            학생과 교사를 저장할 수 있는 Class 객체를 설계 했습니다.
                            공통적으로 가지는 값(이름, 나이, 주소 등)은 "Person"이라는 부모 클래스를 만들고
                            학생과 교사는 자식 Class로 부모 Class를 상속 받도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path3+"1_1.png",
                        descriptionViewBoxDescriptionSubtitle:"클래스 설명",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            "Person" 부모 클래스의 코드 부분입니다.
                            인자 생성자를 만들고 setter와 getter로 접근할 수 있도록 했습니다.
                            `
                    },
                ]
            },
            {
                descriptionViewTitleName:"Console GUI",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path3+"2.png",
                        descriptionViewBoxDescriptionSubtitle:"색상 Code 이용",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            Console 출력을 제작하면서, 색상 Code를 넣어 색상을 출력할 수 있다는 것을 알게 되었습니다.
                            색상은 유니코드로 되어있어 구분하기 힘들기 때문에,
                            static 변수로 선언하고 String에 붙여서 사용했습니다. 
                            `
                    },
                    {   
                        descriptionViewBoxImage:path3+"2_1.png",
                        descriptionViewBoxDescriptionSubtitle:"글자 정렬 Mothod",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            Eclipse의 기본 폰트인 "Consolas"는 한글과 영어 글자의 너비가 다르기 때문에
                            padding을 활용해도 열이 일정하게 정렬되지 않습니다. 한글과 영어의 글자 갯수를 계산하고
                            여백을 추가로 채워 열이 일정하게 출력되도록 Mothod를 작성 했습니다.
                            `
                    }
                ]
            },
            {
                descriptionViewTitleName:"애니메이션",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path3+"3.gif",
                        descriptionViewBoxDescriptionSubtitle:"실행 화면",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            실행 했을 때, Thread.sleep()을 이용하여 
                            글자 애니메이션이 나타나도록 했습니다.
                            `
                    }
                ]
            },
            {
                descriptionViewTitleName:"메뉴 선택",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path3+"4.gif",
                        descriptionViewBoxDescriptionSubtitle:"실행 화면",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            여러가지의 기능을 메뉴에서 선택할 수 있도록 했습니다.
                            `
                    }
                ]
            },
            {
                descriptionViewTitleName:"메뉴 기능",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path3+"5.gif",
                        descriptionViewBoxDescriptionSubtitle:"학생&교사 추가",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            추가하거나 수정하는 도중 다시 메뉴로 돌아갈 수 있도록 했습니다.
                            try ~ Catch를 이용해 유효성 검사를 넣었으며,
                            실행하는 도중 예외로 인한 종료가 안되도록 했습니다.

                            `
                    },
                    {   
                        descriptionViewBoxImage:path3+"5_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"학생&교사 검색",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            저장된 학생과 교사를 원하는 방식으로 출력할 수 있습니다.
                            이름, 나이, 주소, 전화번호에 따라 정렬 출력을 할 수 있습니다.
                            또한 정렬이 고르게 되도록 메소드를 제작 했기 때문에 
                            열이 깨짐 없이 출력됩니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path3+"5_2.gif",
                        descriptionViewBoxDescriptionSubtitle:"학생&교사 수정",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            저장된 학생과 교사를 검색해서 수정할 수 있도록 했습니다.
                            검색을 한 후 검색된 기록이 번호로 나옵니다. 수정할 번호를 입력해서
                            원하는 값으로 수정합니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path3+"5_3.gif",
                        descriptionViewBoxDescriptionSubtitle:"학생&교사 초기화",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            현재 작성한 학생과 교사를 리셋할 수 있습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path3+"5_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"학생&교사 불러오기",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            파일 입출력 기능으로 컬렉션을 저장하도록 했습니다.
                            다음에 프로그램을 실행 할 때, 저장된 목록을 불러옵니다.
                            `
                    },
                ]
            },
        ]
    },
    /*
    sample:{
        gridCardTitle:"카드 제목",
        gridCardTitleSummary:
            `카드 설명 요약
            `
        ,
        gridCardDescription:
            `카드 설명
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
                url:"https://github.com/MinSeHong/Board_Homepage",
                icon:"./icons/github-icon.svg"
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
            `웹 프로그래밍 언어를 깊게 이해하고 싶어, 직접 만들 수 있는 기능들은 API 사용하지 않고
            만들어 보았습니다. 사용자의 상호작용에 따라 발생할 수 있는 예외를 최소화 하려고 했으며,
            게시판 CRUD를 제작하면서 여러가지 디테일을 적용해 보았습니다.
            `
        ,
        descriptionViewTitle:[
            {
                descriptionViewTitleName:"회원가입/탈퇴 기능",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path+"1.png",
                        descriptionViewBoxDescriptionSubtitle:"회원 로그인",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            회원 로그인을 할 때, 이메일, 비밀번호 형식에 맞는지 유효성 검사를 넣었습니다.
                            회원 정보가 맞는지 서버에서 판단을 한 후 로그인 또는 에러 문구를 표시하도록 제작했습니다.
                            `
                    }
                ]
            },
        ]
    }*/
}