import React from "react";
import "./section.css";
import view from "../Photo/View.png";
import image1 from "../Photo/image01.png";
import image2 from "../Photo/image02.png";
import Loading from "../loading/loading";

function Section(apidata) {
  function scrollRight(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
      element.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  }

  return (
    <div className="section">
      {apidata?.apidata?.length > 0 ? (
        apidata.apidata.map((item, index) => (
          <div className="seactionContainer">
            <div className="data1">
              <div className="rightside">
                <button className="roundbtn">{index}%</button>
                <div className="seactionheading">
                  <span id={item.node_link_id}>{item.display_name}</span>
                  <span>Lecture : {item.children.length}</span>
                </div>
              </div>

              <div onClick={() => scrollRight(index)} className="leftside">
                {" "}
                <img src={view} className="graterimage" />
              </div>
            </div>
            <div id={index} className="data">
              {item.children
                .map((el, index) => {
                  return { ...el, image: index % 2 == 0 ? image1 : image2 };
                })
                .map((item) => {
                  return (
                    <div className="box">
                      <img src={item.image} className="lectureimage" />
                      <p>{item.display_name}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        ))
      ) : (
        <Loading className="loading" />
      )}
    </div>
  );
}

export default Section;
