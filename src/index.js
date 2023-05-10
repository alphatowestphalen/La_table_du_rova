import React, { createContext } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";


render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
