import TokenService from '../services/token-service';
import config from '../config';

const MovieApiService ={
  postReview(movie_id, text, rating){
    console.log('Type of movie id:',typeof movie_id);
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        movie_id,
        rating,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default MovieApiService;