import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import CharacterInfoCard from 'frontend-orientation/sharedComponents/characterInfoCard';
import { client } from 'frontend-orientation/utils/apolloClient';

const GET_ALL_CHARACTERS = gql`
query Characters {
  characters {
    results {
      id
      name
    }
  }
}
`;

export default function Home() {
  const { data,loading,error } = useQuery(GET_ALL_CHARACTERS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  console.log(data)
  return (
    <CharacterInfoCard characters={data.characters.results}/>
  );
}


// is essential to await for the promise from api to avoid react child error
// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//       query Characters {
//         characters {
//           results {
//             id
//             name
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       characters: data.characters.results,
//     },
//   };
// }
