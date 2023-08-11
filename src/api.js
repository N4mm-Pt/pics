import axios from "axios";

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos',{
    headers: {
      Authorization: 'Client-ID a70XZ9uD7xBoDN1xMiNOe72i71H8uKLM8zFNsiCmAag'
    },
    params: {
      query: 'cars'
    }
  });

  return response;
}

export default searchImages;