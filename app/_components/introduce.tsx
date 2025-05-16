'use client';
import { useEffect, useRef, useState } from "react";
import styles from "./introduce.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import ScrollSmoother from "gsap/src/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/all";

/* INTRODUCE 라이브러리 */
import { SKILLS_VARIABLE, HOBBYS_VARIABLE } from "./_libs/introduceLib";
/* 프로젝트 카드 라이브러리 */
import { GRID_CARD_ID_VARIABLE} from "./_libs/introductionLib";
/* PERSONALITY 라이브러리 */
import { PERSONALITY_VARIABLE } from "./_libs/personalityLib";


export default function Introduce() {
    /* Introduction Start: Gsap 애니메이션 시작 */
    const containerFirstRef = useRef<HTMLDivElement>(null);
    const containerSecondRef = useRef<HTMLDivElement>(null);

    /* Introduction Start: Gsap Profile 애니메이션 */
    const profileImageRef = useRef<HTMLImageElement>(null);
    const profileGithubIconRef = useRef<HTMLImageElement>(null);
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
    gsap.registerPlugin(ScrollTrigger,Flip,ScrollSmoother);

    /* title 애니메이션 TimeLine 세팅 */
    const cardTimeLine:gsap.core.Timeline = gsap.timeline({});




    const [skillsLibraryActiveClick, setSkillsLibraryActiveClick] = useState<boolean>(false);

    function skillsLibraryActive(name:string){
        if(skillsLibraryActiveClick == true){
            return;
        }
        setSkillsLibraryActiveClick(true);
        skillsView.current = [];

        let SKILLS_VARIABLES:any = null;

        if(name == "NORMAL"){
            SKILLS_VARIABLES = SKILLS_VARIABLE;
        }
        else if(name =="FRONTEND"){
            SKILLS_VARIABLES = Object.fromEntries(Object.entries(SKILLS_VARIABLE).filter(([_,value]) => value.hashtag == "Front-end"));
        }
        else if(name =="BACKEND"){
            SKILLS_VARIABLES = Object.fromEntries(Object.entries(SKILLS_VARIABLE).filter(([_,value]) => value.hashtag == "Back-end"));
        }
        else if(name =="LIBRARY"){
            SKILLS_VARIABLES = Object.fromEntries(Object.entries(SKILLS_VARIABLE).filter(([_,value]) => value.hashtag == "Library"));
        }


        for(const subject in SKILLS_VARIABLES){
            const descriptions:any[] = [];
            const hastag:any[] = [];

            SKILLS_VARIABLES[subject]['skillDescription'].map((item:string, index:number)=>(
                    descriptions.push(<div key={index}>{item}<br/></div>)
                )
            );
            
            if(SKILLS_VARIABLES[subject]['hashtag']=="Front-end"){
                hastag.push(
                    <div key="hastag" className={`${styles.skillHashtag} ${styles.orange}`}>
                        {SKILLS_VARIABLES[subject]['hashtag']}
                    </div>
                )
            }
            else if(SKILLS_VARIABLES[subject]['hashtag']=="Back-end"){
                hastag.push(
                    <div key="hastag" className={`${styles.skillHashtag} ${styles.red}`}>
                        {SKILLS_VARIABLES[subject]['hashtag']}
                    </div>
                )
            }
            else if(SKILLS_VARIABLES[subject]['hashtag']=="Library"){
                hastag.push(
                    <div key="hastag" className={`${styles.skillHashtag} ${styles.green}`}>
                        {SKILLS_VARIABLES[subject]['hashtag']}
                    </div>
                )
            };

            skillsView.current.push(
                <div className="skillAnimation" key={subject}>
                    <div className={styles.skillBox}>
                        <div className={styles.skillicon}>
                            <img src={SKILLS_VARIABLES[subject]['skillIcon']}/>
                        </div>
                        <div className={styles.skillSubject}>
                            {subject}
                        </div>
                        {hastag}
                    </div>
                    <div className={styles.skilldescription}>
                        {descriptions}
                    </div>
                </div>
            )
        }

        setSkillsViewState(skillsView.current);

    }

    /* HOBBYS 라이브러리 실행 */
    const hobbysView = useRef<any[]>([]);
    function hobbysLibraryActive(){
        hobbysView.current = [];

        for(const subject in HOBBYS_VARIABLE){
            const descriptions:any[] = [];
            const hastag:any[] = [];

            HOBBYS_VARIABLE[subject]['skillDescription'].map((item:string, index:number)=>(
                    descriptions.push(<div key={index}>{item}<br/></div>)
                )
            );
            
            hastag.push(
                <div key="hastag" className={`${styles.hobbyHashtag} ${styles.orange}`}>
                    {HOBBYS_VARIABLE[subject]['hashtag']}
                </div>
            )

            hobbysView.current.push(
                <div className="hobbyAnimation" key={subject}>
                    <div className={styles.hobbyBox}>
                        <div className={styles.hobbyicon}>
                            <img src={HOBBYS_VARIABLE[subject]['skillIcon']}/>
                        </div>
                        <div className={styles.hobbySubject}>
                            {subject}
                        </div>
                        {hastag}
                    </div>
                    <div className={styles.hobbydescription}>
                        {descriptions}
                    </div>
                </div>
            )
        }
    };

    /* 스킬 라이브러리 실행 */
    const skillsView = useRef<any[]>([]);
    const [skillsViewState, setSkillsViewState] = useState<any[]>([]);


    useEffect(()=>{
        gsap.from(".skillAnimation", {
            opacity: 0,
            duration: 0.5,
            ease: "ease",
            stagger:0.3,
            onComplete:()=>{
                setSkillsLibraryActiveClick(false);
            }
        });
    },[skillsViewState]);


    useEffect(()=>{
        skillsLibraryActive("NORMAL");
        hobbysLibraryActive();
    },[]);

    /* Skills Start: Gsap cardTimeLine 애니메이션 시작 */
    useEffect(()=>{
        /* Introduce Start Gsap 실행 JavaScript */
        const cardFirstTitleRefSplit = SplitText.create(cardFirstTitleRef.current, { type: "chars" });
        const cardSecondTitleRefSplit = SplitText.create(cardSecondTitleRef.current, { type: "chars" });
        const cardThirdTitleRefSplit = SplitText.create(cardThirdTitleRef.current, { type: "chars" });
        const cardFourthTitleRefSplit = SplitText.create(cardFourthTitleRef.current, { type: "chars" });

        const cardAnimation = () =>{
            /* Display:none 해제 */
            if(cardFirstTitleRef.current){
                cardFirstTitleRef.current.style.display="block";
            }
            if(cardSecondTitleRef.current){
                cardSecondTitleRef.current.style.display="block";
            }
            if(cardThirdTitleRef.current){
                cardThirdTitleRef.current.style.display="block";
            }
            if(cardFourthTitleRef.current){
                cardFourthTitleRef.current.style.display="block";
            }
            if(introductionRef.current){
                introductionRef.current.style.display="";
            }
            if(profileRef.current){
                profileRef.current.style.display="";
            }


            cardTimeLine.from(profileImageRef.current, {
                opacity: 0,
                duration: 1, 
                ease: "bounce"
            });
            cardTimeLine.from(profileGithubIconRef.current, {
                opacity: 0,
                duration: 0.7,
                ease: "bounce"
            });
            cardTimeLine.from(profileMailIconRef.current, {
                opacity: 0,
                duration: 0.7,
                ease: "bounce"
            });
            cardTimeLine.from(profileFirstDetail.current, {
                opacity: 0,
                duration: 0.4,
                scale:0,
                ease: "bounce"
            });
            cardTimeLine.from(profileSecondDetail.current, {
                opacity: 0,
                duration: 0.4,
                scale:0,
                ease: "bounce"
            });

            cardTimeLine.from(profileThirdDetail.current, {
                opacity: 0,
                duration: 0.4,
                scale:0,
                ease: "bounce"
            });

            cardTimeLine.from(`.${styles.card}`, {
                opacity: 0,
                duration: 0.4,
                scale:0,
                ease: "ease",
                stagger:0.4
            });



            cardTimeLine.from(cardFirstTitleRefSplit.chars, {
                opacity: 0,
                duration: 0.2, 
                ease: "bounce",
                stagger: 0.05
            });
            cardTimeLine.from(cardSecondTitleRefSplit.chars, {
                opacity: 0,
                duration: 0.2, 
                ease: "bounce",
                stagger: 0.05
            });
            cardTimeLine.from(cardThirdTitleRefSplit.chars, {
                opacity: 0,
                duration: 0.2, 
                ease: "bounce",
                stagger: 0.05
            });
            cardTimeLine.from(cardFourthTitleRefSplit.chars, {
                opacity: 0,
                duration: 0.2, 
                ease: "bounce",
                stagger: 0.05,
                onComplete:()=>{
                    if(containerFirstRef.current){
                        containerFirstRef.current.style.pointerEvents="auto";
                    };
                },
            });
        }

        gsap.from(containerFirstRef.current, {
            scrollTrigger: {
                trigger: containerFirstRef.current,
                start:'top center',
            },
            opacity: 0,
            duration: 2, 
            y:-10,
            x:-10,
            ease: "ease",
            /* GSAP 애니메이션 종료시 함수 실행행 */
            onComplete:()=>{
                cardAnimation();
            },
            onStart:()=>{
            if(introductionRef.current){
                introductionRef.current.style.display="none";
            }
            if(profileRef.current){
                profileRef.current.style.display="none";
            }
            }
        });
    },[]);


    /* 프로젝트 카드 라이브러리 실행 */
    const projectView = useRef<any[]>([]);
    const projectCardLink = useRef<any[]>([]);
    const descriptionTitleSkillStack = useRef<any[]>([]);
    const descriptionViewTitle = useRef<any[]>([]);
    const descriptionViewList = useRef<any[]>([]);
    const descriptionViewBoxDescription = useRef<any[]>([]);
    const [projectViewState, setProjectViewState] = useState<any[]>([]);


    function projectCardLibraryActive(){
        const GRID_CARD_ID_VARIABLES:any = GRID_CARD_ID_VARIABLE;
        projectView.current = [];

        let indexNumber:number = 0;
        
        for(const index in GRID_CARD_ID_VARIABLES){
            projectCardLink.current=[];
            descriptionViewTitle.current=[];

            descriptionViewList.current=[];
            descriptionViewBoxDescription.current=[];
            descriptionTitleSkillStack.current=[];

            /* 링크 버튼 제작 */
            for(const key in GRID_CARD_ID_VARIABLES[index]['projectCardLink']){
                indexNumber++;

                if(GRID_CARD_ID_VARIABLES[index]['projectCardLink'][key]['url'] != ""){
                    projectCardLink.current.push(
                        <div className={styles.projectCardLinkBox} key={indexNumber}>
                            <a href={`${GRID_CARD_ID_VARIABLES[index]['projectCardLink'][key]['url']}`} target="_target"><img src={GRID_CARD_ID_VARIABLES[index]['projectCardLink'][key]['icon']}/></a>
                        </div>
                    )
                }
                else{
                    projectCardLink.current.push(
                        <div className={styles.projectCardLinkBox} key={indexNumber}>
                            <img src={GRID_CARD_ID_VARIABLES[index]['projectCardLink'][key]['icon']}/>
                        </div>
                    )
                }

            };

            /* 스킬 스택 아이템 제작 */
            for(let key in GRID_CARD_ID_VARIABLES[index]['descriptionTitleSkillStack']){
                indexNumber++;
                descriptionTitleSkillStack.current.push(
                    <div className={styles.descriptionTitleSkillStackIcon} key={indexNumber}>
                        <img className={styles.descriptionTitleSkillStackIconImage} src={GRID_CARD_ID_VARIABLES[index]['descriptionTitleSkillStack'][key]['icon']}/>
                        <div className={styles.descriptionTitleSkillStackIconName}>{GRID_CARD_ID_VARIABLES[index]['descriptionTitleSkillStack'][key]['name']}</div>
                    </div>
                )
            };

            

            /* 포스트잇 스크롤 기능 제작 */
            for(const key in GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle']){
                indexNumber++;
                descriptionViewTitle.current.push(
                    <div className={styles.descriptionFeatureStickyNote} key={indexNumber}>
                        <img src={`./icons/post-it-green.png`}/>
                        <div onClick={(e)=>handlerScrollView(e,"normal",GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key]['descriptionViewTitleName'])}>
                            {GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key]['descriptionViewTitleName']}
                        </div>
                    </div>
                )
            }

            /* 설명란 제작 */
            for(const key in Object.keys(GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'])){
                indexNumber++;

                descriptionViewBoxDescription.current=[];

                /* GSAP을 이용한 기능 이름 가져옴. */
                descriptionViewList.current.push(
                    <div className={styles.descriptionViewTitle} data-feature={`${GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key]['descriptionViewTitleName']}`} key={indexNumber}>
                        {GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key]['descriptionViewTitleName']}
                    </div>
                );


                for(const subKey in GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key]['descriptionViewBoxDescription']){
                    indexNumber++;

                    descriptionViewBoxDescription.current.push(
                        <div className={styles.descriptionViewBox} key={indexNumber}>
                            <div className={styles.descriptionViewBoxImage}>
                                <img src={GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key]['descriptionViewBoxDescription'][subKey]['descriptionViewBoxImage']}/>
                            </div>
                            <div className={styles.descriptionViewBoxDescription}>
                                <div className={styles.descriptionViewBoxDescriptionSubtitle}>
                                    <span>&lt;</span>{GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key]['descriptionViewBoxDescription'][subKey]['descriptionViewBoxDescriptionSubtitle']}<span>/&gt;</span>
                                </div>
                                <div className={styles.descriptionViewBoxDescriptionTitleDescription}>
                                    {GRID_CARD_ID_VARIABLES[index]['descriptionViewTitle'][key]['descriptionViewBoxDescription'][subKey]['descriptionViewBoxDescriptionTitleDescription']}
                                </div>
                            </div>
                        </div>
                    )
                }
                
                descriptionViewList.current.push(descriptionViewBoxDescription.current);
            }


            projectView.current.push(
                <div className={`${styles.gridCard} cardFilp${index}`} key={index} onClick={()=>{handlerFlipFit(index,"open")}} data-grid-card-group={GRID_CARD_ID_VARIABLES[index]['gridCardGroup']} data-view="true">
                    <img className={styles.gridCardImage} src={GRID_CARD_ID_VARIABLES[index]['gridCardImage']}/>
                    <div className={styles.gridCardTitle}>{GRID_CARD_ID_VARIABLES[index]['gridCardTitle']}</div>
                    <div className={styles.gridCardDescription}>
                        {
                            GRID_CARD_ID_VARIABLES[index]['gridCardTitleSummary']
                        }
                    </div>
                    <div className={styles.gridCardDate}>{GRID_CARD_ID_VARIABLES[index]['gridCardDate'].split(' ~ ')[1]}</div>
                    <div className={styles.gridCardGroup}>{GRID_CARD_ID_VARIABLES[index]['gridCardGroup']}</div>
                    {/* 프로젝트 설명용 생성 */}
                    <div className={styles.projectBrowserStart}>
                        <div className={styles.projectCard}>
                            <img className={styles.projectCardImage} src={GRID_CARD_ID_VARIABLES[index]['gridCardImage']}/>
                            <div className={styles.projectCardTitle}>
                                {GRID_CARD_ID_VARIABLES[index]['gridCardTitle']}
                            </div>
                            <div className={styles.projectCardDescription}>
                                {
                                    GRID_CARD_ID_VARIABLES[index]['gridCardDescription']
                                }                                       
                            </div>
                            <div className={styles.projectCardLink}>
                                {projectCardLink.current}
                            </div>       
                              
                            <div className={styles.projectCardDate}>
                                {GRID_CARD_ID_VARIABLES[index]['gridCardDate']}
                            </div>
                        </div>
                        <div className={styles.container}>
                            <div className={styles.description} data-scrollgroup="description">

                                <div className={styles.descriptionTitle} data-scroll="skill-stack">
                                    <span className={styles.green}>&lt;</span>SKILL STACKS<span className={styles.green}>/&gt;</span>
                                </div>
                                <div className={styles.descriptionTitleSkillStack}>
                                    {descriptionTitleSkillStack.current}
                                </div>

                                <div className={styles.descriptionTitle} data-scroll="review">
                                    <span className={styles.green}>&lt;</span>REVIEW<span className={styles.green}>/&gt;</span>
                                </div>
                                <div className={styles.descriptionReview}>
                                   {GRID_CARD_ID_VARIABLES[index]['descriptionReview']}
                                </div>

                                <div className={styles.descriptionTitle} data-scroll="feature">
                                    <span className={styles.green}>&lt;</span>FEATURES<span className={styles.green}>/&gt;</span>
                                </div>
                                <div className={styles.descriptionFeature}>
                                    {descriptionViewTitle.current}
                                </div>

                                <div className={styles.descriptionTitle} data-scroll="view">
                                    <span className={styles.green}>&lt;</span>VIEWS<span className={styles.green}>/&gt;</span>
                                </div>

                                <div className={styles.descriptionView}>
                                    {descriptionViewList.current}
                                </div>
                            </div>
                            <div className={styles.descriptionSliderButton}>
                                <button onClick={(e)=>handlerScrollView(e,"skill-stack","")}>
                                    <div>
                                        SKILL STACK
                                    </div>
                                </button>
                                <button onClick={(e)=>handlerScrollView(e,"review","")}>
                                    <div>
                                        REVIEW
                                    </div>
                                </button>
                                <button onClick={(e)=>handlerScrollView(e,"feature","")}>
                                    <div>
                                        FEATURE
                                    </div>
                                </button>
                                <button onClick={(e)=>handlerScrollView(e,"view","")}>
                                    <div>
                                        VIEW
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.gridCardButton} onClick={()=>{handlerFlipFit(index,"close")}}>
                        <img className={styles.gridCardButtonImage} src="./icons/close-button.svg"
                        />
                    </div>
                </div>
            )
        }
    };
    projectCardLibraryActive();
       
    useEffect(()=>{
         setProjectViewState(projectView.current);
    },[]);


    /* Project 부분: Gsap Filp 애니메이션 설정 */
    const containerSecondBrowserRef = useRef<HTMLDivElement>(null);
    const containerSecondBrowserBlockRef = useRef<HTMLDivElement>(null);
    const flipped = useRef<boolean>(false);
    const clickDelay = useRef<boolean>(false);
    const originalStateRef = useRef<any>(null);

    useEffect(()=>{
        gsap.to(containerSecondRef.current, {
            scrollTrigger: {
                trigger: containerSecondRef.current,
                start:'top center',
            },
            opacity: 1,
            duration: 2,
            ease: "ease",
        });
    })



    /* Card Gsap Filp 애니메이션 설정 */  /* 에러 시작 부분 */
    function handlerFlipFit(index:string, trigger:string){
        if(clickDelay.current == true){
            return;
        }
        
        if (!flipped.current && !clickDelay.current && trigger == "open"){
            console.log("=====open=====");
            clickDelay.current = true;
            flipped.current = true;
            originalStateRef.current = Flip.getState(`.cardFilp${index}`);

            Flip.fit(`.cardFilp${index}`, containerSecondBrowserRef.current,{
                onStart:()=>{
                    const card = document.getElementsByClassName(`cardFilp${index}`)[0] as HTMLElement | undefined;
                    if(card){
                        card.style.zIndex = '1';
                        card.style.cursor = "auto";
                        if(containerSecondBrowserRef.current){

                            /* 애니메이션 끊김 방지로 pointer Event 설정 */
                            containerSecondBrowserRef.current.style.pointerEvents="none";
                            /* 카드 안에 Scroll 이동 제한 */
                            containerSecondBrowserRef.current.style.overflow="hidden";
                        }
                    }
                },
                duration:1.5,
                ease:"power1.inOut",
                onComplete:()=>{
                    handlerFlipFitAfter(index);
                }
            });
            
        } 
        else if(flipped.current && !clickDelay.current && trigger == "close") {
            console.log("close");
            if(containerSecondBrowserRef.current){
                /* 애니메이션 끊김 방지로 pointer Event 설정 */
                containerSecondBrowserRef.current.style.pointerEvents="none";
            }
            clickDelay.current = true;
            ((document.querySelectorAll(`.cardFilp${index} .${styles.projectBrowserStart}`)) as NodeListOf<HTMLElement>).forEach((element)=>{
                element.style.opacity = "0";
            });

            filpOpenTimeLine.to(`.cardFilp${index} .${styles.gridCardButton}`,{
                opacity:0,
                duration:0.2,
                onComplete:()=>{
                    ((document.querySelectorAll(`.cardFilp${index} .${styles.gridCardButton}`)) as NodeListOf<HTMLElement>).forEach((element)=>{
                        element.style.display="none";
                    });
                }
            });

            filpOpenTimeLine.to([`.cardFilp${index} .${styles.gridCardImage}`,`.cardFilp${index} .${styles.gridCardTitle}`,`.cardFilp${index} .${styles.gridCardDescription}`,`.cardFilp${index} .${styles.gridCardDate}`],{
                    delay:1,
                    opacity:1,
                    duration:0.8,
                    stagger:0.3,
                    onComplete:()=>{
                        Flip.fit(`.cardFilp${index}`, originalStateRef.current, {
                            duration:1,
                            ease: "power1.inOut",
                            onComplete:()=>{
                                const card = document.getElementsByClassName(`cardFilp${index}`)[0] as HTMLElement | undefined;
                                if(card){
                                    card.style.zIndex = '0';
                                    card.style.cursor = "pointer";
                                    card.style.pointerEvents= "auto";
                                    if(containerSecondBrowserRef.current){
                                        containerSecondBrowserRef.current.style.overflow="auto";
                                        containerSecondBrowserRef.current.style.pointerEvents="auto";
                                    }
                                };
                                flipped.current = false;
                                clickDelay.current = false;
                            }
                        });
                    }
                }
            );
        };
    };


    const filpOpenTimeLine:any = gsap.timeline({});
    const filpOpenTimeLineScrollInitialSetting = useRef<boolean>(false);

  
    /* Card Gsap Filp 애니메이션 다음 후처리 세팅 */
    function handlerFlipFitAfter(index:string){
        ((document.querySelectorAll(`.cardFilp${index} .${styles.projectBrowserStart}`)) as NodeListOf<HTMLElement>).forEach((element)=>{
            element.style.opacity = "1";
            element.style.pointerEvents="auto";
        });
        filpOpenTimeLine.to([`.cardFilp${index} .${styles.gridCardImage}`,`.cardFilp${index} .${styles.gridCardTitle}`,`.cardFilp${index} .${styles.gridCardDescription}`,`.cardFilp${index} .${styles.gridCardDate}`],{
                opacity:0,
                duration:1,
                stagger:0.3
            }
        );

        filpOpenTimeLine.from([`.cardFilp${index} .${styles.projectCardImage}`,`.cardFilp${index} .${styles.projectCardTitle}`, `.cardFilp${index} .${styles.projectCardDescription}`],{
                opacity:0,
                duration:1,
                stagger:0.3,
                ease:"ease"
            }
        );

        filpOpenTimeLine.from(`.cardFilp${index} .${styles.projectCardLinkBox}`,{
                opacity:0,
                scale:0,
                duration:0.1,
                stagger:0.05,
                ease:"bounce.out"
            }
        );
        filpOpenTimeLine.from([`.cardFilp${index} .${styles.projectCardDate}`],{
                opacity:0,
                duration:0.1,
                ease:"ease"
            }
        );    

        filpOpenTimeLine.from([`.cardFilp${index} .${styles.container}`],{
                delay:1,
                opacity:0,
                duration:0.3,
                ease:"ease"
            }
        );

        filpOpenTimeLine.to([`.cardFilp${index} .${styles.gridCardButton}`],{
                delay:1,
                opacity:1,
                duration:0.3,
                ease:"ease",
                onComplete:()=>{
                    ((document.querySelectorAll(`.cardFilp${index} .${styles.gridCardButton}`)) as NodeListOf<HTMLElement>).forEach((element)=>{
                        element.style.display="";
                        element.style.pointerEvents="auto";
                    }); 
                    clickDelay.current =false;
                }
            }
        );


        if(filpOpenTimeLineScrollInitialSetting.current == false){
            document.querySelectorAll(`.${styles.description}`).forEach((description)=>{
                description.querySelectorAll(`.${styles.descriptionViewBox}`).forEach((element)=>{
                    gsap.from(element,{
                        opacity:0,
                        duration:0.4,
                        scrollTrigger: {
                            trigger: element,
                            scroller:description,
                            start:'center bottom',
                            toggleActions: 'play none none reverse'
                        },
                    });
                });
            });
            filpOpenTimeLineScrollInitialSetting.current = true;
        }
    };

    
    /* 스크롤용 함수 생성 */
    function handlerScrollView(e:any, eventType:string, target:string){
        let descriptionElement:any = null; 
        let scrollTarget:any=null;
        console.log(target);
        if(eventType=="normal"){
            descriptionElement = (((e.target as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
            console.log(descriptionElement);

            scrollTarget = 
                ((descriptionElement.querySelectorAll(`[data-feature="${target}"]`))[0] as HTMLElement).offsetTop;


            if(descriptionElement && scrollTarget){
                descriptionElement.scrollTo({
                    top:scrollTarget,
                    behavior:"smooth"
                });
            }
        }
        else{
            descriptionElement = ((((e.target as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement)).querySelectorAll(`[data-scrollgroup="description"]`)[0] as HTMLElement;
            scrollTarget = 
                ((descriptionElement.querySelectorAll(`[data-scroll="${eventType}"]`))[0] as HTMLElement).offsetTop;
            if(descriptionElement){
                descriptionElement.scrollTo({
                    top:scrollTarget,
                    behavior:"smooth"
                });
            }
        }
    }
    


    

    /* PROJECT 카드 플립 */
    function gridFilp(element:string){
        if(clickDelay.current == true){
            return;
        }
        if(containerSecondBrowserRef.current){
            /* 애니메이션 끊김 방지로 pointer Event 설정 */
            containerSecondBrowserRef.current.style.pointerEvents="none";
        }
        clickDelay.current = true;

        const state:any = Flip.getState(document.querySelectorAll(`[data-grid-card-group]`));

        if(element!= "NORMAL"){
            (document.querySelectorAll(`[data-grid-card-group]`) as NodeListOf<HTMLElement>).forEach((html)=>{
                if(html.getAttribute("data-grid-card-group") == element){
                    html.setAttribute("data-view","true");
                }
                else if((html.getAttribute("data-grid-card-group") != element)){
                    html.setAttribute("data-view","false");
                }
            });            
        }
        else{
            (document.querySelectorAll(`[data-grid-card-group]`) as NodeListOf<HTMLElement>).forEach((html)=>{
                html.setAttribute("data-view","true");
            });
        }

        Flip.from(state,{
            duration:0.5,
            ease: 'power1.inOut',
            stagger:0.3,
            onComplete:()=>{
                gsap.set
                if(containerSecondBrowserRef.current){
                    containerSecondBrowserRef.current.style.pointerEvents="auto";
                }
                clickDelay.current = false;
            }
        });
    };


    /* Rotation 카드 애니메이션 설정 */
    useEffect(()=>{
        const axis:any = document.querySelector(`.${styles.cardRotationAxis}`);
        const card:HTMLDivElement[] = gsap.utils.toArray(`.${styles.cardRotationSubAxis}`);

        function setup() {
            if(axis && card){
                const radius =400;
                const axisCenter = axis.offsetHeight / 2;
                const total = card.length;
                const slice = (Math.PI*2) / total;
                card.forEach((element, index, array) => {
                    const angle = (index+1-array.length) * slice;
                    const x = axisCenter - radius * Math.cos(angle);
                    const y = axisCenter + radius * Math.sin(angle);
                    gsap.set(element, {
                        xPercent: -50,
                        yPercent: -50,
                        x: x,
                        y: y,
                        rotation: (-angle) + "_rad",
                    });

                    
                });
            }
        }
        setup();

        
        gsap.to(`.${styles.cardRotationAxis}`, {
            rotate: "+=360",
            ease: "none",
            repeat:-1,
            duration: card.length*10,
        });
        

    })



    const subTitleSubjectRef = useRef<any>(null);
    const subTitleDescriptionRef = useRef<any>(null);
    const subTitleClickDelay = useRef<boolean>(false);

    function personalityHandler(id:string){
        if(subTitleClickDelay.current == true){
            return;
        };
        subTitleClickDelay.current = true;
        const index:number = Number(id);

        if(subTitleSubjectRef.current){
            subTitleSubjectRef.current.innerText =
            PERSONALITY_VARIABLE[index]['title'];
        }
        if(subTitleDescriptionRef.current){
            subTitleDescriptionRef.current.innerHTML='';
            for(const array in PERSONALITY_VARIABLE[index]['description']){
                subTitleDescriptionRef.current.innerHTML += PERSONALITY_VARIABLE[index]['description'][array];
                subTitleDescriptionRef.current.innerHTML += "<br/><br/>";
            }
        }
        if(subTitleDescriptionRef.current){
            const words = SplitText.create(subTitleDescriptionRef.current, { type: "words, lines" });
            const timeline:gsap.core.Timeline = gsap.timeline();


            timeline.from(subTitleSubjectRef.current, {
                opacity: 0,
                duration: 1, 
                ease: "bounce",
                scale:"random(1,0.5)"
            });

            timeline.from(words.words, {
                opacity: 0,
                duration: 1, 
                ease: "bounce",
                scale:"random(2,0.5)",
                stagger: 0.05,
                onComplete:()=>{
                    subTitleClickDelay.current = false;
                }
            });
        }
        
    }





    return (
        <div className={styles.layout}>
            {/* Project 소개용 창 */}
            <span className={styles.mainTitle}>INTRODUCE</span>
            <div className={styles.containerFirst} ref={containerFirstRef}>
                <div className={styles.statusbar}>
                    <div/>
                    <div/>
                    <div/>
                    <span>INTRODUCE.EXE</span>
                </div>

                <div className={styles.profile} ref={profileRef}>
                    <img src="./images/profile/profile.jpg" ref={profileImageRef}/>
                    <div className={styles.link}>
                        <a href="https://github.com/minsehong" target="_blank"><img src="./icons/github-icon.svg" ref={profileGithubIconRef}/></a> 
                        <a href="mailto:rebellia@naver.com" target="_blank"><img src="./icons/mail-icon.svg" ref={profileMailIconRef}/></a> 
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

                <div className={styles.introduction} ref={introductionRef}>   
                    <div className={styles.card}>
                        <img src="./images/backgrounds/education.jpg" className={styles.cardImage}/>
                        <div className={styles.title} ref={cardFirstTitleRef}>
                            TIMELINE
                        </div>
                        <div className={styles.descriptionTimeline}>
                            <div className={styles.box}>
                                <span className={styles.timeline}>2016.03</span><br/>
                                수원대학교 입학<span className={styles.sub}>미디어SW학과</span>
                            </div>
                            <div className={styles.box}>
                                <span className={styles.timeline}>2018.04 ~ 2020.01</span><br/>
                                해군 입대<span className={styles.sub}>전산병</span>
                            </div>
                            <div className={styles.box}>
                                <span className={styles.timeline}>2023.08</span><br/>
                                수원대학교 졸업<span className={styles.sub}>미디어SW학과</span>
                            </div>
                            <div className={styles.box}>
                                <span className={styles.timeline}>2023.08 ~ 2024.04</span><br/>
                                웹서비스 개발자 교육 수료<span className={styles.sub}>한국ICT기술협회</span>
                            </div>
                            <div className={styles.box}>
                                <span className={styles.timeline}>2024.06 ~ 2024.12</span><br/>
                                작당연구소<span className={styles.sub}>웹 개발 인턴</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="./images/backgrounds/skills.jpg" className={styles.cardImage}/>
                        <div className={styles.title} ref={cardSecondTitleRef}>
                            SKILLS
                        </div>

                        <div className={styles.descriptionSkillsButton}>
                            <button onClick={()=>{skillsLibraryActive("FRONTEND");}}>
                                FRONTEND
                            </button>
                            <button onClick={()=>{skillsLibraryActive("BACKEND");}}>
                                BACKEND
                            </button>
                            <button onClick={()=>{skillsLibraryActive("LIBRARY");}}>
                                LIBRARY
                            </button>
                        </div>

                        <div className={styles.descriptionSkills}>
                            <div className={styles.container}>
                                {skillsViewState}
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="./images/backgrounds/hobby.jpg" className={styles.cardImage}/>
                        <div className={styles.title} ref={cardThirdTitleRef}>
                            HOBBY
                        </div>
                        <div className={styles.descriptionHobbys}>
                            <div className={styles.container}>
                                {hobbysView.current}
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.title} ref={cardFourthTitleRef}>
                        <img src="./images/backgrounds/null.jpg" className={styles.cardImage}/>
                            PLANS
                        </div>
                    </div>

                    
                </div>
            </div>

            {/* Project 창 */}
            <span className={styles.mainTitle}>PROJECTS</span>
            <div className={styles.containerSecond} ref={containerSecondRef}>
                <div className={styles.statusbar}>
                    <div/>
                    <div/>
                    <div/>
                    <span>PROJECTS.EXE</span>
                </div>

                <div className={styles.containerSecondBrowserButton}>
                    <div onClick={()=>gridFilp("NORMAL")}>
                        전체 보기
                    </div>
                    <div onClick={()=>gridFilp("개인 프로젝트")}>
                        개인프로젝트
                    </div>
                    <div onClick={()=>gridFilp("팀 프로젝트")}>
                        팀프로젝트
                    </div>
                </div>

                <div className={styles.containerSecondBrowser} ref={containerSecondBrowserRef}>
                    {projectViewState}
                </div>
            </div>
        
            <div className={styles.containerThird}>
                <div className={styles.containerThirdContainer}>
                    <span className={styles.subTitle}>PERSONALITY</span>
                    
                    <div className={styles.subTitleSubject} ref={subTitleSubjectRef}>
                        MY PERSONALITY
                    </div>
                    <div className={styles.subTitleDescription} ref={subTitleDescriptionRef}>
                        카드를 클릭하면 해당 성격에 대해서 설명이 나옵니다.
                    </div>

                    <div className={styles.cardRotationAxis}>
                        {
                            Object.entries(PERSONALITY_VARIABLE).map(([id, {title, image}])=>(
                                <div className={styles.cardRotationSubAxis} key={id} onClick={()=>personalityHandler(id)}>
                                    <div className={styles.cardRotationSubAxisBox}>
                                        <img src={`./images/personality/${image}`}/>
                                        <div className={styles.certificationTitle}>
                                            {title}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }



                    </div>
                </div>
            </div>

        </div>
    );
}
