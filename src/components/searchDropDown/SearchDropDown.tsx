import React from 'react';
import './searchDropDown.css';

interface SearchDropDownProps {
  propertyData: PropertyData[];
  searchQuery: string;
  onSuggestionClick: (suggestion: string) => void;
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

const SearchDropDown: React.FC<SearchDropDownProps> = ({ searchQuery, propertyData, onSuggestionClick }) => {
  // Generate suggestions based on property addresses
  const generateSuggestions = () => {
    // Filter properties based on the search query
    const filteredProperties = propertyData.filter(property =>
      property.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Extract unique addresses from filtered properties
    const addresses = filteredProperties.map(property => property.address);

    // Return unique addresses as suggestions
    return Array.from(new Set(addresses));
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
