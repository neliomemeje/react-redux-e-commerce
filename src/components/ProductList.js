import React, { useState, useEffect } from "react";
import Product from "./Product";
import SearchBox from "./SearchBox";
import EmptyProduct from "./EmptyProduct";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, setSearchField } from "../redux/actions/ProductActions";

const ProductList = () => {
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  let { products, searchField } = useSelector((state) => state.allProducts);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(setProducts(data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    dispatch(setSearchField(e.target.value));
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchField.toLowerCase());
  });

  if (Loading) {
    return <h5 className="text-center my-5">Loading...</h5>;
  }

  return (
    <>
      <SearchBox handleChange={handleChange} searchField={searchField} />
      <EmptyProduct
        filteredProducts={filteredProducts}
        searchField={searchField}
      />
      {error && <h5 className="text-center mt-5">{error}</h5>}
      <div className="container mb-5">
        <div className="row">
          {filteredProducts.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
