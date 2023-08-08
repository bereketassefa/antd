import React from 'react'
import OverView from '../../../Components/Profile/Details/Pages/About/overView'
import Products from '../../../Components/Profile/Details/Pages/About/products'
import Achivements from '../../../Components/Profile/Details/Pages/About/Achivements'

export default function About() {
  return (
    <div className='w-full p-4 bg-lightBg flex flex-col gap-2  '>
         <OverView />
         <Products />
         <Achivements  />
    </div>
  )
}
