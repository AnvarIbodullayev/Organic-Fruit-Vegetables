import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import leafsImage from "../../assets/header1.png";
import groupImage from "../../assets/group.png";

// icons
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { alpha, useTheme } from "@mui/material";

function Explor() {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: "#F3FBF8", position: "relative", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{ textAlign: "center", p: 4 }}
          >
            <Box component="img" src={groupImage} sx={{ width: "100%" }} />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }} sx={{ textAlign: "left", p: 4 }}>
            <Typography sx={{ fontWeight: 600 }} variant="h2">
              Explor Our Special Items
            </Typography>
            <Box sx={{ textAlign: "left", my: 2 }}>
              <Typography variant="body2" sx={{ color: "#555555" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer...
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2" sx={{ mr: 2 }}>
                Explor Now
              </Typography>
              <IconButton
                size="large"
                sx={{
                  bgcolor: "success.main",
                  color: "#fff",
                  "&:hover": { bgcolor: "success.dark" },
                }}
              >
                <ArrowRightAltIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        {/* img varctor */}
        <Box
          component="img"
          src={leafsImage}
          sx={{
            display: {xs: "none", md: "block"},
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "30%"
          }}
        />
      </Container>
    </Box>
  );
}

export default Explor;
