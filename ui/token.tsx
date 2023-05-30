'use client';

import React from 'react';

const Token = ({ hash }: { hash: string }) => {
  return (
    <iframe
      className="fixed left-0 right-0 top-0 -z-10 h-screen w-screen"
      src={`/v0/index.html?fxhash=${hash}`}
    />
  );
};

export default Token;
