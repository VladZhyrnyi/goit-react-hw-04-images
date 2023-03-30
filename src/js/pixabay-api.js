const API_KEY = '33612276-ad71642198adbedbb6cf9f47f';
const ENDPOINT = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&orientation=horizontal`;


async function fetchImages(query, page = 1, perPage = 12) {
  const URL = `${ENDPOINT}&q=${query}&page=${page}&per_page=${perPage}`;

  try {
    const response = await fetch(URL)

    if (!response.ok) {
      throw new Error('Ooops.');
    }

    const data = await response.json();
    
    return data;
  }
  catch (error) {
    return error.message;
  }
}

const api = {
  fetchImages,
}

export default api;

