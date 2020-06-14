import React, { useState } from "react";
import { useHomeFetch } from "./hooks/useHomeFetch";
import HeroImage from "./elements/HeroImage";
import Spinner from "./elements/Spinner";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import NoImage from "./images/no_image.jpg";

import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";

function Home() {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState("");
  console.log(state);

  if (error) return <div>Ooopssss</div>;
  if (!state.movies[0]) return <Spinner />;

  return (
    <div>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.movies.map((movie) => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
    </div>
  );
}

export default Home;
