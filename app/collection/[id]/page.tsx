'use client';

import Token from '#/ui/token';

export default function Page({ params }: { params: { id: string } }) {
  return <Token hash={params.id} />;
}
