'use client';

import React from 'react';
import Token from '#/ui/token';

const DEFAULT_SEED = 'ooCvei2JsMHA9NWpTcoXcSewHYpVSUogZcZyVGPo8xngFgcsG2x';

export default function Page() {
  return (
    <>
      <Token seed={DEFAULT_SEED} />
    </>
  );
}
