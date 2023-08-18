import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { count } = useSelector((state) => state.allProducts);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-dark mx-auto">
      <Link to="/">
        <img src={logo} alt="logo" className="logo pb-2" />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="home ms-3 ">
            Home
          </Link>
        </li>
      </ul>
      <div className="ms-auto d-flex justify-content-center me-4">
        <div className="mb-0 count">
          <p className="text-center">{count}</p>
        </div>
        <Link to="/cart">
          <button className="btn btn-light xl border-0">
            <i className="fas fa-cart-plus fa-2x text-primary" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
