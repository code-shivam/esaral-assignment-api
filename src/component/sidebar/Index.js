import React from "react";
import "./index.css";
import book from "../Photo/book-open.png";

function Index(apidata) {
  return (
    <div className="indexcontainer">
      <div className="insidetext">
        <img src={book} className="bookimage" />
        <h1>Index</h1>
      </div>
      <div className="indexdata">
        {apidata.apidata.map((el) => {
          return <h3>{el.display_name}</h3>;
        })}
      </div>
    </div>
  );
}

export default Index;
