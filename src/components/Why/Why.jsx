import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import vectorImage from "../../assets/vector.png";
import humanImage from "../../assets/human.png";

// icons
import MopedIcon from "@mui/icons-material/Moped";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SouthIcon from "@mui/icons-material/South";

import { alpha, useTheme } from "@mui/material";

const tabInfo = [
  {
    icon: MopedIcon,
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Fasted delivery Service",
  },
  {
    icon: FeaturedPlayListIcon,
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Online order Service",
  },
  {
    icon: AccessTimeIcon,
    body: "Lorem Ips um is simply dummy text of the printing and typesetting industry.",
    title: "24/8 Service",
  },
];

function Why() {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Box sx={{ alignItems: "left", position: "relative", py: "6rem" }}>
        <Typography sx={{ fontWeight: 600 }} variant="h2">
          Why We Aer The Best?
        </Typography>
        <Box sx={{ width: "45%", textAlign: "left", my: 2 }}>
          <Typography variant="body2" sx={{ color: "#555555" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley...
          </Typography>
        </Box>
        {/* body */}
        <Grid container>
          <Grid item size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Box sx={{ px: 4 }}>
              {tabInfo.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      mt: 2,
                      py: 3,
                      px: 4,
                      "&:hover": {
                        backgroundColor: alpha(
                          theme.palette.success.main,
                          0.06
                        ),
                        ".iconWrapper": {
                          backgroundColor: "#fff",
                        },
                      },
                    }}
                  >
                    <Box
                      className="iconWrapper"
                      sx={{
                        p: 2,
                        backgroundColor: alpha(
                          theme.palette.success.main,
                          0.04
                        ),
                        borderRadius: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyItems: "center",
                      }}
                    >
                      <item.icon
                        sx={{ fontSize: "2rem", color: "success.main" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: "#555555" }} variant="caption">
                        {" "}
                        {item.body}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
              <IconButton sx={{ mt: 2 }} size="large" color="success">
                <SouthIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            display={{ xs: "none", md: "block" }}
            size={{ xs: 12, md: 6 }}
            sx={{ textAlign: "right" }}
          >
            <Box component="img" src={humanImage} />
          </Grid>
        </Grid>
        {/* img varctor */}
        <Box
          component="img"
          src={vectorImage}
          sx={{
            position: "absolute",
            top: "-4rem",
            right: 0,
            width: "60%",
            zIndex: -1,
          }}
        />
      </Box>
    </Container>
  );
}

export default Why;
