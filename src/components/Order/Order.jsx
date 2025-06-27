import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import appleStore from "../../assets/appleStore.png";
import googlePlay from "../../assets/googlePlay.png";
import phoneImage from "../../assets/phone.png";


// icons
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { alpha, useTheme } from "@mui/material";

function Order() {
  const theme = useTheme();

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            size={{ xs: 12, md: 5 }}
            sx={{ textAlign: "center", p: 4, position: "relative" }}
          >
            <Box component="img" src={phoneImage} sx={{ width: "50%" }} />
            <Box
              component="img"
              src={phoneImage}
              sx={{
                width: "40%",
                position: "absolute",
                top: "10%",
                left: "22%",
                zIndex: -1,
              }}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 7 }} sx={{ textAlign: "left", p: 4 }}>
            <Button
              sx={{
                borderRadius: 20,
                boxShadow: 0,
                color: "#000",
                backgroundColor: alpha(theme.palette.success.main, 0.08),
                "&:hover": {
                  backgroundColor: theme.palette.success.main,
                  color: "#fff",
                },
              }}
              variant="contained"
            >
              Regestar Now
            </Button>
            <Typography sx={{ fontWeight: 600, mt: 3 }} variant="h3">
              Simple Way To Order Your Organic Fruit
            </Typography>
            <Box sx={{ textAlign: "left", my: 2 }}>
              <Typography variant="body2" sx={{ color: "#555555" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer...
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 4 }}>
              <Box component="img" src={appleStore}></Box>
              <Box component="img" src={googlePlay}></Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Order;
