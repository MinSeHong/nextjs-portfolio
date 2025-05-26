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

export const MOCK_GRID_CARDS:GridCardId={
    1:{
        gridCardTitle:"깃허브 웹 포토폴리오",
        gridCardTitleSummary:"웹 포토폴리오를 제작했습니다. 여러가지의 인터렉티브를 제작했으며 계속 업데이트 할 예정입니다.",
        gridCardGroup:"개인 프로젝트",
        gridCardDescription:
            `GitHub Page에 게시하기 위한 웹 포토폴리오 프로젝트입니다. 결과물은 현재 사용 중인 웹사이트이며, 사이트에 대한 설명과 제작 과정을 함께 담고 있습니다.`
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
                url:"https://github.com/minsehong/nextjs-portfolio",
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
            `
            유지보수를 용이하게 하기 위해 디렉토리 구조를 설계했습니다.
            데이터 기반 렌더링(Data-driven Rendering) 방식으로 DOM을 동적으로 생성하였으며,
            TypeScript로 Mock Data를 설계하여 컴포넌트에 주입하는 형태로 구성했습니다.
            또한 애니메이션 라이브러리인 GSAP을 활용해 다양한 인터랙티브를 구현했습니다.
            `
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
                        다양한 페이지를 구현하기 위해 디렉토리를 다음과 같이 구조화하였습니다.
                        정적 리소스(이미지, 폰트)는 public 폴더에 저장하고,
                        데이터 객체, 컴포넌트, CSS 파일은 app 디렉토리 내에 정리하여 관리했습니다.
                        개인적으로 사용하는 프로젝트여서, 해당 페이지의 컴포넌트와 데이터를 한 곳에서 관리하도록 구현했습니다.
                        `
                    },

                    {   
                        descriptionViewBoxImage:path0+"1_1.png",
                        descriptionViewBoxDescriptionSubtitle:"데이터 기반 렌더링",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        "data"폴더는 Mock Data를 저장하는 곳입니다.
                        TypeScript로 객체를 생성하여 수정, 추가, 삭제가 용이하도록 구현했습니다.
                        이 Mock Data 기반으로 DOM을 동적으로 생성합니다.
                        TypeScript를 사용한 이유는 타입을 명확히 지정해 오류를 사전에 방지하기 위해 사용했습니다.
                        `
                    },

                    {   
                        descriptionViewBoxImage:path0+"1_2.gif",
                        descriptionViewBoxDescriptionSubtitle:"Mock Data 예시",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        프로젝트 소개에서 사용되는 Mock Data의 예시입니다.
                        Mock Data를 별도로 관리하여 반복적인 DOM 생성을 최소화했고,
                        프로젝트 관련 내용을 쉽게 추가하거나 삭제할 수 있도록 설계했습니다.
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
                        사용자가 방문하자마자 관심을 끌 수 있도록 인터랙티브 요소를 제작했습니다.
                        이를 구현하기 위해 GSAP을 사용했는데, 그 이유 중 하나는 CSS 애니메이션으로 연속적인 동작을 구현할 경우
                        delay를 사용해 이전 애니메이션의 duration을 직접 계산해야 했습니다.
                        GSAP에서 제공하는 timeline()는 위와 같은 계산 없이 A 애니메이션이 끝난 후 B 애니메이션이 이어지도록 효율적으로 구현할 수 있습니다.
                        `
                    },
                    {   
                        descriptionViewBoxImage:path0+"2_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"배경 이동",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        시작 화면에서 마우스 이동 방향으로 배경이 움직이도록 구현했습니다.
                        패턴 형식의 이미지를 제작해 배경화면으로 제작했고, 마우스 이동 방향에 따라 background position을 변경합니다.
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
                        운영체제의 애플리케이션 창처럼 보이도록 인터페이스를 구성했습니다.
                        스크롤 위치에 따라 애니메이션이 실행되는 GSAP ScrollTrigger를 사용했습니다.
                        `
                    },
                    {   
                        descriptionViewBoxImage:path0+"3_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"Hover Expand",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        마우스를 올렸을 때 요소가 확대되고, 관련 내용이 자연스럽게 나타나도록 CSS와 JavaScript로 구현했습니다.
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
                        자기소개 화면과 동일한 방식으로, 운영체제의 애플리케이션 창 형태로 구성했습니다.
                        프로젝트 목록은 카드 갤러리 형태로 제작하였으며,
                        추후 다른 프로젝트를 추가할 수 있도록 확장성을 고려해 구현했습니다.
                        `
                    },
                    {   
                        descriptionViewBoxImage:path0+"4_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"GSAP Flip",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        GSAP을 사용한 이유 중 하나는 Flip 기능입니다.
                        Flip은 요소의 위치, 크기, 상태 변화를 부드럽고 자연스럽게 애니메이션할 수 있는 기능입니다.
                        이 기능을 활용해, 프로젝트를 클릭했을 때 해당 프로젝트가 전체화면으로 플립되도록 인터랙티브 애니메이션을 구현했습니다.
                        `
                    },
                    {   
                        descriptionViewBoxImage:path0+"4_2.gif",
                        descriptionViewBoxDescriptionSubtitle:"프로젝트 상세 화면",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        Flip 애니메이션으로 전체 화면으로 전환되면, 해당 프로젝트에 대한 자세한 설명과 기획 과정을 확인할 수 있습니다.
                        처음 화면에서는 주요 기능에 대한 설명을 볼 수 있도록 구성했고,
                        스크롤을 내리면서 각 기능이 어떻게 제작되었고, 왜 사용되었는지에 대한 상세한 설명을 볼 수 있습니다.
                        제목을 클릭하면 해당 제목으로 이동되도록 scrollTo를 사용했습니다.
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
            `
            AI 활용한 팀 프로젝트를 기획하면서, 식단과 운동을 동시에 관리해주는 서비스가 부족하다는 점을 발견했습니다.
            식단과 운동 관리를 함께 제공할 뿐만 아니라 AI를 활용한 개인 맞춤형 피트니스 트레이너를 제공하는 서비스를 만들기로 했습니다.
            또한 사용자들의 관심을 유도하기 위해 운동 게임 기능을 도입하고, 게임을 통해 획득한 포인트로 물건을 구매할 수 있는 시스템도 함께 설계했습니다..
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
                url:"https://github.com/MinSeHong/frontend-fitme-team-project",
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
                            팀원들이 필요하다고 생각하는 기능을 종합하여 UML을 설계하고 제작했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"1_1.png",
                        descriptionViewBoxDescriptionSubtitle:"DB설계 담당",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            프로젝트의 데이터베이스 설계를 담당했습니다.
                            회원 정보, 친구 추가, 채팅, 캘린더, 게시글, 소셜 로그인 등 다양한 기능에 대한 테이블을 직접 설계하고,
                            프로젝트를 진행하면서 필요한 데이터베이스가 생기면 추가하고 수정했습니다.
                            `
                    },                    
                ]
            },
            {
                descriptionViewTitleName:"진행 계획",
                descriptionViewBoxDescription:[
                    {   
                        descriptionViewBoxImage:path4+"2.png",
                        descriptionViewBoxDescriptionSubtitle:"Notion 사용",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            협업에 도움이 되도록 Notion을 활용했습니다.
                            Notion을 활용해 일정 관리와 회의록, 자료 정리 페이지를 만들었으며.
                            팀원들이 함께 사용할 수 있도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"2_1.png",
                        descriptionViewBoxDescriptionSubtitle:"React 담당",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            팀 프로젝트에서 리액트를 전반적으로 담당했습니다.
                            리액트 디렉토리 구조를 설계하고,
                            프론트엔드 구현하는 팀원들이 겪는 문제를 해결해주며 개발을 지원했습니다.
                            또한, GitHub를 관리하며 발생하는 오류를 수정하고 프로젝트의 전체적인 흐름을 조율했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"2_2.png",
                        descriptionViewBoxDescriptionSubtitle:"팀원 멘토 담당",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            코드에 익숙하지 않은 팀원들이 원활하게 작업할 수 있도록 멘토 역할을 맡았으며,
                            정기적인 멘토링을 통해 팀원들의 능력 향상을 도와주었습니다.
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
                            운동과 식단관리 메인 페이지입니다.
                            시작 화면에는 운동과 관련된 영상을 보여주며,
                            어떤 서비스인지 간단하게 설명을 넣었습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"3_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"페이지 이동",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            React DOM Router를 활용해 페이지 간 이동 기능을 구현했습니다.
                            각 페이지마다 컴포넌트를 미리 구성해 두고,
                            팀원들이 해당 컴포넌트 내부에서 작업을 진행할 수 있도록 했습니다.
                            작업 간 충돌을 최소화할 수 있도록 구조를 설계하는데 노력했으며,
                            덕분에 프론트엔드 개발 중 발생하는 에러를 쉽게 파악하고 해결할 수 있었습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"3_2.gif",
                        descriptionViewBoxDescriptionSubtitle:"사이드 메뉴 제작",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            사이드 메뉴에 애니메이션 효과를 적용해 사용자 경험을 개선했습니다.
                            로그인 여부에 따라 접근 가능한 페이지를 제한하며, 비로그인 사용자는 접근할 수 없도록 처리했습니다.
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
                            회원가입 시 사용자가 이메일을 입력하면,
                            SMTP를 이용해 인증번호를 발송하도록 구현했습니다.
                            회원 가입하는 사용자는 이메일에 도착한 인증번호를 이용해
                            이메일 인증을 합니다.
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
                            실시간 채팅할 수 있는 챗봇 모달을 제작했습니다.
                            채팅을 입력해서 요청을 보내고 결과 값을 출력되도록 했습니다.
                            해당 챗봇은 GPT API를 이용해서 제작했으며,
                            서비스에 관련된 정보를 넣어 해당 서비스에 대한 답변을 할 수 있도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"5_1.png",
                        descriptionViewBoxDescriptionSubtitle:"Web Speech Api",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            Web Speech API를 활용해 음성 인식으로 질문할 수 있는 기능을 구현했습니다.
                            또한, 챗봇의 답변을 음성으로 전달하는 기능도 함께 제공하여 사용자 경험을 향상시켰습니다.
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
                            당뇨병 진단이 가능한 페이지가 필요하여 제작하게 되었습니다.
                            사용자가 정보를 입력하면, 해당 정보를 바탕으로 진단 결과를 제공하는 기능을 구현했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"6_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"설문지 애니메이션",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            당뇨병 진단 설문지를 애니메이션 효과와 함께 단계별로 이동하도록 구현했습니다.
                            설문 진행 상황에 따라 진행 바가 표시되며,
                            사용자가 필요할 경우 이전 질문으로 돌아갈 수 있는 기능도 제공했습니다.
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
                            기획한 서비스에서 운동 게임을 통해 포인트를 획득하고, 이를 활용해 물건을 구매할 수 있는 페이지가 필요했습니다.
                            이에 따라, 보유한 포인트로 음식을 구매할 수 있는 홈쇼핑 스타일의 웹 페이지를 제작했습니다.
                            페이지는 최신 배너가 자동으로 슬라이드되도록 구현하여 사용자 경험을 향상 시키려고 노력했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"7_1.png",
                        descriptionViewBoxDescriptionSubtitle:"상품 크롤링 기능",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            Selenium을 활용해 특정 홈쇼핑 페이지를 크롤링하여 상품 구매 목록이 보이도록 했습니다.
                            사용자가 상품을 찜할 수 있도록 기능을 추가했으며, 결제는 부트페이(Bootpay)를 연동하여 처리할 수 있도록 했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"7_2.gif",
                        descriptionViewBoxDescriptionSubtitle:"상품 구매/찜 페이지",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            사용자가 구매한 상품과 찜한 목록을 확인할 수 있는 페이지를 제작했습니다.
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
                            운동 게임을 제공하여 사용자들이 서비스에 관심을 이끌 수 있도록 했습니다.
                            게임을 통해 포인트를 획득하고, 획득한 포인트로 상품을 구매할 수 있도록 구현했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"8_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"게임 방 목록 디자인",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            실시간으로 사용자들이 게임할 수 있는 방 목록을 제공합니다.
                            각 방에 대한 진행 상황과 참여 인원 등 상세 정보를 실시간으로 표시합니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"8_2.gif",
                        descriptionViewBoxDescriptionSubtitle:"프로필 이미지 생성 AI",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            GPT API를 활용해 이미지를 생성하고, 생성된 이미지를 프로필 사진으로 설정할 수 있는 기능을 구현했습니다.
                            예를 들어, "귀여운 고양이"라는 문구를 입력하면 귀여운 고양이 이미지를 생성합니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"8_3.gif",
                        descriptionViewBoxDescriptionSubtitle:"게임 방 생성 모달",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            기존에 만든 게임 방에 참여하는 대신, 사용자가 직접 게임 방을 생성할 수 있도록 모달 창을 제작했습니다.
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
                            사람들이 소통할 수 있는 게시판을 구현했습니다
                            스크롤을 내리면 이전에 작성된 글들이 자동으로 추가되어 계속해서 내용을 확인할 수 있도록 했습니다.
                            소셜 커뮤니티에 필수적인 친구 추가, 친구 목록, 게시판 CRUD, 팔로우·팔로워, 좋아요, 그리고 스크랩 기능도 설계 및 구현했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"9_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"친구 관련 기능",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            친구 추가, 친구 목록 조회, 친구 삭제, 친구 요청 등
                            소셜 커뮤니티에서 필요한 친구 관련 기능들을 설계하고 구현했습니다.
                            `
                    },
                    {   
                        descriptionViewBoxImage:path4+"9_2.gif",
                        descriptionViewBoxDescriptionSubtitle:"게시판 기능",
                        descriptionViewBoxDescriptionTitleDescription:
                            `
                            게시글의 이미지를 횡 스크롤하며 여러 이미지를 볼 수 있도록 제작했습니다.
                            게시글 CRUD뿐만 아니라 좋아요, 스크랩, 게시글 신고, 조회수 기능 등 다양한 상호작용을 설계하고 구현했습니다.
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
                url:"https://github.com/MinSeHong/python-yolo-object-detection-project",
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
            Python의 bs4 라이브러리를 이용해서 네이버 속보 기사를 크롤링 하도록 했습니다.
            크롤링한 부분 중에서 원하는 정보을 얻습니다.
            그리고 애니메이션 라이브러리인 GSAP을 사용해서 카드 형태의 애니메이션으로 나타나도록 웹을 제작했습니다.
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
                url:"https://github.com/MinSeHong/python-crawling-project",
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
            크롤링 한 데이터를 인터랙티브로 보여주기 위해 GSAP Library를 이용해 보았습니다.
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
                            네이버 기사의 특정 부분을 크롤링 하기 위해 bs4를를 사용했습니다.
                            크롤링을 하는 부분은 Python에서 Module 형태로 제작했습니다.
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
            프로젝트는 4주의 기간동안 진행했으며 DataBase 구축, Tomcat 서버 구축,
            JSP를 이용한 회원 로그인, 게시글 CRUD를 제작했습니다.
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
                url:"https://github.com/MinSeHong/jsp-homepage-project",
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
                            웹 프로그램에 대한 이해를 높이고자 직접 텍스트 에디터를 제작해보았습니다.
                            execCommand 기능을 이용하여 글자의 속성을 변경을 할 수 있도록 했습니다.
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
                        처음에 올린 이미지가 썸네일로 보이도록 했습니다.
                        `
                    },
                    {   
                        descriptionViewBoxImage:path+"4_1.gif",
                        descriptionViewBoxDescriptionSubtitle:"이미지 업로드",
                        descriptionViewBoxDescriptionTitleDescription:
                        `
                        이미지를 여러개 첨부해서 글을 작성할 수 있도록 했습니다.
                        게시글 작성을 완료하면, 서버에 요청을 보내 이미지를 저장합니다.
                        또한 이미지를 저장할 때 파일 이름이 중복되지 않도록 파일 네이밍 시퀀싱을 제작했습니다.
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
                            DB는 ORACLE을 사용했으며
                            회원, 게시글, 게시글 댓글 그리고 이미지 테이블 등을 만들었습니다.
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
            학생과 교사를 JAVA Collection으로 저장하고 불러오는 기능을 제작했습니다.
            `
        ,
        gridCardGroup:"개인 프로젝트",
        gridCardDescription:
            `
            교육 기관에서 처음으로 진행했던 개인 프로젝트입니다.
            Eclipse를 이용하여 학생과 교사를 저장할 수 있는 콘솔을 제작했습니다.
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
            Console에서 학생과 교사를 Execel 형태로 출력하도록 했습니다.
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
                            여백을 추가로 채워 열이 일정하게 출력되도록 Method를 작성 했습니다.
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
                            이름, 나이, 주소, 전화번호에 따라 정렬 출력할 수 있으며
                            정렬이 고르게 되도록 메소드를 제작 했기 때문에 
                            열 깨짐 없이 출력됩니다.
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
}