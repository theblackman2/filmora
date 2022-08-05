import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const [searchWOrd, setSearchWOrd] = React.useState("");

  const handleChange = (e) => {
    const word = e.target.value;
    setSearchWOrd(word);
  };

  return (
    <div className="header">
      <div className="filter"></div>
      <div className="form">
        <input
          value={searchWOrd}
          onChange={handleChange}
          placeholder="Type your search term"
          type="text"
          className="search"
        />
        <Link className="btn" to={`movies/${searchWOrd}`} >Search</Link>
      </div>
    </div>
  );
}

export default Header;
