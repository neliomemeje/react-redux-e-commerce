import React from "react";
import { useDispatch } from "react-redux";

import {
  removeItem,
  toggle,
  getChecked,
} from "../redux/actions/ProductActions";

const CartList = ({ id, image, title, count, price, subTotal }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="container mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-10 col-md-6 col-lg-4 d-flex align-items-center">
            <input
              type="checkbox"
              className="checkbox mx-3"
              onChange={(e) => dispatch(getChecked(id, e.target.checked))}
            />
            <div>
              <img
                className="me-2"
                src={image}
                alt={title}
                style={{ width: "7rem", height: "7rem" }}
              />
              <div className=" d-flex align-items-center">
                <button
                  onClick={() => dispatch(toggle(id, "dec"))}
                  className="btn btn-light"
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <p className="mb-0 px-2">
                  <strong>{count}</strong>
                </p>
                <button
                  onClick={() => dispatch(toggle(id, "inc"))}
                  className="btn btn-light"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
            <div>
              <p className="mb-0">{title}</p>
              <p>
                $ <strong>{price}</strong>
              </p>
              <p className="mb-0">
                Subtotal: $ <strong>{subTotal}</strong>
              </p>
            </div>
          </div>
          <div
            className="col-2 col-md-2 col-lg-4 d-flex align-items-center justify-content-center"
            onClick={() => dispatch(removeItem(id))}
          >
            <i className="fa-solid fa-trash fa-2x text-danger"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
