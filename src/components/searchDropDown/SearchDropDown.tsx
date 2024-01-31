import React from 'react';
import './searchDropDown.css';

interface SearchDropDownProps {
  propertyData: PropertyData[];
  searchQuery: string;
  onSuggestionClick: (suggestion: string) => void;
}

interface PropertyData {
  address: string;
  city: string;
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

const SearchDropDown: React.FC<SearchDropDownProps> = ({ searchQuery, propertyData, onSuggestionClick }) => {
  const generateSuggestions = () => {
    const filteredProperties = propertyData.filter(property =>
      property.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const cities = filteredProperties.map(property => property.city);
    const uniqueAddresses = Array.from(new Set(cities)).slice(0, 8);
  
    return uniqueAddresses;
  };

  const suggestions = generateSuggestions();

  return (
    <div className='searchDropDown'>
      <div className="results">
        {suggestions.map((suggestion, index) => (
          <div className='result' key={index} onClick={() => onSuggestionClick(suggestion)}>
            <p>{suggestion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDropDown;
