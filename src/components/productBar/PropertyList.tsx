import React, { useState, useEffect } from "react";
import {
  BedIcon,
  BathIcon,
  CarFrontIcon,
  Move3DIcon,
  HomeIcon,
  Heart,
} from "lucide-react";
import "./propertyList.css";

interface PropertyListProps {
  propertyData: PropertyData[];
  searchQuery: string;
}

interface PropertyData {
  address: string;
  image: string;
  details: {
    beds: number;
    baths: number;
    carSpaces: number;
    area: {
      total: number;
      unit: string;
    };
    homeArea: {
      total: number;
      unit: string;
    };
  };
  additionalDetails: {
    listedForSale: string;
    lastSold: string;
    ownersDetails: string;
    propertyStatus: string;
  };
  wishlisted: boolean;
}

const PropertyList: React.FC<PropertyListProps> = ({
  propertyData,
  searchQuery,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filteredProperties, setFilteredProperties] = useState<PropertyData[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Filter properties based on the search query
    const filtered = propertyData.filter(property =>
      property.address.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProperties(filtered);
  }, [searchQuery, propertyData]);

  const toggleWishlist = (index: number) => {
    const updatedProperties = [...filteredProperties];
    updatedProperties[index].wishlisted = !updatedProperties[index].wishlisted;
    setFilteredProperties(updatedProperties);
  };

  return (
    <div className="propertyList">
      {filteredProperties.map((property: PropertyData, index: number) => (
        <div className="property" key={index}>
          <div className="propertyImage">
            <img src={property.image} alt="" />
          </div>
          <div className="propertyData">
            <button
              type="button"
              className="wishListBtn"
              onClick={() => toggleWishlist(index)}
            >
              {property.wishlisted ? (
                <Heart fill="#fff" className="heartIcon" />
              ) : (
                "Add to Wishlist"
              )}
            </button>
            <h1>
              {windowWidth < 496
                ? property.address.toUpperCase().substring(0, 20) + "..."
                : property.address.toUpperCase()}
            </h1>
            <div className="propertyDetails">
              <ul>
                <li>
                  <BedIcon className="propertyIcon" />
                  <span>{property.details.beds}</span>
                </li>
                <li>
                  <BathIcon className="propertyIcon" />
                  <span>{property.details.baths}</span>
                </li>
                <li>
                  <CarFrontIcon className="propertyIcon" />
                  <span>{property.details.carSpaces}</span>
                </li>
                <li>
                  <Move3DIcon className="propertyIcon" />
                  <span>
                    {property.details.area.total}{" "}
                    <span>{property.details.area.unit}</span>
                  </span>
                </li>
                <li>
                  <HomeIcon className="propertyIcon" />
                  <span>
                    {property.details.homeArea.total}{" "}
                    <span>{property.details.homeArea.unit}</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="propertyAdditional">
              <ul>
                <li>
                  Listed for sale{" "}
                  <span>{property.additionalDetails.listedForSale}</span>
                </li>
                <li>
                  Last sold <span>{property.additionalDetails.lastSold}</span>
                </li>
                <li>
                  Owner's details{" "}
                  <span>{property.additionalDetails.ownersDetails}</span>
                </li>
                <li>
                  Property Status{" "}
                  <span>{property.additionalDetails.propertyStatus}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
