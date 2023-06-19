'use client';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export function ArrowButton({ className }: { className?: string }) {
  const route = useRouter();

  return (
    <Button
      auto
      className={className}
      color="primary"
      onClick={() => {
        route.replace('https://www.fxhash.xyz/generative/20720');
      }}
    >
      {'nfts >'}
    </Button>
  );
}
