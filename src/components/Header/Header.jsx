import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="filter"></div>
      <div className="form">
        <input placeholder="Type your search term" type="text" className="search" />
        <button className="btn">Search</button>
      </div>
    </div>
  );
}

export default Header;
