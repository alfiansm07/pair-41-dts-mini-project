import React, { useEffect, useState } from "react";
import Client from "../../apis/Client";
const ListMovie = ({ typeList, url }) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
  const [movieList, setMovieList] = useState();
  useEffect(() => {
    const dataMovie = async () => {
      try {
        const result = await Client.get(url);
        setMovieList(result.data.result);
      } catch (error) {}
    };
    dataMovie();
  }, [url]);

  return <div>{typeList}</div>;
};

export default ListMovie;
