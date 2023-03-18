import React from 'react';
import SearchResults from './SearchResults';
import { useSelector } from 'react-redux';

function SearchResultsContainer() {
  let isMenuOpen = useSelector((state)=>state.app.isMenuOpen)

  return (
    <div className={"mt-28 bg-black h-[calc(100vh-111px)] w-full fixed top-0 left-0 pl-3 pt-4 flex overflow-y-scroll scrollbar-hide " + (isMenuOpen?"ml-60":"w-full")}>
      <SearchResults />
    </div>
  )
}

export default SearchResultsContainer
