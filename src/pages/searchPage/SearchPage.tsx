// SearchPage.tsx
import React, { useState } from 'react';
import './searchPage.css';
import Logo from '../../ui/logo/Logo';
import { Search } from 'lucide-react';
import { PropertyList } from '../../components';
import propertyData from '../../components/data/data.json'

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
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
          </div>
          {/* <SearchDropDown searchQuery={searchQuery} /> */}
        </div>
      </div>
      <PropertyList propertyData={propertyData} searchQuery={searchQuery} />
    </div>
  );
};

export default SearchPage;
