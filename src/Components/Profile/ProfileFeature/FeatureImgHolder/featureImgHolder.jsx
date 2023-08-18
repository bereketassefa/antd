import React from 'react'
import ProfileFeature from '../../../../assets/img/ProfileFeature1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPencil } from '@fortawesome/free-solid-svg-icons'
export default function FeatureImgHolder() {
    return (
        <div className='w-full flex justify-start '>
            <div className='w-full flex justify-end '>
                <img src={ProfileFeature} alt="" className='h-[100px] w-full md:h-[150px] ' />
                <div className='absolute '>
                    <FontAwesomeIcon icon={faEdit} className='text-white p-2 cursor-pointer  ' />
                </div>
            </div>
            
            

        </div>
    )
}
