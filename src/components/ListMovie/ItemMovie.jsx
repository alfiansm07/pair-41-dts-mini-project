import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function ItemMovie({ url, movieId, title }) {
  const navigate = useNavigate();
  const handleOnClickCard = () => {
    console.log("ini movie id", movieId);
    navigate(`/movie/${movieId}`, { replace: true });
  };
  return (
    <Card sx={{ minWidth: "150px", maxHeight: "300px" }}>
      <CardActionArea onClick={() => handleOnClickCard()}>
        <CardMedia component="img" image={url} alt={title} />
      </CardActionArea>
    </Card>
  );
}
