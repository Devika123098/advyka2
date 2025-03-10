import React from "react";
import "./PastEvents.css"
import Carousel3D from "./Carousel3D"; 
import iris from "../assets/iris.png"
const Pastevents = () => {
  return (
    <div>
       <h2 style={{ textAlign: "center", color: "white", marginBottom: "10px",marginTop:"10px" }}>
       A Glimpse of Advyka'24</h2>      
      <div className="dec"><img width={700} src={iris} alt="lol" /></div>
      <Carousel3D /> 
    </div>
  );
};

export default Pastevents;