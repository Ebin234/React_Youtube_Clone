import React from 'react';
import SearchResults from './SearchResults';

function SearchResultsContainer() {
  return (
    <div className="ml-60 mt-28 bg-black h-[calc(100vh-111px)] w-full fixed top-0 left-0 pl-3 pt-4 flex overflow-y-scroll scrollbar-hide">
      <SearchResults />
    </div>
  )
}

export default SearchResultsContainer
