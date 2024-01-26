import './SearchPage.css'
import Logo from '../../ui/logo/Logo'
import { Search } from 'lucide-react'
import SearchDropDown from '../../components/searchDropDown/SearchDropDown'


const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className="searchDiv">
        <Logo />
        <div className="search">
          <div className="searchBar">
            <Search className='searchIcon' />
            <input type="text" placeholder='Search Property, Suburb, City' />
          </div>
          <SearchDropDown />
        </div>
      </div>
    </div>
  )
}

export default SearchPage
