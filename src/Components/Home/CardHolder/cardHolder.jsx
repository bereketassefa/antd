import React from 'react'

import Card from './Card/card'
import comment1 from '../../../assets/logo/comment1.png'
import comment2 from '../../../assets/logo/comment2.png'
import axios from 'axios';
import { useEffect, useState ,useRef} from 'react';
import { useCookies } from 'react-cookie'


export default function CardHolder() {
  const [dataSource, setDataSource] = useState([]);
    const [dataSourceRelation, setDataRelation] = useState([]);
    const [DataRecommendation, setRecommendation] = useState([]);
    const [loading, setLoading] = useState(false);
    const elementRef = useRef(null);
    const [error, setError] = useState(null);
 const [cookies] = useCookies(['User']);
// console.log(dataSource)


const fetchAllData = async () => {
  try {
    await fetchRecordsOfRelation();
    await fetchRecomendation();
    await fetchRelationRequest();
    setError(null); // Reset the error if data fetch is successful
  } catch (error) {
    console.error("Error fetching data:", error);
    setError(error.message);
  } finally {
    if (loading) {
      setLoading(false); // Set loading to false only after the initial data fetch
    }
  }
};

const fetchRecordsOfRelation = () => {
  try {
    setLoading(true);
     const url= `${import.meta.env.VITE_FETCH_ACCEPTED_RELATION}/${cookies?.user.Uid}`
  axios
    .get(url
      ,
      )
    .then((res) => {
      setDataSource(res.data);
      setLoading(false);
      //  console.log(res.data);
    });
  } catch (error) {
    console.error(error);
  }
  finally {
    setLoading(false);
  }
 
};

const fetchRelationRequest = () => {
  const url= `${import.meta.env.VITE_FETCH_RELATION_REQUEST}/${cookies?.user.Uid}`
  axios
    .get(url
      )
    .then((res) => {
      setDataRelation(res.data);
      console.log(res.data);
       
    });
};

const fetchRecomendation = () => {
  axios
    .post(import.meta.env.VITE_GET_RECOMMENDATION,{ Uid: cookies?.user.Uid })
    .then((res) => {
      console.log("Recommendation response:", res.data); // Log the response
      // Check if the data is an array, if not, set it to an empty array
      const recommendationData = Array.isArray(res.data) ? res.data : [];
      setRecommendation(recommendationData);
    });
};

useEffect(() => {
  fetchAllData(); // Fetch all data on component mount
  const dataInterval = setInterval(fetchAllData, 10000); // Refresh data every 10 seconds
  return () => {
    clearInterval(dataInterval);
  };
}, []);

if (loading) {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
}

if (error) {
  return (
    <div className="flex h-screen justify-center items-center">
      <p>{error}</p>
      {error === "Network Error" && <p>Please check your network connection and try again.</p>}
    </div>
  );
}


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
   
   
    <div className='hidden lg:flex items-start justify-center w-[300px] flex-col gap-2'>
        {
        cards.map(items => {
          // Check if items.data has data
          if (items.data.length > 0) {
            return (
              <Card 
                key={items.id}
                id={items.id}
                type={items.type}
                title={items.title}
                data={items.data}
              />
            );
          } else {
            // If no data, return null (nothing will be rendered for this card)
            return null;
          }
  })
}       
    </div>
  )
}