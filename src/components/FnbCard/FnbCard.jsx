import React from "react";
import "./FnbCard.css";

function FnbCard({ name, description, price, image, onClick }) {
  // Tambahkan properti 'image'
  console.log(
    `Name: ${name}\nDescription: ${description}\nPrice: ${price}\nImage: ${image}`
  );
  return (
    <div className="fnb-card" onClick={() => onClick(name)}>
      <div className="fnb-image-container">
        {" "}
        {/* Container untuk gambar */}
        <img src={image} alt={image} className="fnb-image" />{" "}
        {/* Elemen gambar */}
      </div>
      <div className="fnb-description">
        <h3 className="fnb-title">{name}</h3>
        <p className="fnb-detail">{description}</p>
        <div className="fnb-price">Rp. {price.toLocaleString()}</div>
      </div>
    </div>
  );
}

export default FnbCard;
