'use client';

import React, { useEffect } from 'react';

const DEFAULT_SEED = 'ooCvei2JsMHA9NWpTcoXcSewHYpVSUogZcZyVGPo8xngFgcsG2x';

export default function Page() {
  useEffect(() => {
    const iframe = document.getElementById(
      'vertex-iframe',
    ) as HTMLIFrameElement;
    const message = {
      type: 'updateSeed',
      seed: DEFAULT_SEED,
    };
    iframe.contentWindow?.postMessage(message, '*');
  }, []);

  return <></>;
}
