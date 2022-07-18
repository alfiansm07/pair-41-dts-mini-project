import React, { useEffect, useState } from "react";
import Client from "../apis/Client";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const MovieDetailPage = () => {
  const navigate = useNavigate();
  const baseUrlForMovie = "https://image.tmdb.org/t/p";
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchDataMovie = async () => {
      try {
        const res = await Client.get(`/movie/438148`);
        setMovie(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchDataMovie();
  }, [""]);

  return <div></div>;
};

export default MovieDetailPage;
