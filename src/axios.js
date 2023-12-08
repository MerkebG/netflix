import axios from "axios";
import React from "react";

//665a90cc0093e3a7c94dc4f21e5caa31
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
