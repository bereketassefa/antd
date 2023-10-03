import React, { useState } from 'react'
import Button from '../../../../../../Fields/Button/button'
import Avatar from '../../../../../../Fields/Avatar/avatar'
import logoS from '../../../../../../assets/logo/addisLogoS.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faDumpster, faPencil, faTrash, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import AchivementModal from '../AchivementModal/achivementModal'

export default function AchivementCard({edit , certificateName , company , date  }) {
    const [isOpenModal ,setOpenModal ] = useState(false)

    const handleModal = ()=>{
         setOpenModal(!isOpenModal)
    }
  return (
    <div className='flex w-full items-center justify-between bg-lightBg p-3'>
        <div className='flex items-center gap-2'>
            <Avatar img={logoS} />
            <div>
                 <h1 className='text-midP font-bold' >{certificateName}</h1>
                 <h3 className='text-smallP'>{company}</h3>
                 <span className='text-gray-400'> Issued: {date}  </span>
            </div>
        </div>
        <div className='flex items-end md:items-center gap-2 flex-col md:flex-row'>
             <Button 
                text={'Show credentials'}
                filled={false}
                color={'secondary'}
                iconPossition={'right'}
                onClick={handleModal}
                icon={<FontAwesomeIcon icon={faUpRightFromSquare} />}
                
                
            />
               {
                edit? 
                 <div className='flex gap-2 ml-2'>
                     <FontAwesomeIcon icon={faPencil}   className='text-secondary text-smallT'/>
                     <FontAwesomeIcon  icon={faTrash} className='text-secondary text-smallT'/>
                 </div>
                : null
            }
        </div>

        <AchivementModal isVisisble={isOpenModal} onClose={handleModal}  />

    </div>
  )
}
