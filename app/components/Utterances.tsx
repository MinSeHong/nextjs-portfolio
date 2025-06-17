import { useEffect, useRef } from 'react';

const Utterances = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'minsehong/minsehong.github.io'); //
    script.setAttribute('issue-term', 'title'); // page별로 이슈 연결
    script.setAttribute('label', 'comment');
    script.setAttribute('theme', 'github-light'); // 테마 (github-dark 등도 가능)
    script.crossOrigin = 'anonymous';
    script.async = true;

    if (containerRef.current) {
      // 중복 로드 방지
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div>
      <div ref={containerRef} />
    </div>
  );
};

export default Utterances;
