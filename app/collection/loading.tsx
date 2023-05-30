import Token from '#/ui/token';

const DEFAULT_HASH = 'ooDefault';

export default function Loading() {
  return (
    <>
      <div>loading</div>
      <Token hash={DEFAULT_HASH} />
    </>
  );
}
