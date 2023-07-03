import React, { useEffect, useState } from "react";

import "./home.css";
import axios from "axios";
import Index from "../sidebar/Index";
import Navbar from "../navbar/Navbar";
import Section from "../section/Section";

function Home() {
  const URL = "https://apimocha.com/chapters/list";
  const [apidata, setApidata] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setApidata(response.data.data.node_tree);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="homecontainer">
      <Index apidata={apidata} />
      <div className="aside">
        <Navbar />
        <Section apidata={apidata} />
      </div>
    </div>
  );
}

export default Home;
