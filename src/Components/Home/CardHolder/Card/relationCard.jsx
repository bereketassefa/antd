import React from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'

export default function RelationCard({id , img, companyName}) {
    return (
        <div className='flex items-center justify-between' key={id}>
            <div className='flex gap-2 items-center'>
                <Avatar
                    img={img}
                />
                <h1 className='text-smallP md:text-midP lg:text-largeP' >{companyName}</h1>
            </div>
        </div>
    )
}
