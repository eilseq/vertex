import { request, gql } from 'graphql-request';

export interface TokenMetadata {
  id: string;
  iterationHash: string;
  createdAt: string;
  ownerAddress: string;
  minterAdress: string;
}

interface CollectionItem {
  metadata: Record<string, any>;
  owner: { id: string };
  minter: { id: string };
  createdAt: string;
}

interface Collection {
  generativeToken: {
    entireCollection: CollectionItem[];
  };
}

export const gateway = 'https://gateway.fxhash2.xyz/ipfs/';

export const getGenerationsFromTokenId = async (generativeTokenId: number) => {
  const document = gql`
    query ExampleQuery($generativeTokenId: Float) {
      generativeToken(id: $generativeTokenId) {
        entireCollection {
          metadata
          owner {
            id
          }
          minter {
            id
          }
          createdAt
        }
      }
    }
  `;

  const collection: Collection = await request(
    'https://api.fxhash.xyz/graphql',
    document,
    {
      generativeTokenId,
    },
  );

  const tokens: TokenMetadata[] =
    collection.generativeToken.entireCollection.map(
      (item: CollectionItem, index: number) => {
        const { metadata, owner, minter, createdAt } = item;
        return {
          id: String(index),
          iterationHash: metadata.iterationHash,
          createdAt,
          ownerAddress: owner.id,
          minterAdress: minter.id,
        };
      },
    );

  return tokens;
};
