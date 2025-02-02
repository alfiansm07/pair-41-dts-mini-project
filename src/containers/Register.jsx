import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, signUpreq } from "../config/firebase";

export default function Register() {
  const navigate = useNavigate();
  const [user, isLoading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    signUpreq(email, password);
  };
  console.log("ini error auth", error);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (isLoading) {
    return (
      <Box
        sx={{
          backgroundColor: "black",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <>
      <Grid
        container
        sx={{
          background: `url(/images/Login.png)`,
          minHeight: "100vh",
          bgcolor: "black",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vh",
          "&::after": {
            position: "absolute",
            content: '""',
            width: "85%",
            height: "100%",
            top: 0,
            right: 0,
            backgroundImage: `linear-gradient(270.09deg, #000000 59.87%, rgba(217, 217, 217, 0) 99.92%)`,
          },
        }}
      >
        <Grid item xs={false} sm={4} md={7} />
        <Grid item xs={12} sm={8} md={5} bgcolor="black">
          <Box
            sx={{
              position: "relative",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",

              px: 10,
            }}
          >
            <Typography
              variant="h5"
              color="text.primary"
              sx={{ margin: "25px" }}
            >
              Halaman register
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                fullWidth
                variant="filled"
                label="EMAIL"
                type="email"
                color="secondary"
                sx={{
                  border: "1px solid #FFFFFF",
                  borderRadius: "4px",
                }}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="PASSWORD"
                type="password"
                color="secondary"
                sx={{
                  mt: 2,
                  border: "1px solid #FFFFFF",
                  borderRadius: "4px",
                  "@::placeholder": { color: "text.primary" },
                }}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mt: 4,
                  height: "56px",
                }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
