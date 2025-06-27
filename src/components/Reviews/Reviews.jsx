import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import humanImage from "../../assets/reviewsHuman.png";

// icons
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useTheme } from "@mui/material";

const reviewsData = [
  {
    name: "Ahmed Hridoy",
    stars: 4.5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Sarah Tanveer",
    stars: 3.0,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Liam Carter",
    stars: 5.0,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Emily Zhang",
    stars: 4.0,
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Jamal Thompson",
    stars: 2.5,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Nina Patel",
    stars: 3.5,
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Carlos Rivera",
    stars: 4.0,
    avatar: "https://i.pravatar.cc/150?img=7",
  },
];

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  const activeReview = reviewsData[currentIndex];

  const leftHandler = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  const rightHandler = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ alignItems: "left", position: "relative", py: "6rem" }}>
        {/* body */}
        <Grid container>
          <Grid item size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
            <Typography sx={{ fontWeight: 600 }} variant="h3">
              What Our Customers About Us saying
            </Typography>
            <Typography variant="body2" sx={{ my: 2, color: "#555555" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularis
            </Typography>
            {/* review stars */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {activeReview.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="read-only"
                  value={activeReview.stars}
                  precision={0.5}
                  readOnly
                />
                <Box sx={{ display: "flex", gap: 2 }}>
                  <IconButton
                    onClick={leftHandler}
                    size="large"
                    sx={{
                      bgcolor: "success.main",
                      color: "#fff",
                      "&:hover": { bgcolor: "success.dark" },
                    }}
                  >
                    <KeyboardArrowLeftIcon />
                  </IconButton>
                  <IconButton
                    onClick={rightHandler}
                    size="large"
                    sx={{
                      bgcolor: "success.main",
                      color: "#fff",
                      "&:hover": { bgcolor: "success.dark" },
                    }}
                  >
                    <ChevronRightIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            display={{ xs: "none", md: "block" }}
            size={{ xs: 12, md: 6 }}
            sx={{ textAlign: "center", position: "relative" }}
          >
            <Box component="img" src={humanImage} sx={{ width: "70%" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                background: "#fff",
                boxShadow: "0 1px 8px rgba(199, 199, 199, 0.27)",
                py: 1,
                px: 3,
                borderRadius: 2,
                width: "fit-content",
                position: "absolute",
                bottom: 0,
                left: "10%",
              }}
            >
              <Rating
                size="small"
                name="read-only"
                value={activeReview.stars}
                precision={0.5}
                readOnly
              />
              <AvatarGroup
                total={10}
                sx={{
                  "& .MuiAvatar-root": {
                    width: 24,
                    height: 24,
                    fontSize: 12,
                  },
                }}
              >
                {reviewsData.map((each, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <Avatar
                      alt={each.name}
                      src={each.avatar}
                      sx={{
                        border: isActive
                          ? `2px solid ${theme.palette.success.main}!important`
                          : "2px solid transparent!important",
                        transition: "border 0.3s",
                      }}
                    />
                  );
                })}
              </AvatarGroup>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Reviews;
