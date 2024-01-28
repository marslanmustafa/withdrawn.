import React, { useState } from 'react';
import Logo from '../../ui/logo/Logo';
import { Search, X } from 'lucide-react';
import { SearchDropDown, PropertyList } from '../../components/index';
import propertyData from '../../components/data/data.json';
import './searchPage.css';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [clickedSuggestion, setClickedSuggestion] = useState('');

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    setShowSuggestions(query.trim() !== '');
  };

  const onSuggestionClick = (suggestion: string) => {
    setClickedSuggestion(suggestion);
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setClickedSuggestion('');
    setShowSuggestions(false)
  };

  return (
    <div className='searchPage'>
      <div className="searchDiv">
        <Logo />
        <div className="search">
          <div className="searchBar">
            <Search className='searchIcon' />
            <input
              type="text"
              placeholder='Search Property, Suburb, City'
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            {searchQuery && <X onClick={clearSearch} className='clearBtn' />}
          </div>
          {showSuggestions && <SearchDropDown propertyData={propertyData} searchQuery={searchQuery} onSuggestionClick={onSuggestionClick} />}
        </div>
      </div>
      <PropertyList propertyData={propertyData} clickedSuggestion={clickedSuggestion} />
    </div>
  );
};

export default SearchPage;
