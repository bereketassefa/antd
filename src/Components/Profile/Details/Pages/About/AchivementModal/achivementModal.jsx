import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'antd'
import React, { useState } from 'react'
import AchivementCard from '../AchivementCard/achivementCard'
import AchivementList from './achivementList'
import AchivementForm from './achivementForm'

export default function AchivementModal({isVisisble , onClose}) {
  const [isList , setIsList ] = useState(true)
  const handlePageChange = ()=>{
     setIsList(!isList)
  }

  return (
    <Modal
        open={isVisisble}  
        onCancel={onClose}
        footer={[]}
        style={{
            top: 80,
            borderRadius: 0
           
        }}
        width={700}
        
        >
        <div className='w-full flex flex-col gap-4 mt-6' >
           <div className={isList?'w-full flex items-center justify-between border-b border-b-1 border-b-gray-300 py-4': 'hidden'}>
                <h1 className='text-smallT font-bold'>Achivements</h1>
                <FontAwesomeIcon icon={faPlus} className='text-secondary text-smallT cursor-pointer' onClick={handlePageChange}   />
           </div>
           {
             isList?
             <AchivementList />: 
             <>
                 <div className={!isList?'w-full flex items-center gap-2 border-b border-b-1 border-b-gray-300 py-4': 'hidden'}>
                        <FontAwesomeIcon icon={faArrowLeft} className='text-smallT cursor-pointer' onClick={handlePageChange}  />
                        <h1 className='text-smallT font-bold'>Add Achivement</h1>                      
                </div>
                <AchivementForm />
             
             </>
           }
           
        </div>
        
        
      </Modal>
  )
}
