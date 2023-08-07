import React from 'react'

import Card from './Card/card'
import comment1 from '../../../assets/logo/comment1.png'
import comment2 from '../../../assets/logo/comment2.png'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie'


export default function CardHolder() {
  const [dataSource, setDataSource] = useState([]);
    const [dataSourceRelation, setDataRelation] = useState([]);
    const [DataRecommendation, setRecommendation] = useState([]);
 const [cookies] = useCookies(['User']);
// console.log(dataSource)

  useEffect(() => {
   
    const intervalId= setInterval(()=>{
       fetchRecordsOfRelation();

         fetchRecomendation();
    fetchRelationRequest();
  
    },10000);
    return () => clearInterval(intervalId);
 
  }, []);

const fetchRecordsOfRelation = () => {

  axios
    .get(`http://localhost:8013/connection/${cookies?.user.Uid}`)
    .then((res) => {
      setDataSource(res.data);
    
       console.log(res.data);
    });
};

const fetchRelationRequest = () => {

  axios
    .get(`http://localhost:8013/connection/merged/${cookies?.user.Uid}`)
    .then((res) => {
      setDataRelation(res.data);
    
      // console.log(res.data);
    });
};

const fetchRecomendation = () => {
  axios
    .post(`http://localhost:8013/recommendation`, { Uid: cookies?.user.Uid })
    .then((res) => {
      console.log("Recommendation response:", res.data); // Log the response
      // Check if the data is an array, if not, set it to an empty array
      const recommendationData = Array.isArray(res.data) ? res.data : [];
      setRecommendation(recommendationData);
    });
};

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
        companyName: 'Company A',
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
    
    {
        id: '4',
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
      data: DataRecommendation
    },
    {
      id: 3,
      type: 'relationReq',
      title: 'Relation Requests',
      data: dataSourceRelation
    },
    {
      id: 4,
      type: 'relations',
      title: 'Relations',
      data: dataSource
    }
  ]
  return (
    <div className='hidden lg:flex items-start justify-center w-[300px] flex-col gap-2 '>
        {
          cards.map(items=>{
            return (
              <Card 
                  key={items.id}
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
