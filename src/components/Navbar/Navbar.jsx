import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(props) {
  const [value, setValue] = useState(props.value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="navbar">
      <div className="form">
        <input
          placeholder="Type your search term"
          onChange={handleChange}
          value={value}
          type="text"
          className="search"
        />
        <Link to={`../movies/${value}`} className="btn">
          Search
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
