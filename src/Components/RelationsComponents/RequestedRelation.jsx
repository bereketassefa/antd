import React, { useEffect, useState } from "react";
import { Requested } from "../../data";
import Button from "../../Fields/Button/button";
import Avatar from "../../Fields/Avatar/avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { useCookies } from "react-cookie";
import alternativeProfile from "../../assets/image/alternativeProfile.png";
function RequestedRelation() {
  
  const [dataRelation, setDataRelation] =useState([])
  const [loadingAccept, setLoadingAccept] = useState(false);
  const [loadingCancel, setLoadingCancel] = useState(false);
  const [cookies] = useCookies(['User']);

    const handleAcceptClick = async () => {
      setLoadingAccept(true);
    try {
      const url = `${import.meta.env.VITE_ACCEPT_THE_RELATION}/${dataRelation[0]?.connections?.id}`;
      const response = await fetch(url, {
        method: "POST", // Or the appropriate HTTP method for your API
      });

      if (!response.ok) {
        throw new Error("Request failed"); // Handle non-successful response
      }

      const data = await response.json();
      fetchRelationRequest()
      //   console.log(data); // Process the response data if needed
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingAccept(false);
    }
  };
  const fetchRelationRequest = () => {
    
    const url= `${import.meta.env.VITE_FETCH_RELATION_REQUEST}/${cookies?.user.Uid}`
    axios
      .get(url
        )
      .then((res) => {
        setDataRelation(res.data);
        // console.log(res.data);
         
      });
  };
  useEffect(()=>{
 fetchRelationRequest()
  })
  const handleCancelClick = async () => {
    setLoadingCancel(true);
    try {
      
      // Artificially delay the operation by 6 seconds
     
      // 
      const url = `${import.meta.env.VITE_CANCEL_THE_RELATION}/${dataRelation[0]?.connections?.id}`;
      const response = await fetch(url, { method: "DELETE" });
      if (!response.ok) throw new Error("Request failed");
      const data = await response.json();
      // console.log(data)
      await new Promise(resolve => setTimeout(resolve, 9000));
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCancel(false);
    }
  };
  

  const hadleNavigateProfile = async(e)=>{
    e.preventDefault();
    // navigate(`/feed/profile/${Uid}`)
}


  return (
    <div className="flex flex-col  gap-4 mx-auto pb-4">
      {dataRelation.map((item) => {
  const partyName = item?.account?.party || '';
  const firstLetter = partyName.charAt(0).toLowerCase();
  
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center border-[1px] border-[#3222C6]   px-4  ">
      <div className=" justify-start flex items-center lg:justify-center gap-2 ">
      <Avatar onClick={hadleNavigateProfile}  img={ alternativeProfile } />
        <h2 className=" text-[#000] text-center text-[17px] ">
          {partyName}
        </h2>
      </div>

            <div className="flex gap-4 py-4 items-center">
            <Button
                onClick={handleAcceptClick}
                text={loadingAccept ? <div className="spinner"></div> : "Accept"}
                filled
                color="[#D71A62]"
                disabled={loadingAccept}
              />
              <Button  onClick={handleCancelClick}
                text={loadingCancel ? <div className="spinner"></div> : "Decline"}
                filled
                color="[#D71A62]"
                disabled={loadingCancel} />

              {/* <p className="hidden lg:block">{item.time} min</p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RequestedRelation;
