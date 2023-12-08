import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleclick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  console.log(scrollLeft);
  return (
    <div className="row">
      <h1 className="row_title">{title}</h1>
      <>
        <div className="row_container">
          <div className="row_posters" ref={scrollContainerRef}>
            {movies &&
              movies.map((movie) => (
                <img
                  onClick={() => handleclick(movie)}
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              ))}
          </div>
          <button className="row_button row_button_left" onClick={scrollLeft}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className="row_button row_button_right" onClick={scrollRight}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <div style={{ padding: "40px" }}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </>
    </div>
  );
}

export default Row;
