import React from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'

export default function RelationCard({id , img, companyName}) {
    function getFirstLetter(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase();
    }
    return (
        <div className='flex items-center justify-between' key={id}>
            <div className='flex gap-2 items-center'>
            {
                    img 
                    ? <Avatar img={img} />
                    : <div className="avatar-placeholder">{getFirstLetter(companyName)}</div>
                }
                <h1 className='text-smallP md:text-midP lg:text-largeP' >{companyName}</h1>
            </div>
        </div>
    )
}
