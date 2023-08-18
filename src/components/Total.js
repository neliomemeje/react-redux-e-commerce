import React from "react";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/actions/ProductActions";
import { useDispatch } from "react-redux";

const Total = ({ checkItems }) => {
  const dispatch = useDispatch();
  let totals = checkItems.reduce((total, item) => total + item.subTotal, 0);
  totals = parseFloat(totals.toFixed(2));

  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-11 col-md-8 col-lg-8">
            <hr />
          </div>
          <div className="col-10 col-md-6 col-lg-7 d-flex justify-content-between align-items-center">
            <h5>
              Total: $ <strong className="fst-italic">{totals}</strong>
            </h5>
            <Link to="/">
              <button className="btn btn-secondary text-capitalize">
                <i className="fa-solid fa-arrow-left text-white me-1" />
                continue shopping
              </button>
            </Link>
          </div>
          <div className="col-12 text-center my-5">
            <button
              onClick={() => dispatch(clearCart())}
              className="btn btn-danger text-capitalize"
            >
              clear cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Total;
