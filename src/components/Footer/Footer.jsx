import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import logoImage from "../../assets/logo.jpg";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import { alpha, useTheme } from "@mui/material";

function Footer() {
  const theme = useTheme();

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item size={{ xs: 6, md: 4 }} sx={{px: 5}}>
            <img src={logoImage} alt="" />
            <Typography variant="body2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer...
            </Typography>
          </Grid>
          <Grid item size={{ xs: 6, md: 2.33 }}>
            <Typography sx={{ fontWeight: 600 }}>Navigation</Typography>
            <List sx={{ textAlign: "left" }}>
              <ListItem sx={{ px: 0 }}>About Us</ListItem>
              <ListItem sx={{ px: 0 }}>Service</ListItem>
              <ListItem sx={{ px: 0 }}>Menu</ListItem>
            </List>
          </Grid>
          <Grid item size={{ xs: 6, md: 2.33 }}>
            <Typography sx={{ fontWeight: 600 }}>Resources</Typography>
            <List sx={{ textAlign: "left" }}>
              <ListItem sx={{ px: 0 }}>Reviews</ListItem>
              <ListItem sx={{ px: 0 }}>Blog</ListItem>
              <ListItem sx={{ px: 0 }}>Update News</ListItem>
            </List>
          </Grid>
          <Grid item size={{ xs: 6, md: 2.33 }}>
            <Typography sx={{ fontWeight: 600 }}>Contact Us</Typography>
            <List sx={{ textAlign: "left" }}>
              <ListItem sx={{ px: 0 }}>Email: oyasim@email.com</ListItem>
            </List>
            <IconButton color="#000">
              <FacebookIcon />
            </IconButton>
            <IconButton color="#000">
              <TwitterIcon />
            </IconButton>
            <IconButton color="#000">
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
