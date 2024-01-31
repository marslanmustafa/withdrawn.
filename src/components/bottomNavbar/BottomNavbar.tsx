import React from "react";
import { Link } from "react-router-dom";
import "./bottomNavbar.css";
import { useLocation } from "react-router-dom";
import { search3, search, wishlist,wishlist3 } from "../../assets";
import { useSelector } from "react-redux";
import { RootState } from '../../store/rootReducer';
const BottomNavbar: React.FC = () => {
  // const wishlistCount = useSelector((state) => state.propertyData.wishlistCount);
  const wishlistCount = useSelector((state: RootState) => state.propertyData.wishlistCount); 
  const location = useLocation();

  return (
    <div className="bottomNav">
      <div className="bottomIcon">
        <Link to="/search">
          <img src={location.pathname === "/search" ? search : search3 } alt="" />
          <span className={location.pathname === "/search" ? "active" : "" } >Search</span>
        </Link>
      </div>
      <div className="bottomIcon">
        <Link to="/wishlist">
          <div className="badge">{wishlistCount}</div>
          <img src={location.pathname === "/wishlist" ? wishlist : wishlist3} alt="" className="wishlist" />
          <span className={location.pathname === "/wishlist" ? "active" : "" } >Wishlist</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavbar;
