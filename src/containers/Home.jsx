import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import {
  Card,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ListMovie from "../components/ListMovie/ListMovie";
import MovieDetailPage from "./MovieDetailPage";
import Client from "../apis/Client";
import { baseUrlForMovie } from "../config/firebase";
import Loading from "../components/Loading";
import ItemMovie from "../components/ListMovie/ItemMovie";
import Layout from "../components/Layout";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();
  let { movieId } = useParams();

  useEffect(() => {
    const fetchDataMovie = async () => {
      try {
        setIsLoading(true);
        const result = await Client.get(`/movie/438148`);
        setMovie(result.data);
        setIsLoading(false);
        console.log(result.data);
      } catch (error) {
        console.log("err", error);
        setIsLoading(false);
        navigate("*");
      }
    };
    fetchDataMovie();
  }, []);

  const HandleClick = (props) => {
    navigate(`/movie/${props}`);
  };
  return (
    // <>
    //   <Box sx={{ display: "flex", flexDirection: "column" }}>
    //     <Button
    //       variant="text"
    //       color="primary"
    //       onClick={() => HandleClick(616037)}
    //     >
    //       Button ke Detail Page
    //     </Button>
    //     <Button variant="text" color="primary" onClick={() => HandleClick(1)}>
    //       Button Jika tidak ada page
    //     </Button>
    //   </Box>
    // </>
    <Box>
      {isLoading ? (
        <Loading />
      ) : (
        <Box
          sx={{
            // position: "relative",
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(${baseUrlForMovie}/original${movie.backdrop_path})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Container>
            <Grid
              direction={{ xs: "column-reverse", sm: "row" }}
              container
              sx={{
                minHeight: "100vh",
              }}
            >
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                item
                xs={12}
                sm={6}
                sx={{
                  zIndex: "1000",
                }}
                py={{ xs: "30px", md: "5px" }}
              >
                <Stack>
                  <Stack>
                    <Typography fontWeight="700" variant="h4">
                      {movie.title} ({movie.release_date.slice(0, 4)})
                    </Typography>
                    <Box
                      direction="column"
                      sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
                    >
                      <Typography>{movie.release_date}</Typography>
                      <Typography>&#x2022;</Typography>
                      {movie.genres.map((genre) => (
                        <Typography key={genre.id}>{genre.name}, </Typography>
                      ))}
                    </Box>
                  </Stack>
                  <Box>
                    <Typography fontStyle="italic" variant="body">
                      "{movie.tagline}"
                    </Typography>
                    <Typography variant="h5">Description</Typography>
                    <Typography variant="body">{movie.overview}</Typography>
                  </Box>
                  <Stack py="20px" spacing={2} direction="row">
                    <Button
                      variant="contained"
                      // startIcon={<PlayArrow />}
                      size="large"
                      color="secondary"
                    >
                      Play
                    </Button>
                    <Button
                      variant="contained"
                      color="tertiary"
                      // startIcon={<InfoOutlined />}
                      size="large"
                    >
                      More Information
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                py={{ xs: "15px", md: "5px" }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                item
                xs={12}
                sm={6}
                sx={{
                  zIndex: "1000",
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Card
                    sx={{
                      maxWidth: "300px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={`${baseUrlForMovie}/w300${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
      <Container>
        <Grid my="50px">
          <ListMovie
            typeList="Now Playing"
            url={`/movie/now_playing?language=en-US&page=1`}
          />
          <ItemMovie />
        </Grid>
        <Grid>
          <ListMovie
            typeList="Popular"
            url="/movie/popular?language=en-US&page=1"
          />
          <ItemMovie />
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
