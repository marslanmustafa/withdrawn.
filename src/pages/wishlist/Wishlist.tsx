import React from 'react'
import { PropertyList , Navbar } from '../../components/index'
import { filters } from '../../assets';
import { useSelector } from "react-redux";
import { RootState } from '../../store/rootReducer';
import "./wishlist.css";
const Wishlist: React.FC = () => {
  const wishlist = useSelector((state: RootState) => state.propertyData.wishlist);
  return (
    <div className="wishlistPage">
      <Navbar/>
      <div className="filtersBtn">
        <img src={filters} alt="" />
        <span>Filters</span>
      </div>
    <PropertyList propertyData = {wishlist} type="wishlist"/>
    </div>
  )
}

export default Wishlist