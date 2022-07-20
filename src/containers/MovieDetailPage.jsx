import { Box, Button, Card, CardMedia, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Client from "../apis/Client";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { baseUrlForMovie } from "../config/firebase";
const MovieDetailPage = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let { movieId } = useParams();
  useEffect(() => {
    const fetchDataMovie = async () => {
      try {
        setIsLoading(true);
        const result = await Client.get(`/movie/${movieId}`);
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
  }, [movieId, navigate]);

  return (
    <Layout>
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
    </Layout>
  );
};

export default MovieDetailPage;
