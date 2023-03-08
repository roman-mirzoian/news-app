import React from "react";
import "../styles/globals.css";

import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

async function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return <div>Homepage</div>;
}

export default Homepage;
