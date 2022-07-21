import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Client from "../../apis/Client";
import ItemMovie from "./ItemMovie";
import Typography from "@mui/material/Typography";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const ListMovie = ({ typeList, url }) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w500";
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const dataMovie = async () => {
      try {
        const result = await Client.get(url);
        setMovieList(result.data.results);
        console.table(result.data.results);
      } catch (error) {}
    };
    dataMovie();
  }, [url]);
  if (!movieList) {
    return (
      <>
        <Container></Container>
      </>
    );
  }
  return (
    <>
      <Container>
        <Typography variant="h4">{typeList}</Typography>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-inactive-color": "#aeaeae",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          }}
        >
          {movieList.map((movieList) => {
            const { backdrop_path, poster_path, id, title } = movieList;
            return (
              <SwiperSlide key={id}>
                <ItemMovie
                  movieId={id}
                  url={`${baseUrlForMovie}${poster_path}`}
                  title={title}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};

export default ListMovie;
