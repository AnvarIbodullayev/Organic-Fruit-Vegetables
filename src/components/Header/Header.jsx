import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import leafsImage from "../../assets/header1.png";
import fruitsImage from "../../assets/header2.png";
// icons
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import TableChartIcon from "@mui/icons-material/TableChart";

const tabInfo = [
  {
    icon: PersonIcon,
    numb: 30,
    title: "User Or der",
  },
  {
    icon: StarIcon,
    numb: 20,
    title: "Reviews(4.8)",
  },
  {
    icon: TableChartIcon,
    numb: 300,
    title: "Items",
  },
];

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        position: "relative",
        height: "88vh",
        backgroundColor: "#F3FBF8",
      }}
    >
      <Typography sx={{ mt: 10, fontWeight: 600 }} variant="h2">
        Organic Fruit & Vegetables
      </Typography>
      <Box sx={{ width: "40%", textAlign: "center" }}>
        <Typography variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley...
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body2" sx={{ mr: 2 }}>
          Order Now
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
      {/* img */}
      <Box
        component="img"
        src={leafsImage}
        sx={{ position: "absolute", top: "-2rem", left: 0, width: "32rem" }}
      />
      <Box
        component="img"
        src={fruitsImage}
        sx={{
          position: "absolute",
          bottom: 0,
          left: "15%",
          width: "40rem",
          display: { xs: "none", md: "block" },
        }}
      />
      {/* tabs */}
      <Box
        sx={{
          position: "absolute",
          bottom: "2rem",
          right: "6rem",
          display: { xs: "none", md: "block" },
        }}
      >
        {tabInfo.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 4,
                backgroundColor: "#fff",
                mt: 2,
              }}
            >
              <item.icon
                sx={{
                  fontSize: "2rem",
                  color: `${
                    item.icon === StarIcon ? "#FCBF29" : "success.main"
                  }`,
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h4">{item.numb}K</Typography>
                {item.title}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Header;
