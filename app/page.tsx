'use client';
import Introduce from './components/Introduce';
import Intro from './components/Intro';
import Header from './layout/header';

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Introduce />
    </>
  );
}
