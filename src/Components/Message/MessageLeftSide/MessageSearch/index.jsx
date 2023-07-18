import React from 'react'
import SearchInput from './SearchInput'
import SearchButton from './SearchButton'
import {  faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
export default function MessageSearch() {
  return (
    <>
      <div className='flex flex-row justify-between items-center bg-white mt-2 p-2 space-x-3'>
        <SearchInput 
          placeholder='Search'
          Icon={faSearch}
          InputStyle="w-full border-none outline-none bg-messageTextColorSender"
          IconStyle="text-gray-400"
        />
        <SearchButton
          IconStyle="text-secondary text-[20px] font-bold"
          Icon={faPlus}
          btnStyle="bg-messageTextColorSender border-primary border rounded-full w-[50px] h-[45px]"
        />
        </div> 
    </>
  )
}
