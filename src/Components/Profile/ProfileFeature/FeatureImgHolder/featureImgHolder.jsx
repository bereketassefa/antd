import React, { useState } from 'react';
import ProfileFeature from '../../../../assets/img/ProfileFeature1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useCookies } from 'react-cookie';

export default function FeatureImgHolder({ data }) {
    const [cookies] = useCookies(['user']);
    const [isLoading] =useState(false)

    if (isLoading) {
        return (
          <div className="w-full flex justify-start">
            <div className="w-full flex justify-end ">
              {/* Skeleton for Feature Image */}
              <div className="h-[100px] md:h-[150px] w-full bg-gray-300 animate-pulse"></div>
              
              {/* Skeleton for Edit Icon */}
              <div className="absolute w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        );
      }
    
      return (
        <div className='w-full flex justify-start '>
          <div className='w-full flex justify-end '>
            <img src={ProfileFeature} alt="" className='h-[100px] w-full md:h-[150px]' />
            {
              data && data.account && data.account[0] &&
              data.account[0]._id === cookies.user._id && (
                <div className='absolute '>
                  <FontAwesomeIcon icon={faEdit} className='text-white p-2 cursor-pointer' />
                </div>
              )
            }
          </div>
        </div>
      );
    }