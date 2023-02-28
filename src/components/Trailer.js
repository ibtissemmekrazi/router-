import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';

function Trailer({movies}) {
    const params=useParams();
    console.log(params);
    const movie=movies.filter((el)=>el.name== params.name)[0];
    console.log(movie);

  return (
    <div>
    <h1>{movie.name}</h1>
    <p>{movie.description}</p>
    <img src={movie.posterurl}/>
    <ReactStars
          count={5}
          size={24}
          activeColor="red"
          edit={false}
          value={movie.rating}
        />
    </div>
  )
}

export default Trailer