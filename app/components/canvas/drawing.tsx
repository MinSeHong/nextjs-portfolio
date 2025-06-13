'use client';
import { useEffect, useRef } from 'react';
import styles from './drawing.module.scss';
import Matter from 'matter-js';

import MatterWrap from 'matter-wrap';
Matter.use(MatterWrap); // 등록

function drawGrid(canvas: HTMLCanvasElement, spacing: number = 10) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = canvas.width;
  const height = canvas.height;

  ctx.save();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.font = '8px Arial';
  ctx.fillStyle = 'black';

  // 세로
  for (let x = 0; x <= width; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
    ctx.fillText(String(x), x + 2, 10); // 좌표
  }

  // 가로
  for (let y = 0; y <= height; y += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
    ctx.fillText(String(y), 2, y - 2); // 좌표
  }

  ctx.restore();
}

const Drawing: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;

    const height = canvasRef.current.getBoundingClientRect().height;
    const width = canvasRef.current.getBoundingClientRect().width;
    const dpi = window.devicePixelRatio || 1;

    const render = Matter.Render.create({
      element: canvasRef.current!,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: '#fafafa',
        showCollisions: false,
        showVelocity: false,
        pixelRatio: dpi,
      },
    });

    const mouse = Matter.Mouse.create(render.canvas);

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: true,
        },
      },
    });

    Matter.Mouse.setScale(mouse, {
      x: 1 / dpi,
      y: 1 / dpi,
    });

    Matter.Events.on(mouseConstraint, 'mousedown', (event) => {
      const mousePosition = event.mouse.position;
      const scale = Matter.Common.random(2 * 5, 4 * 5);

      const newBody = Matter.Bodies.rectangle(
        mousePosition.x,
        mousePosition.y,
        scale,
        scale,
        {
          frictionAir: Matter.Common.random(0.01, 0.1),
          chamfer: { radius: 5 },
          render: {
            strokeStyle: 'black',
            lineWidth: 2,
          },
        }
      );

      Matter.Composite.add(world, newBody);

      for (const body of Matter.Composite.allBodies(world)) {
        body.plugin.wrap = {
          min: { x: 0, y: 0 },
          max: { x: width, y: height },
        };
      }
    });

    let lastTime = performance.now();
    let frameCount = 0;
    let fps = 0;

    Matter.Events.on(render, 'afterRender', () => {
      const ctx = render.context;
      const now = performance.now();
      const delta = now - lastTime;

      frameCount++;
      if (delta >= 1000) {
        fps = Math.round((frameCount * 1000) / delta);
        frameCount = 0;
        lastTime = now;
      }

      drawGrid(render.canvas, 50); // 기존 그리드
      ctx.save();
      ctx.fillStyle = 'black';
      ctx.font = '12px monospace';
      ctx.fillText(`FPS: ${fps}`, 10, 20);
      ctx.restore();
    });

    Matter.Engine.run(engine);
    Matter.Render.run(render);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Composite.clear(engine.world, false);

      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div className={styles.canvas} ref={canvasRef}></div>;
};

export default Drawing;
