import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useCookies } from 'react-cookie';
import ProfileFeature from '../../Components/Profile/ProfileFeature/profileFeature'
import ProfileProgress from '../../Components/Profile/ProfileProgress/profileProgress'
import BasicInfo from '../../Components/Profile/BasicInfo/basicInfo'
import Details from '../../Components/Profile/Details/details'
import { useParams } from 'react-router-dom';
export default function Profile({dataConnection}) {

  const [data, setData] = useState(null);
  const [cookies] = useCookies(['user']);
  const  {id}  = useParams();
  //  console.log(id)
  useEffect(() => {
    const fetchData = async () => {
      // const userId = id ? id : cookies.user._id;
      try {
        const url= `${import.meta.env.VITE_FIND_MY_DATA}/${id}` // import the api from .env file
        const response = await axios.get(
          url
        );
        setData(response?.data);
      //  console.log(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  },  [cookies?.user?._id, id]);

  const check= id===cookies?.user._id

  return (
    <div className=' w-full flex flex-col gap-2 mt-2'>
        <div className='w-full flex flex-col gap-2' >
             {/* profile feature display */}
             <ProfileFeature  data={data} />
             {/* profile completeness view  */}
             {
  check && <ProfileProgress />
} 


           
        </div>


        <div className=' flex gap-2 flex-col md:flex-row'>
             {/* basic profile info */}
             <div className='w-full md:w-[35%]'>
                <BasicInfo   data={data} />
             </div>
        {/* pages */}
            {/* about , post demandproducts relations bids */}
            <div className='w-full md:w-[65%]'>
                <Details />
            </div>
        </div>
    </div>
  )
}
