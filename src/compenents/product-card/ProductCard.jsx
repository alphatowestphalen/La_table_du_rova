import React from "react";
import "./product-card.css";

const ProductCard = (props) => {
  const { title, imgUrl, role } = props.item;

  return (
    <div className="single__product">
      <div className="product_img">
        <img src={imgUrl} alt="" />
      </div>

      <div className="product__content">
        <div className="rating text-center">
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
        </div>

        <h6>{title}</h6>
        <h6>{role}</h6>
      </div>
    </div>
  );
};

export default ProductCard;
