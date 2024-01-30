import React, { useState } from "react";
import Logo from "../../ui/logo/Logo";
import { X } from "lucide-react";
import { search3 } from "../../assets";
import {
  SearchDropDown,
} from "../../components/index";
import { useNavigate } from "react-router-dom";
import propertyData from "../../components/data/data.json";
import "./searchPage.css";

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  // const [clickedSuggestion, setClickedSuggestion] = useState('');

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = event.target.value;
    setSearchQuery(query);
    setShowSuggestions(query.trim() !== "");
  };

  const onSuggestionClick = (suggestion: string) => {
    // setClickedSuggestion(suggestion);
    console.log('suggestion',suggestion)
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    navigate("/propertyList");
  };

  const clearSearch = () => {
    setSearchQuery("");
    // setClickedSuggestion("");
    setShowSuggestions(false);
  };

  return (
    <div className="searchPage">
      <div className="searchDiv">
        <Logo />
        <div className="search">
          <div className="searchBar">
            <img src={search3} alt="" className="searchIcon" />
            <input
              type="text"
              placeholder="Search Property, Suburb, City"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            {searchQuery && <X onClick={clearSearch} className="clearBtn" />}
          </div>
          {showSuggestions && (
            <SearchDropDown
              propertyData={propertyData}
              searchQuery={searchQuery}
              onSuggestionClick={onSuggestionClick}
            />
          )}
        </div>
      </div>
      {/* <PropertyList propertyData={propertyData} clickedSuggestion={clickedSuggestion} /> */}
      {/* <BottomNavbar /> */}
    </div>
  );
};

export default SearchPage;
