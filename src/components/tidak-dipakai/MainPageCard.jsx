import React from "react";
import "./MainPageCard.css"; // Import file CSS baru

const MainPageCard = (props) => {
  return (
    <div className={`main-page-card ${props.className}`}>
      <div className="card-image-section">
        <img
          className="card-image"
          alt="imageFifteen"
          src={props?.imagefifteen}
        />
      </div>
      <div className="card-content">
        <p className="card-title">{props?.splitza}</p>
        <p className="card-description">{props?.twotoppingtext}</p>
        <p className="card-price">{props?.pricetext}</p>
      </div>
    </div>
  );
};

MainPageCard.defaultProps = {
  imagefifteen: "images/img_image15.png",
  splitza: "Splitza",
  twotoppingtext: "2 Pilihan topping dalam 1 pizza",
  pricetext: "Rp. 89.999",
};

export default MainPageCard;
