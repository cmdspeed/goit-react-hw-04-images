export default async function fetchQuery(query, page = 1) {
  const API_KEY = '34526750-6567dd272390bb315b269666f';
  const API_URL = 'https://pixabay.com/api/';

  return await fetch(
    `${API_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => response.json());
}
