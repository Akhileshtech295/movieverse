//API Calls
import axios from "axios";

const API_KEY =

"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODM4MTk3MmMyMzVmZTZiZjczOGIzZjVjODcxZTljZiIsIm5iZiI6MTc0MzUwMjI0Ni4yNTIsInN1YiI6IjY3ZWJiYmE2OWJiMjk1ZDZlYThiZjVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dwu2KhA2fIn1BZUzjWwJysDN9rucKLuPz_KYqVUhQCg ";


const BASE_URL = "https://api.themoviedb.org/3/";

export const  fetchTrendingMovies = async () => {
    //https://api.themoviedb.org/3/trending/movie/week

    const response = await axios.get (`${BASE_URL}/trending/movie/week`, {
        headers:{
           Authorization: `Bearer ${API_KEY}`, 
        },
    });

    return response.data;
};


export const fetchMovies = async (quey) =>{
     const response = await axios.get(`${BASE_URL}/search/movie`, {
          params:{query: query},
        headers:{
            Authorization:`Bearer ${API_KEY}`,
        },
    });

    return response.data;
};