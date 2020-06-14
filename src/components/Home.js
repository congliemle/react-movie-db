import React, { useState } from "react";

function Home() {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovie = async (endpoint) => {
    setLoading(true);
    setError(false);

    try {
      const result = await (await fetch(endpoint)).json();
    } catch (error) {}
  };

  return <div></div>;
}

export default Home;
