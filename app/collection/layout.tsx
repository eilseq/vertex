import { getGenerationsFromTokenId } from '#/lib/colleciton';

import { ArrowButton } from '#/ui/arrowButton';

import Selection from '#/ui/selection';
import TokenInfo from '#/ui/tokenInfo';

const TOKEN_ID = 20720;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collection = await getGenerationsFromTokenId(TOKEN_ID);
  return (
    <>
      <nav className="my-6=8 fixed left-0 right-0 top-8 flex w-screen items-center justify-center mix-blend-difference">
        <Selection collection={collection} />
      </nav>
      {children}
      <TokenInfo
        collection={collection}
        className="hover:animate-pulseSlow ml-[-1%] mt-[148%] w-[364px] font-thin text-purple-600 mix-blend-difference delay-300"
      />
      <footer className="fixed bottom-0 left-0 mx-10 my-6 w-11/12 text-purple-400 mix-blend-difference">
        <div className="flex items-center justify-between">
          <div className="animate-pulseSlow flex w-fit flex-col text-xs font-semibold">
            <p>VERTEX</p>
            <p>Generative Art Collection</p>
            <p>
              by{' '}
              <a
                className="underline"
                href="https://eilseq.github.io"
                rel="noreferrer"
                target="_blank"
              >
                EILSEQ
              </a>
            </p>
          </div>
          <ArrowButton direction="right" className="hover:animate-pulseFast" />
        </div>
      </footer>
    </>
  );
}
