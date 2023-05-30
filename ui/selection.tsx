'use client';

import type { TokenMetadata } from '../lib/colleciton';

import { useRouter } from 'next/navigation';
import { useSelectedLayoutSegment } from 'next/navigation';

import { Dropdown, useTheme } from '@nextui-org/react';
import { Key, useEffect, useMemo, useState } from 'react';

const DEFAULT_HASH = 'ooDefault';

export default function Selection({
  collection,
}: {
  collection: TokenMetadata[];
}) {
  const route = useRouter();
  const segment = useSelectedLayoutSegment();

  const { theme } = useTheme();

  const [selected, setSelected] = useState<Iterable<Key>>(
    new Set<Key>([DEFAULT_HASH]),
  );

  const selectedValue = useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected],
  );

  useEffect(() => {
    if (selectedValue === DEFAULT_HASH) return;
    route.push(`/collection/${selectedValue}`);
  }, [route, selectedValue]);

  return (
    <Dropdown
      onClose={() => {
        const tokenInfoDOM = window.document.getElementById('token-info');
        tokenInfoDOM?.classList.remove('hidden');
      }}
    >
      <Dropdown.Button
        flat
        css={{
          fontSize: '0.6rem',
        }}
        onPress={() => {
          const tokenInfoDOM = window.document.getElementById('token-info');
          tokenInfoDOM?.classList.add('hidden');
        }}
        onDoubleClick={(e) => {
          e?.preventDefault();
        }}
      >
        {segment || DEFAULT_HASH}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="collection tokens"
        selectionMode="single"
        disallowEmptySelection
        selectedKeys={selected}
        onSelectionChange={setSelected}
        variant="solid"
        css={{
          $$dropdownMenuWidth: 'fit-content',
          width: 'fit-content',
          height: '80vh',
          textAlign: 'center',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
        containerCss={{
          fontSize: '0.6rem',
          border: 'none',
          mixBlendMode: 'difference',
          background: theme?.colors.primaryLight,
        }}
      >
        {collection.map((token: TokenMetadata) => {
          return (
            <Dropdown.Item
              key={token.iterationHash}
              css={{
                hover: {
                  mixBlendMode: 'color-dodge',
                },
              }}
            >
              {token.iterationHash}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
