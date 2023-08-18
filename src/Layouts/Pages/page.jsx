import React from 'react'
import Navigator from '../../Components/Home/Navigator/navigator'
import { Outlet } from 'react-router-dom'

export default function PageLayout() {
    return (
        <div className='w-full p-0 m-0 flex flex-col max-w-full items-center'>           
            <div className='w-full flex items-start justify-center px-2 md:px-0 mt-2 '>
                <Navigator />
                <div className='w-full'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
