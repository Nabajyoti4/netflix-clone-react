import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  /**
   * function to fetch movie trailer
   * @param movie
   */
  const handleClick = (movie) => {
    console.log(movie.name);
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          settrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                  "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
              )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* title */}

        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>

        {/** div > 2 buttons */}
        <div className="banner__buttons">
          <button onClick={() => handleClick(movie)} className="banner__button">
            Play
          </button>
          <button className="banner__button">My List</button>
        </div>
        {/** description */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
      <div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
      </div>
    </header>
  );
}

export default Banner;
