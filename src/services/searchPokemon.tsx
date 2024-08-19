import axios from 'axios';

export const searchPokemon = async () => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=50`
    );
    const result = response.data.results;
    let urls: string[] = [];
    result.forEach((element: { url: string }) => {
      urls.push(element.url);
    });

    return urls;
  } catch (error) {
    console.log(error);
  }
};
