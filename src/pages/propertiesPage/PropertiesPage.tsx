import React from 'react'
import { PropertyList , Navbar } from '../../components/index'
import { filters } from '../../assets';
import "./propertiesPage.css";
const PropertiesPage: React.FC = () => {
  return (
    <div className="propertyPage">
      <Navbar/>
      <div className="filtersBtn">
        <img src={filters} alt="" />
        <span>Filters</span>
      </div>
    <PropertyList/>
    </div>
  )
}

export default PropertiesPage