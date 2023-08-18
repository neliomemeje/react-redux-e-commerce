import React, { useEffect } from "react";
import priceTag from "../priceTag.png";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeProduct,
  addSingleProductToCart,
} from "../redux/actions/ProductActions";

const ProductDetails = () => {
  const { singleProduct } = useSelector((state) => state.allProducts);
  const { image, title, price, description, inCart } = singleProduct;

  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );

    const data = await response.json();
    dispatch(selectedProduct(data));
  };

  useEffect(() => {
    fetchProduct();
    return () => dispatch(removeProduct());
  }, [productId]);

  return (
    <div className="container my-5">
      {Object.keys(singleProduct).length === 0 ? (
        <h5 className="text-center">Loading...</h5>
      ) : (
        <div className="row mx-auto">
          <div className="col-10 col-md-6 col-lg-6 mx-auto mb-3">
            <img
              src={image}
              alt={title}
              className="img-fluid"
              style={{ height: "28rem", width: "28rem" }}
            />
          </div>
          <div className="col-10 col-md-6 col-lg-6 mx-auto cart-info">
            <h1 className="mb-4 text-title">{title}</h1>
            <h5>
              <img src={priceTag} alt="price" />
              <span className="text-info fst-italic">$ {price}</span>
            </h5>
            <p>{description}</p>

            <div className="d-flex align-items-center my-4">
              <Link to="/">
                <button className="btn btn-primary text-capitalize me-3">
                  back to store
                </button>
              </Link>

              <button
                disabled={inCart ? true : false}
                onClick={() => dispatch(addSingleProductToCart())}
                className="text-capitalize border-0 btn btn-light"
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
      )}
    </div>
  );
};

export default ProductDetails;
