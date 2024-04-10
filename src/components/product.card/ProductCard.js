import React, { useEffect } from "react";
import { Container } from "./product.card.styles";
import { useNavigate } from "react-router-dom";
import observer from "../../utils/observer";

const ProductCard = ({ productName, productImg, productType }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const anime = document.querySelectorAll(".anime");
    observer(Object.values(anime));
  }, []);

  return (
    <Container className="anime" $productName={productName} data-move="zoom-out" onClick={() => { navigate(`/products/${productType}`) }}>
      {/* PRODUCT IMAGE CONTAINER */}
      <div className="product-image-container">
        <img className="card-product-img" src={productImg} alt="product-img" />
      </div>
    </Container>
  );
};

export default ProductCard;