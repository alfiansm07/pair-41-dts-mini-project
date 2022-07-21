import { Box, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff4d" }}>
      <Container sx={{ py: 4 }}>
        <Stack>
          <Box>
            <Grid container>
              <Grid item xs={6} md={3}>
                <Stack>
                  <Typography variant="body">Audio and Subtitles</Typography>
                  <Typography variant="body">Media Center</Typography>
                  <Typography variant="body">Security</Typography>
                  <Typography variant="body">Contact us</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack>
                  <Typography variant="body">Audio Description</Typography>
                  <Typography variant="body">Investor Relations</Typography>
                  <Typography variant="body">Legal Provisions</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack>
                  <Typography variant="body">Help center</Typography>
                  <Typography variant="body">Jobs</Typography>
                  <Typography variant="body">Cookie Preferences</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack>
                  <Typography variant="body">Gift Cards</Typography>
                  <Typography variant="body">Terms of Use</Typography>
                  <Typography variant="body">Corporate Information</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Typography align="center" variant="body" pt={3}>
            © Build With ❤️ 2022
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
