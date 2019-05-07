import TokenService from '../services/token-service';
import config from '../config';

const MovieApiService ={
  postReview(movie_id, text, rating){
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
  },
  getReviews(){
    return fetch(`${config.API_ENDPOINT}/reviews`,{
      method: 'GET',
      headers:{
        'content-type':'applization/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res=>
      (!res.ok) 
        ? res.json().then(e=>Promise.reject(e)) 
        : res.json() 
    )
  },
  getUserReviews(user_id){
    return fetch(`${config.API_ENDPOINT}/users/${user_id}/reviews`,{
      method: 'GET',
      headers:{
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res=>
        (!res.ok) 
          ? res.json().then(e=>Promise.reject(e))
          : res.json() 
      )
  },

  getMovieReviews(movie_id){
    return fetch(`${config.API_ENDPOINT}/reviews/${movie_id}`,{
      method: 'GET',
      headers:{
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res=>
        (!res.ok) 
          ? res.json().then(e=>Promise.reject(e)) 
          : res.json() 
      )
  }
}

export default MovieApiService;