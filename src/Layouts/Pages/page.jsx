import React, { useState } from 'react'
import Navigator from '../../Components/Home/Navigator/navigator'
import { Outlet } from 'react-router-dom'
import AddItemsPage from '../../Pages/AddProduct/AddItemsPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export default function PageLayout() {
    const [showAddProductModal, setShowAddProductModal] = useState(false)

    function handleShowModal() {
      
      setShowAddProductModal(!showAddProductModal)
    }
    return (
        <div className=' w-full p-0 m-0 flex flex-col max-w-full items-center'>      
                {showAddProductModal && (
                <div className="flex absolute bg-[rgba(0,0,0,0.5)] w-full z-50 h-full min-h-screen ">
                <div className=" fixed flex h-screen w-full justify-center items-center p-4">
                    <div className="dark:bg-[#1b1f23] w-[700px] bg-white rounded-md p-6 ">
                    <div className="dark:bg-[#1b1f23] flex justify-end right-0" onClick={() => setShowAddProductModal(false)}>
                        <FontAwesomeIcon icon={faClose} className="text-white bg-[#B71A62] text-2xl" />
                    </div>
                    <AddItemsPage handleModal={handleShowModal} />
                    </div>
                </div>
                </div>
            )}     
            <div className=' w-full flex items-start justify-start px-2 md:px-0 mt-2 gap-2'>
                <Navigator  handleAddProduct={handleShowModal} />
                <div className='min-h-screen w-full mt-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
