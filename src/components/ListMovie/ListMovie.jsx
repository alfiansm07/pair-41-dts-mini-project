import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Client from "../../apis/Client";
import ItemMovie from "./ItemMovie";

import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "./listmovie.css";
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
        <Typography mb="20px" variant="h4">
          {typeList}
        </Typography>

        <Swiper
          breakpoints={{
            // when window width is >= 640px
            370: {
              width: 370,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            900: {
              width: 900,
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={4}
          navigation
          // pagination={{ clickable: true }}
        >
          {movieList.map((movieList) => {
            const { poster_path, id, title } = movieList;
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
