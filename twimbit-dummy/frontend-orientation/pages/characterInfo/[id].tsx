import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { client } from "frontend-orientation/utils/apolloClient";
import { useRouter } from "next/router";


const GET_CHARACTER_BY_ID = gql`query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        id
      }
      created
    }
  }`;

// ssr fetch
export async function getServerSideProps({params}: any){
    const {id} = params;
    
    try{
        const {data} =  await client.query({
            query: GET_CHARACTER_BY_ID,
            variables: {id: parseInt(id)},
        });
        console.log(data);
        return {
            props: {
                character: data,
            },
        };
    }catch(err: any){
        console.log(err)
        return {
            notFound: true
        }

    }

}


export default function DetailCharacterPage({ character }: any) {
    const router = useRouter();

    if(router.isFallback){
        return <p>SSR character fetch Loading...</p>
    }
    const characterData = character.character;
    return (
      <div>
        <h1>{characterData.id}</h1>
        <p>Name: {characterData.name}</p>
        <p>Status: {characterData.status}</p>
        <p>Species: {characterData.species}</p>
        <p>Type: {characterData.type}</p>
        <p>Gender: {characterData.gender}</p>
        <p>Origin: {characterData.origin.name}</p>
        <p>Location: {characterData.location.name}</p>
      </div>
    );
}