import React from 'react'
import { PropertyList , Navbar } from '../../components/index'
import { filters } from '../../assets';
import { useSelector } from "react-redux";
import { RootState } from '../../store/rootReducer';
import "./propertiesPage.css";
// import propertyData from "../../components/data/data.json";
const PropertiesPage: React.FC = () => {
  const searchResult = useSelector((state: RootState) => state.propertyData.searchResult);
  return (
    <div className="propertyPage">
      <Navbar/>
      <div className="filtersBtn">
        <img src={filters} alt="" />
        <span>Filters</span>
      </div>
    <PropertyList propertyData={searchResult} type="searchResult"/>
    </div>
  )
}

export default PropertiesPage