import React from "react";

const SearchBox = ({ searchField, handleChange }) => {
  return (
    <div className="w-50 d-flex justify-content-center mx-auto mt-5">
      <div className="input-group">
        <input
          type="text"
          className="form-control border-info p-2"
          value={searchField}
          onChange={handleChange}
          placeholder="search product"
        />
      </div>
    </div>
  );
};

export default SearchBox;
