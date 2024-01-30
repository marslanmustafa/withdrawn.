import React from "react";
import { Link } from "react-router-dom";
import "./bottomNavbar.css";
import { search, wishlist } from "../../assets";
import { useSelector } from "react-redux";
import { RootState } from '../../store/rootReducer';
const BottomNavbar: React.FC = () => {
  // const wishlistCount = useSelector((state) => state.propertyData.wishlistCount);
  const wishlistCount = useSelector((state: RootState) => state.propertyData.wishlistCount);

  return (
    <div className="bottomNav">
      <div className="bottomIcon">
        <Link to="/search">
          <img src={search} alt="" />
          <span>Search</span>
        </Link>
      </div>
      <div className="bottomIcon">
        <Link to="/wishlist">
          <div className="badge">{wishlistCount}</div>
          <img src={wishlist} alt="" className="wishlist" />
          <span>Wishlist</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavbar;
