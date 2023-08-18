import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ProfileResult from './Results/profileResult';

export default function SearchDropDown({ isVisible, searchResult, onClose }) {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  const truncateCompanyName = (name) => {
    return name && name.length > 20 ? name.substring(0, 20) + '...' : name;
  };
  const fetchData = (value) => {
    fetch(import.meta.env.VITE_SEARCH_PARTIALLY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: value })
    })
    .then((response) => response.json())
    .then((json) => {
      console.log('API response:', json); // Log the API response
      const searchResults = json.map(item => item);
      console.log('Search results:', searchResults); // Log the processed search results
      setResults(searchResults);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
  };

  return (
    <div className={`${isVisible ? 'flex': 'hidden'} gap-4 absolute top-[65px] left-0 md:left-auto  md:w-[360px]  w-full h-[400px] overflow-y-scroll bg-white drop-shadow-xl z-30 flex flex-col p-2 `}>
      <div className='w-full min-h-[45px]  md:hidden    border border-1 border-primary flex items-center gap-2 '>
        <FontAwesomeIcon  icon={faSearch}  className='absolute ml-2 text-midT text-gray-400'   />
        <input 
          className='w-full border-none outline-none pl-8' 
          placeholder='Search'
          value={searchInput}
          onChange={(e) => {
            const inputValue = e.target.value;
            setSearchInput(inputValue);
            fetchData(inputValue);
          }}
        />
      </div>

      <div className='w-full flex flex-col gap-2'>
        <p className='text-smallP text-gray-400' >Results</p>
        <div className='w-full flex flex-col'>
          {searchResult?.map((item, index) => (
            <ProfileResult 
              key={index}
              _id={item.doc_id}
              Uid={item.Uid}
              companyName={truncateCompanyName(item.party?.businessname)}
            />
          ))}
          {results?.map((item, index) => (
            <ProfileResult 
              key={index}
              _id={item.doc_id}
              Uid={item.party?.Uid}
              companyName={item.party?.businessname}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
