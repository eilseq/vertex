'use client';

import React, { useEffect } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  useEffect(() => {
    const iframe = document.getElementById(
      'vertex-iframe',
    ) as HTMLIFrameElement;
    const message = {
      type: 'updateSeed',
      seed: params.id,
    };
    iframe.contentWindow?.postMessage(message, '*');
  }, [params.id]);

  return <></>;
}
