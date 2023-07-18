import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'

export default function RecommendedRelationCard({id , img, companyName}) {
    return (
        <div className='flex items-center justify-between' key={id}>
            <div className='flex gap-2 items-center'>
                <Avatar
                    img={img}
                />
                <h1 className='text-smallP md:text-midP lg:text-largeP' >{companyName}</h1>
            </div>

            <div className='flex gap-2'>
                <FontAwesomeIcon icon={faUserPlus} className='text-largeP md:text-smallT text-secondary' />                    
            </div>
        </div>
    )
}
