import React, { useState } from 'react'
import { Collapse } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import AchivementCard from './AchivementCard/achivementCard';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie'
export default function Achivements() {
    const { id } = useParams();  // Destructure id from useParams
    const [cookies] = useCookies(['user']);
    const isUserIdEqual = cookies.user._id === id;
  return (
    <Collapse
    className='w-full bg-zinc-50'
    items={[
        {
        key: '1',
        label: (
            <div className='w-full flex items-center justify-between'>
                 <h1 className='font-bold text-smallP'>Achivements</h1>
                 {
                    isUserIdEqual && (
                       <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faPencil}   className='text-secondary text-smallT cursor-pointer'/>
                    <FontAwesomeIcon icon={faPlus} className='text-secondary text-smallT cursor-pointer'/>
                </div>  
                    )
                 }
               
            </div>
        ),
        children: (
            <div className='w-full flex flex-col gap-2'>
                <AchivementCard 
                    edit={false}
                    certificateName={"Addis system best seller"}
                    company={'AddisPay'}
                    date={'Jun 20 2021'}
                
                />
                 <AchivementCard 
                    edit={false}
                    certificateName={"Quality Product Award"}
                    company={'BridgeTech'}
                    date={'Sep 20 2022'}
                
                />
        
            </div>
        ),
        },
    ]}
/>
  )
}
