import { CircularProgress, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, signInReq } from "../config/firebase";

export default function Login() {
  const navigate = useNavigate();
  const [user, isLoading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorHandling, setErrorHandling] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    signInReq(email, password);
  };
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
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Typography
                variant="h5"
                color="text.primary"
                align="center"
                sx={{ margin: "25px" }}
              >
                Halaman Login
              </Typography>
              <TextField
                autoComplete="email"
                required
                fullWidth
                variant="filled"
                label="EMAIL"
                type="email"
                color="secondary"
                sx={{
                  border: "1px solid #FFFFFF",
                  borderRadius: "4px",
                  "& label": { color: "#ffff" },
                }}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <TextField
                required
                fullWidth
                variant="filled"
                label="PASSWORD"
                type="password"
                color="secondary"
                autoComplete="current-password"
                sx={{
                  mt: 2,
                  border: "1px solid #FFFFFF",
                  borderRadius: "4px",
                  "& label": { color: "#ffff" },
                }}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 4,
                  height: "56px",
                }}
              >
                Login
              </Button>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-end"
              >
                <Link
                  sx={{ my: "5px" }}
                  color="text.primary"
                  component="button"
                  variant="body1"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Registrasi
                </Link>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
