import React from "react";

function MovieList(props) {
  const movies = props.movies || [];
  const FavouriteComponent = props.favoriteComponent;

  const isFavorite = (movie) => {
    return props.favorites.some((fav) => fav.imdbID === movie.imdbID);
  };

  return (
    <div className="d-flex flex-wrap">
      {movies.map((movie, index) => (
        <div className="movie-card" key={index}>
          <div className="image-container">
            <img src={movie.Poster} alt="movie" />
            <div
              className="overlay"
              onClick={() => props.handleFavoritesClick(movie)}
            >
              {movie.Title}
              <hr />
              <FavouriteComponent isFavorite={isFavorite(movie)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
