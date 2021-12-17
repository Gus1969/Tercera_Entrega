import React from "react";
import './SearchInput.css'

const SearchInput = () => {
  return (
    <div>
      <form className="inputFather cf">
        <input className='input' type="text" />
        <button className='button' type="submit">Search</button>
    </form>
    </div>
  );
};

export default SearchInput;
