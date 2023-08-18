import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import SearchDropDown from './SearchDropDown/searchDropDown'

export default function SearchField() {

    const [searchHistry, setSearchHistory] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const showDroper = () => {
        setSearchHistory(true)
    }
    const closeDroper = () => {
        setSearchHistory(false)
        setSearchInput('')
    }

    return (
        <div className='flex flex-col gap-2'>
            <div className='w-[360px] h-[45px] border border-1 border-primary hidden md:flex items-center gap-2 '>
                <FontAwesomeIcon icon={faSearch} className='absolute ml-2 text-midT text-gray-400' />
                <input
                    className='w-full border-none outline-none pl-8'
                    placeholder='Search'
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                        showDroper()

                    }}
                />
                <FontAwesomeIcon icon={faClose} className={`${searchHistry ? 'flex' : 'hidden'} text-midT mr-2 text-midT text-gray-400 cursor-pointer`}
                    onClick={closeDroper}
                />

            </div>
            {
                searchHistry ? 
                <FontAwesomeIcon icon={faClose} onClick={closeDroper}   className='text-largeT md:hidden cursor-pointer'  />:
                <FontAwesomeIcon onClick={showDroper} icon={faSearch} className='text-largeT md:hidden cursor-pointer' />
            }
            <SearchDropDown isVisible={searchHistry} />
        </div>
    )
}
