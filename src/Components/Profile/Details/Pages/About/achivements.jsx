import React from 'react'
import { Collapse } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import AchivementCard from './AchivementCard/achivementCard';

export default function Achivements() {
  return (
    <Collapse
    className='w-full bg-zinc-50'
    items={[
        {
        key: '1',
        label: (
            <div className='w-full flex items-center justify-between'>
                 <h1 className='font-bold text-smallP'>Achivements</h1>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faPencil}   className='text-secondary text-smallT cursor-pointer'/>
                    <FontAwesomeIcon icon={faPlus} className='text-secondary text-smallT cursor-pointer'/>
                </div>
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
