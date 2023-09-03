import React from 'react'

import Card from './Card/card'
import comment1 from '../../../assets/logo/comment1.png'
import comment2 from '../../../assets/logo/comment2.png'
import axios from 'axios';
import { useEffect, useState ,useRef} from 'react';
import { useCookies } from 'react-cookie'
import { message } from 'antd';


export default function CardHolder() {
  const [dataSource, setDataSource] = useState([]);
    const [dataSourceRelation, setDataRelation] = useState([]);
    const [DataRecommendation, setRecommendation] = useState([]);
    const [Product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const elementRef = useRef(null);
    const [error, setError] = useState(null);
 const [cookies] = useCookies(['User']);
// console.log(dataSource)


const fetchAllData = async () => {
  try {
    await fetchRecordsOfRelation();
    await fetchRecordsOfProduct();
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
const fetchRecordsOfProduct = async() => {
  try {
    setLoading(true);
    const url= `${import.meta.env.VITE_GET_PRODUCT_BY_UID}/${cookies?.user.Uid}`
  axios
    .get(url
      ,
      )
    .then((res) => {
      setProduct(res.data);
      // console.log(res.data);
      setLoading(false);
       
    });
  } catch (error) {
    console.error(error);
  }
  finally {
    setLoading(false);
  }
 
};
const fetchRecordsOfRelation = async () => {
  try {
    setLoading(true);
    const url = `${import.meta.env.VITE_FETCH_ACCEPTED_RELATION}/${cookies?.user.Uid}`;
    const res = await axios.get(url);
    setDataSource(res.data);
    console.log(res.data[0])
  } catch (error) {
    // If you'd like to show the user a notification, you could use Ant Design's message component like so:
    // message.error('An error occurred while fetching data. Please try again.');
  } finally {
    setLoading(false);
  }
};


const fetchRelationRequest = async() => {
  const url= `${import.meta.env.VITE_FETCH_RELATION_REQUEST}/${cookies?.user.Uid}`
  axios
    .get(url
      )
    .then((res) => {
      setDataRelation(res.data);
       console.log(res.data);
       
    });
};

const fetchRecomendation =async () => {
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


 

  const cards = [
    {
      id: 1,
      type: 'product',
      title: 'Products',
      data: Product
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
  // sticky top-[65px]
  
  return (
   
   
    <div className='hidden lg:flex items-start justify-center w-[300px] flex-col gap-2'>
        {
        cards.map(items => {
          // Check if items.data has data
          if (items.data.length > 0) {
            return (
              <Card 
                key={items?.id}
                id={items?.id}
                type={items?.type}
                title={items?.title}
                data={items?.data}
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