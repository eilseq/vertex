import Token from '#/ui/token';

export default function Loading({ params }: { params: { id: string } }) {
  return (
    <>
      <div>loading</div>
      <Token hash={params?.id} />
    </>
  );
}
