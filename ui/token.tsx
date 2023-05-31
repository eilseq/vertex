'use client';

import React, { useRef, useEffect } from 'react';

const Token = React.memo(({ seed }: { seed?: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = seed
        ? `/v0/index.html?seed=${seed}`
        : `/v0/index.html`;
    }
  }, [seed]);

  return (
    <iframe
      ref={iframeRef}
      className="fixed left-0 right-0 top-0 -z-10 h-screen w-screen"
    />
  );
});

Token.displayName = 'Token'; // Set the display name

export default Token;
