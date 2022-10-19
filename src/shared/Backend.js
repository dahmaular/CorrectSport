import axios from 'axios';

// const baseUrl = 'https://correctscore.herokuapp.com/api';
const baseUrl = 'https://371e-102-89-34-93.ngrok.io/api';

export async function GET_SERVICE(endpoint) {
  const url = baseUrl + endpoint;
//   const headers = await setHeaders();

  try {
    return await axios.get(url);
  } catch (error) {
    return error.response;
  }
}

