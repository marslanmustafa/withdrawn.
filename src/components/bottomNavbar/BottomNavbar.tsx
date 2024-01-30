import React from "react";
import { Link } from "react-router-dom";
import "./bottomNavbar.css";
import { search, wishlist } from "../../assets";

const BottomNavbar: React.FC = () => {
  return (
    <div className="bottomNav">
      <div className="bottomIcon">
        <Link to="/search">
          <img src={search} alt="" />
        </Link>
      </div>
      <div className="bottomIcon">
        <Link to="/wishlist">
          <div className="badge">32</div>
          <img src={wishlist} alt="" className="wishlist" />
        </Link>
      </div>
    </div>
  );
};

export default BottomNavbar;
