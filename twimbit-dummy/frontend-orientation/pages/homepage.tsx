// pages/index.js

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import CharacterInfoCard from 'frontend-orientation/sharedComponents/characterInfoCard';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', // GraphQL endpoint for the Rick and Morty API
  cache: new InMemoryCache(),
});

export default function Home({ characters }: any) {
  return (
    <CharacterInfoCard characters={characters}/>
  );
}

// is essential to await for the promise from api to avoid react child error
export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        characters {
          results {
            id
            name
          }
        }
      }
    `,
  });

  return {
    props: {
      characters: data.characters.results,
    },
  };
}
