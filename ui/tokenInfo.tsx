'use client';

import React from 'react';

import { TokenMetadata } from '#/lib/colleciton';
import { useSelectedLayoutSegments } from 'next/navigation';

import { DEFAULT_SEED_LEGACY } from '#/lib/constants';

export default function TokenInfo({
  collection,
  className,
}: {
  collection: TokenMetadata[];
  className?: string;
}) {
  const segments = useSelectedLayoutSegments();
  const id = segments[1] || DEFAULT_SEED_LEGACY;
  const token = collection.find(
    (token: TokenMetadata) => token.iterationHash === id,
  );

  return (
    <>
      {token && (
        <div id="token-info" className={className}>
          <div className="animate-pulse text-xs delay-300">
            <div className="flex justify-between">
              <span className="animate-fadeToOpacityFromLeft">createdAt:</span>{' '}
              <span className="animate-fadeToOpacityFromRight">
                {token?.createdAt}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="animate-fadeToOpacityFromLeft">minter:</span>{' '}
              <a
                href={'https://tzkt.io/' + token?.minterAdress}
                target="_blank"
                rel="noreferrer"
                className="animate-fadeToOpacityFromRight underline"
              >
                {token?.minterAdress}
              </a>
            </div>
            <div className="flex justify-between">
              <span className="animate-fadeToOpacityFromLeft">owner:</span>{' '}
              <a
                href={'https://tzkt.io/' + token?.ownerAddress}
                target="_blank"
                rel="noreferrer"
                className="animate-fadeToOpacityFromRight underline"
              >
                {token?.ownerAddress}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
