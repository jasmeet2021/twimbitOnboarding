import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import CharacterInfoCard from 'frontend-orientation/sharedComponents/characterInfoCard';
import { client } from 'frontend-orientation/utils/apolloClient';


export default function Home({ characters }: any) {
  return (
    <CharacterInfoCard characters={characters}/>
  );
}


// is essential to await for the promise from api to avoid react child error
export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Characters {
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
