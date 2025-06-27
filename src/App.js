import React from "react";
import Mynavbar from "./components/Mynavbar/Mynavbar.jsx";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.js";
import Header from "./components/Header/Header.jsx";
import Why from "./components/Why/Why.jsx";
import Explor from "./components/Explor/Explor.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Order from "./components/Order/Order.jsx";
import Footer from "./components/Footer/Footer.jsx";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Mynavbar />
      <Header />
      <Why />
      <Explor />
      <Reviews />
      <Order />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
