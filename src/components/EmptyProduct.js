import React from "react";

const EmptyProduct = ({ filteredProducts, searchField }) => {
  if (filteredProducts.length === 0 && searchField) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-5">
            <h3 className="text-capitalize text-center">
              "no match for the searched product"
            </h3>
          </div>
        </div>
      </div>
    );
  }
};

export default EmptyProduct;
