'use client';

import React, { useEffect } from 'react';

import { DEFAULT_SEED_LEGACY } from '#/lib/constants';

export default function Page() {
  useEffect(() => {
    const iframe = document.getElementById(
      'vertex-iframe',
    ) as HTMLIFrameElement;
    iframe.src = `/v0/index.html?fxhash=${DEFAULT_SEED_LEGACY}`;
  }, []);

  return <></>;
}
