import axios from 'axios';

const url = '/data.json';

export default async function fetchData() {
  return await axios.get(url); 
}
