import React, { useState } from "react";
import { Link } from "react-router-dom";
import priceTag from "../priceTag.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/ProductActions";

const Product = ({
  id,
  image,
  price,
  category,
  title,
  description,
  inCart,
}) => {
  const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="col-10 col-md-6 col-lg-3 mx-auto my-5">
      <div className="card">
        <div className="card-info pt-3">
          <Link to={`/products/${id}`}>
            <div className="d-flex justify-content-center">
              <img
                className="card-img-top cart-image pt-2"
                src={image}
                alt={category}
                style={{ width: "10rem", height: "10rem" }}
              />
            </div>
          </Link>
          <div className="card-body">
            <h4 className="card-title text-title">{title}</h4>
            <p className="card-text">
              {readMore ? description : `${description.substring(0, 100)}...`}
              <button
                onClick={() => setReadMore(!readMore)}
                className="text-primary ms-1 border-0 text-capitalize"
              >
                {readMore ? "show less" : "read more"}
              </button>
            </p>
          </div>
        </div>

        <div className="card-footer d-flex justify-content-between border-top-0">
          <h5 className="d-flex align-items-center">
            <img
              src={priceTag}
              alt="price tag"
              style={{ width: "30px", height: "30px" }}
            />
            <span className="text-success me-1">
              <span className="fst-italic text-info">$ {price}</span>
            </span>
          </h5>
          <button
            disabled={inCart ? true : false}
            onClick={() => dispatch(addToCart(id))}
            className="text-capitalize hidden border-0 btn btn-light"
          >
            {inCart ? (
              "in cart"
            ) : (
              <i className="fas fa-cart-plus fa-2x text-primary" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
