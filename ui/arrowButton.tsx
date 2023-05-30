'use client';

import { Button } from '@nextui-org/react';
import { useTheme } from '@nextui-org/react';

export function ArrowButton({
  className,
  direction,
}: {
  className?: string;
  direction?: 'left' | 'right';
}) {
  return (
    <Button auto className={className} color="primary">
      {'next >'}
    </Button>
  );
}
