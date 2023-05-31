'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const router = useRouter();

  const [ready, setReady] = useState(false);
  const [hover, setHover] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const letTitleSlideIn = () =>
    setTimeout(() => {
      setReady(true);
    }, 800);

  const letTitleBlurOut = () => {
    setLeaving(true);
    setReady(false);
    router.push('/collection');
  };

  useEffect(() => {
    letTitleSlideIn();
  }, []);

  return (
    <>
      <div
        className="space-y-4 text-white mix-blend-difference"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="cursor-pointer" onClick={(e) => letTitleBlurOut()}>
          <div className="text-center text-[100pt] font-bold">
            {!ready && !leaving && <TitleIn />}
            {ready && !leaving && hover && <TitlePulse />}
            {ready && !leaving && !hover && <TitleFlickIn />}
            {leaving && <TitleOut />}
          </div>
        </div>
      </div>
    </>
  );
}

const TitleIn = () => (
  <>
    <h1 className="animate-fadeToOpacityFromLeft delay-1000">VERTEX</h1>
    <h2 className="animate-fadeToOpacityFromRight text-xl delay-700">
      Generative Art Collection
    </h2>
  </>
);

const TitlePulse = () => (
  <>
    <h1 className="animate-sonar text-green-500">VERTEX</h1>
    <h2 className="animate-sonarFast text-xl delay-[200ms]">Start Exploring</h2>
  </>
);

const TitleFlickIn = () => (
  <>
    <h1 className="animate-fastFlicker">VERTEX</h1>
    <h2 className="animate-superFastFlicker text-xl delay-[200ms]">
      Generative Art Collection
    </h2>
  </>
);

const TitleOut = () => (
  <>
    <h1 className="animate-blurOut">VERTEX</h1>
    <h2 className="animate-blurOut text-xl">Generative Art Collection</h2>
  </>
);
