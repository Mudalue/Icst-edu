import React from "react";
import { style } from "./style";

const Card = ({ image, name, thumbnail }) => {
  return (
    <>
      <div className="card" style={style.container}>
        <img
          src={image}
          class="card-img-top img-fluid"
          alt={thumbnail}
          style={style.image}
        />
        <div className="card-body" style={style.body}>
          <h5 className="card-title" style={style.header}>
            {name}
          </h5>
       
            <span className="p-0 m-0 g-0" style={{fontSize: 10}}>Not available</span>
            <span className="p-0 m-0 g-0" style={{fontSize: 10}}>Not available</span>
      
          <div
            className="d-flex justify-content-between align-content-center"
            style={{ borderTop: "1px solid #000", paddingTop: 18 }}
          >
            <span style={style.link} className="text-danger">
              Details
            </span>
            <span style={style.centerLink} className="text-warning">
              Wishlist
            </span>
            <span style={style.link} className="text-success">
              Buy
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
