import React from 'react'

import Card from './Card/card'
import comment1 from '../../../assets/logo/comment1.png'
import comment2 from '../../../assets/logo/comment2.png'


export default function CardHolder() {
  const productData = [
    {
        key: '1',
        img: comment1,
        productName: 'Product A',
        sales: 40000,

    },
    {
        key: '2',
        img: comment2,
        productName: 'Product B',
        sales: 35000,

    },
    {
        key: '1',
        img: comment1,
        productName: 'Product A',
        sales: 40000,

    },
  ]

  const relations = [
    {
        id: '1',
        img: comment1,
        companyName: 'Addissystems',
    },
    {
        id: '2',
        img: comment2,
        companyName: 'AddisPay'
    },
    {
        id: '3',
        img: comment1,
        companyName: 'DAF Tech',
    },
  ]

  const recommendationData = [
    {
      id: '1',
      img: comment1,
      companyName: 'BridgeTech',
    },
    {
      id: '2',
      img: comment2,
      companyName: 'Zmart',
    },
  ]

  const cards = [
    {
      id: 1,
      type: 'product',
      title: 'Demand Products',
      data: productData
    },
    {
      id: 2,
      type: 'relationRecom',
      title: 'Recommended Relations',
      data: recommendationData
    },
    {
      id: 3,
      type: 'relationReq',
      title: 'Relation Requests',
      data: relations
    },
    {
      id: 3,
      type: 'relations',
      title: 'Relations',
      data: relations
    }
  ]
  return (
    <div className='hidden lg:flex items-start justify-center w-[300px] flex-col gap-2 sticky top-[65px]'>
        {
          cards.map(items=>{
            return (
              <Card 
                  id={items.id}
                  type={items.type}
                  title={items.title}
                  data={items.data}
              />
            )
          })
        }
    </div>
  )
}
