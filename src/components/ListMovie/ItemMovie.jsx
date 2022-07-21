import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ItemMovie({ url, movieId, title }) {
  const navigate = useNavigate();
  const handleOnClickCard = () => {
    console.log("ini movie id", movieId);
    navigate(`../movie/${movieId}`);
  };
  return (
    <Card sx={{ Width: "300px" }}>
      <CardActionArea onClick={() => handleOnClickCard()}>
        <CardMedia component="img" image={url} alt={title} />
      </CardActionArea>
    </Card>
  );
}
