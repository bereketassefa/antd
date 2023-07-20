import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ProductCard from './productCard'
import RequestCard from './requestCard'
import RecommendedRelationCard from './recommendedRelationCard'
import RelationCard from './relationCard'

export default function Card({id,type , title , data}) {
  return (
    <div className=' w-[300px] p-4 flex flex-col gap-4 bg-cards  drop-shadow-xl' key={id} >
            <div className='w-full flex items-center justify-between'>
                <h1 className='font-bold  text-smallP md:text-midP lg:text-largeP' >{title}</h1>
                <div className='p-0'>
                    <FontAwesomeIcon icon={faEllipsisVertical} className='text-largeP md:text-smallT cursor-pointer' />
                </div>
            </div>
            <div className='w-full flex flex-col gap-2' >
                {
                    data.map((items) => {
                       return (
                         <>
                            {
                                 type === 'product'?                        
                                    <ProductCard 
                                        key={items.key}
                                        img={items.img}
                                        productName={items.productName}
                                        sales={items.sales.toLocaleString()}
                                    />                                 
                                   : 
                                   type === 'relationReq'?
                                        <RequestCard
                                        id={items.id}
                                        img={items.img}
                                        companyName={items.companyName}                                   
                                    />:
                                    type === 'relationRecom'?
                                        <RecommendedRelationCard
                                            id={items.id}
                                            img={items.img}
                                            companyName={items.companyName}                                   
                                    />:
                                    type === 'relations'?
                                        <RelationCard
                                            id={items.id}
                                            img={items.img}
                                            companyName={items.companyName}                                   
                                    />:
                                   null
                            }
                         </>
                       )
                        
                    })
                }
            </div>
        </div>
  )
}