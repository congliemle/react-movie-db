import React, { useState } from "react";
import { useHomeFetch } from "./hooks/useHomeFetch";
import HeroImage from "./elements/HeroImage";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

function Home() {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  console.log(state);

  if (error) return <div>Ooopssss</div>;
  if (loading || !state.movies[0]) return <div>Loading...</div>;

  return (
    <div>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
    </div>
  );
}

export default Home;
