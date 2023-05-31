'use client';

import Token from '#/ui/token';

export default function Page({ params }: { params: { id: string } }) {
  return <Token seed={params.id} />;
}
