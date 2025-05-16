'use client';
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import styles from "./intro.module.scss";
import { useRef, useEffect} from "react";


export default function Intro() {
    /* Introduce Start: Gsap 애니메이션 시작 */
    const titleFirstLineRef = useRef<HTMLDivElement>(null);
    const titleReactIconRef = useRef<HTMLDivElement>(null);

    const titleSecondLineRef = useRef<HTMLDivElement>(null);
    const titleThirdLineRef = useRef<HTMLDivElement>(null);
    const titleThirdLineRefDescription = useRef<HTMLDivElement>(null);
    const titleFourthLineRef = useRef<HTMLDivElement>(null);
    const titleForuthLineRefDescription = useRef<HTMLDivElement>(null);

    /* title 애니메이션 TimeLine 세팅 */
    const titleTimeLine:gsap.core.Timeline = gsap.timeline({});

    /* Introduce 배경화면 설정 */
    const layoutCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        /* Canvas 세팅 */
        const canvas:HTMLCanvasElement | null = layoutCanvasRef.current;
        let ctx:CanvasRenderingContext2D | null = null;

        interface Star {
            x: number;
            y: number;
            radius: number;
            vx: number;
            vy: number;
        };

        const stars:Star[] = [];
        const mouse:{x:number, y:number} = { x: 0, y: 0 };
        const FPS:number = 120;

        if(canvas){
            ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const x = 60;


            // Push stars to array
            for (let i = 0; i < x; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1 + 1,
                    vx: Math.floor(Math.random() * 50) - 25,
                    vy: Math.floor(Math.random() * 50) - 25
                });
            }
            // Draw the scene 
        }


        function draw() {
            if(ctx && canvas){
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.globalCompositeOperation = "lighter";

                for (let i = 0, x = stars.length; i < x; i++) {
                    const s = stars[i];
                
                    ctx.fillStyle = "black";
                    ctx.beginPath();
                    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.fillStyle = '#111111';
                    ctx.stroke();
                }
            ctx.beginPath();


            for (let i = 0, x = stars.length; i < x; i++) {
                const starI = stars[i];
                ctx.moveTo(starI.x,starI.y); 
                if(distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
                for (let j = 0, x = stars.length; j < x; j++) {
                    const starII = stars[j];
                    if(distance(starI, starII) < 150) {
                        ctx.lineTo(starII.x,starII.y); 
                    }
                }
            }
            ctx.lineWidth = 0.05;
            ctx.strokeStyle = 'gray';
            ctx.stroke();
            }


            /*** */
            function distance( point1:{x: number, y: number}, point2:{x: number, y: number}){
                let xs = 0;
                let ys = 0;
                xs = point2.x - point1.x;
                xs = xs * xs;
                ys = point2.y - point1.y;
                ys = ys * ys;
                return Math.sqrt( xs + ys );
            }
        }



        function update() {
            if(canvas){
                for (let i = 0, x = stars.length; i < x; i++) {
                    const s = stars[i];
                    s.x += s.vx / FPS;
                    s.y += s.vy / FPS;
                    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
                    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
                }
            }
        }

        function tick() {
            draw();
            update();
            requestAnimationFrame(tick);
        }
        tick();


        /* Introduce Start Gsap 실행 JavaScript */
        const titleFirstLineTextSplit = SplitText.create(titleFirstLineRef.current, { type: "chars" });
        const titleSecondLineTextSplit = SplitText.create(titleSecondLineRef.current, { type: "chars" });
        const titleThirdLineTextSplit = SplitText.create(titleThirdLineRef.current, { type: "chars" });
        const titleThirdLineTextDescriptionSplit = SplitText.create(titleThirdLineRefDescription.current, { type: "words, lines" });
        const titleFourthLineTextSplit = SplitText.create(titleFourthLineRef.current, { type: "chars" });
        const titleFourthLineTextDescriptionSplit = SplitText.create(titleForuthLineRefDescription.current, { type: "words, lines" });



        titleTimeLine.from(titleFirstLineTextSplit.chars, {
            y: -100,
            opacity: 0,
            rotation: "random(-160, 160)",
            duration: 0.7, 
            ease: "back",
            stagger: 0.2
        });
    
        titleTimeLine.from(titleReactIconRef.current,{
            x: -100,
            opacity: 0,
            duration: 2,
            onComplete:()=>{/* Gsap TimeLine 끝난 후, 애니메이션 설정정 */
                titleFirstLineTextSplit.chars.forEach((char) => {
                    char.addEventListener("mouseenter", () => {
                        gsap.to(char, {
                        y: "random[-20,-15,15,20]",
                        rotation: -10,
                        duration: 0.4,
                        ease: "ease.in",
                        });
                    });
                    char.addEventListener("mouseleave", () => {
                        gsap.to(char, {
                            y: 0,
                            rotation: 0,
                            duration: 0.4,
                            ease: "ease.out"
                        });
                    });
                    char.classList.add(`${styles.char}`);
                });
            }
        });

        titleTimeLine.from(titleSecondLineTextSplit.chars, {
            opacity: 0,
            duration: 0.7, 
            ease: "bounce",
            stagger: 0.02
        });

        titleTimeLine.from(titleThirdLineTextSplit.chars, {
            opacity: 0,
            duration: 0.7, 
            ease: "bounce",
            stagger: 0.05,
            delay:2
        });

        titleTimeLine.from(titleThirdLineTextDescriptionSplit.words, {
            opacity: 0,
            duration: 1, 
            ease: "bounce",
            scale:"random(2,3)",
            stagger: 0.05
        });

        titleTimeLine.from(titleFourthLineTextSplit.chars, {
            opacity: 0,
            duration: 0.7, 
            ease: "bounce",
            stagger: 0.02
        });

        titleTimeLine.from(titleFourthLineTextDescriptionSplit.words, {
            opacity: 0,
            duration: 1, 
            ease: "bounce",
            scale:"random(2,3)",
            stagger: 0.05
        });
        

    });

    const layoutRef = useRef<HTMLDivElement>(null);
    const initialPostion = useRef<{x:number | null ,y:number | null}>({x:null,y:null});
    const animationFlag = useRef<string>("right");

    /* Mouse에 따라 배경화면 이동 세팅 */
    const handlerMouseMove = (e:React.MouseEvent<HTMLDivElement>) =>{
        if (!layoutRef.current) return;
        if(initialPostion.current.x == null){
            initialPostion.current.x = e.clientX;
            initialPostion.current.y = e.clientY;
        }

        if(initialPostion.current.x > e.clientX && animationFlag.current!= "right"){
            animationFlag.current = "right";
            gsap.to(layoutRef.current, {
                backgroundPositionX:"-=100000",
                backgroundPositionY:"+=100000",
                ease: "none",
                duration:40000,
            });
        }
        else if(initialPostion.current.x < e.clientX && animationFlag.current!= "left"){
            animationFlag.current = "left";
            gsap.to(layoutRef.current, {
                backgroundPositionX:"+=100000",
                backgroundPositionY:"+=100000",
                ease: "none",
                duration:40000,
            });
        }
        initialPostion.current.x = e.clientX;
    };




    return (
        <div className={styles.layout} onMouseMove={(e)=>{handlerMouseMove(e)}} ref={layoutRef}>
            <canvas className={styles.canvas} ref={layoutCanvasRef}/>

            <div className={styles.titleFirstLine} ref={titleFirstLineRef}>
                <span>&lt;</span>DEVELOPER<span>&gt;</span>
                <div className={styles.titleReactIcon} ref={titleReactIconRef}>
                    <img src="./icons/react-logo.svg"/>
                </div>
            </div>

            <div className={styles.titleSecondLine} ref={titleSecondLineRef}>
                안녕하세요. 저는 <span>민세홍</span>입니다.
            </div>

            <div className={styles.titleThirdLine} ref={titleThirdLineRef}>
                마우스를 통해 환상을 추구합니다.
            </div>

            <div className={styles.titleThirdLineDescription} ref={titleThirdLineRefDescription}>
                사용자에게 최고의 경험을 주는 것을 지향합니다.<br/>
                이 웹은 <span className={styles.yellow}>SCSS</span>와 <span className={styles.green}>GSAP</span>을 이용하여 제작했습니다.<br/> 
            </div>

            <div className={styles.titleFourthLine} ref={titleFourthLineRef}>
                앞과 뒤를 모두 추구하는 개발자입니다.
            </div>

            <div className={styles.titleFourthLineDescription} ref={titleForuthLineRefDescription}>
                프론트엔드 뿐만 아니라 백엔드에서도 무한한 성장을 추구합니다.<br/>
                보이는 것에 그치지 않고, 
                <br/>보이지 않는 기능까지 책임지는 개발자가 되고자 합니다.
            </div>

            <div className={styles.button}>
                NEXT
            </div>

        </div>
    );
}
