import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
function MovieCard({ el }) {
  return (
    <Link to={`/trailer/${el.name}`}>
    <div className="card">
      <img src={el.posterurl} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4>{el.name}</h4>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactStars
          count={5}
          size={24}
          activeColor="red"
          edit={false}
          value={el.rating}
        />
      </div>
      ,
    </div>
    </Link>
  );
}

export default MovieCard;
