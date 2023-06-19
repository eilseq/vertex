'use client';

import React, { useEffect } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  useEffect(() => {
    const iframe = document.getElementById(
      'vertex-iframe',
    ) as HTMLIFrameElement;
    iframe.src = `/v0/index.html?fxhash=${params.id}`;
  }, [params.id]);

  return <></>;
}
