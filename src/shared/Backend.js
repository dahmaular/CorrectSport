import axios from 'axios';

// const baseUrl = 'http://192.168.0.113:9000/api';
const baseUrl = 'https://3f99-154-113-188-49.ngrok.io/api';

export async function GET_SERVICE(endpoint) {
  const url = baseUrl + endpoint;
//   const headers = await setHeaders();

  try {
    return await axios.get(url);
  } catch (error) {
    return error.response;
  }
}

