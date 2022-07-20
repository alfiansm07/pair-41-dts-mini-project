import React from "react";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

const Home = () => {
  const navigate = useNavigate();
  const HandleClick = (props) => {
    navigate(`/movie/${props}`);
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          variant="text"
          color="primary"
          onClick={() => HandleClick(616037)}
        >
          Button ke Detail Page
        </Button>
        <Button
          variant="text"
          color="primary"
          onClick={() => HandleClick(453987)}
        >
          Button Jika tidak ada page
        </Button>
      </Box>
    </>
  );
};

export default Home;
