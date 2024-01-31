import React, { useState, useEffect } from "react";
import { Heart, BedIcon, BathIcon, CarFrontIcon, Move3DIcon, HomeIcon } from "lucide-react";
import "./propertyList.css";
import { setWishlistCount, setWishlist, setSearchResult } from "../../store/property";
import { RootState } from '../../store/rootReducer';
import { useDispatch, useSelector } from "react-redux";
interface PropertyListProps {
  propertyData: PropertyData[];
  type: string;
}

interface PropertyData {
  id: number;
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

const PropertyList: React.FC<PropertyListProps> = ({propertyData,type}) => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

const wishlist = useSelector((state: RootState) => state.propertyData.wishlist);
const toggleWishlist = (property: PropertyData) => {
  if (type !== "wishlist") {
    const updatedPropertyData = propertyData.map((item: PropertyData) => {
      if (item.id === property.id) {
        return { ...item, wishlisted: !item.wishlisted };
      }
      return item;
    });
    dispatch(setSearchResult(updatedPropertyData));
    // Assuming propertyData is managed by Redux, dispatch an action to update the state
    // dispatch(updatePropertyData(updatedPropertyData));
    console.log(updatedPropertyData, 'updatedPropertyData');
  } 
  const propertyIndex = wishlist.findIndex((item:PropertyData) => item.id === property.id);
  
  if (propertyIndex !== -1) {
      const filteredProperty = wishlist.filter((item:PropertyData) => item.id !== property.id);
      dispatch(setWishlistCount(filteredProperty.length));
      dispatch(setWishlist(filteredProperty));
  } else {
    const updatedProperties = [...wishlist, { ...property, wishlisted: true }];
      console.log(updatedProperties,'updatedProperties')
      dispatch(setWishlistCount(updatedProperties.length));
      dispatch(setWishlist(updatedProperties));
  }
};
console.log(propertyData,'propertyData')
const itemsToRender = type === "wishlist" ? wishlist : propertyData;

  return (
    <div className="propertyList">
      {itemsToRender.map((property: PropertyData, index: number) => (
        <div className="property" key={index}>
          <div className="propertyImage">
            <img src={property.image} alt="" />
          </div>
          <div className="propertyData">
            <button
              type="button"
              className="wishListBtn"
              onClick={() => toggleWishlist(property)}
            >
              {property.wishlisted ? (
                <Heart fill="#fff" className="heartIcon" />
              ) : (
                <span className="wishListBtnText">Add to Wishlist</span>
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
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
