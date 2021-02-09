import React from 'react'

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <input type="search" placeholder="search robots" onChange={searchChange} />
  )
}

export default SearchBox
