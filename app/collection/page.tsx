'use client';

import React from 'react';
import Token from '#/ui/token';

const DEFAULT_HASH = 'ooDefault';

export default function Page() {
  return (
    <>
      <Token hash={DEFAULT_HASH} />
    </>
  );
}
