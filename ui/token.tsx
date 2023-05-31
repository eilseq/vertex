'use client';

import React from 'react';

const Token = ({ seed }: { seed?: string }) => {
  return (
    <iframe
      className="fixed left-0 right-0 top-0 -z-10 h-screen w-screen"
      src={seed ? `/v0/index.html?seed=${seed}` : `/v0/index.html`}
    />
  );
};

export default Token;
