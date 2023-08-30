import React, { useState } from "react";
import { Requested } from "../../data";
import Button from "../../Fields/Button/button";
import Avatar from "../../Fields/Avatar/avatar";
import axios from "axios";
import { useCookies } from "react-cookie";
function RequestedRelation() {
  
  const [dataRelation, setDataRelation] =useState([])
  const [cookies] = useCookies(['User']);

    const handleAcceptClick = async () => {
    try {
      const url = `${import.meta.env.VITE_ACCEPT_THE_RELATION}/${dataRelation[0]?.connections?.id}`;
      const response = await fetch(url, {
        method: "POST", // Or the appropriate HTTP method for your API
      });

      if (!response.ok) {
        throw new Error("Request failed"); // Handle non-successful response
      }

      const data = await response.json();
      //   console.log(data); // Process the response data if needed
    } catch (error) {
      console.error(error); // Handle the error, e.g., show an error message
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
  fetchRelationRequest()
  return (
    <div className="flex flex-col  gap-4 mx-auto pb-4">
      {dataRelation.map((item) => {
  const partyName = item?.account[0]?.party || '';
  const firstLetter = partyName.charAt(0).toLowerCase();
  
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center border-[1px] border-[#3222C6]   px-4  ">
      <div className=" justify-start flex items-center lg:justify-center gap-2 ">
        {item.image ? (
          <Avatar img={item.image} />
        ) : (
          <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full">
            <span className="text-white">{firstLetter}</span>
          </div>
        )}
        <h2 className=" font-bold text-[#000] text-center text-[17px] ">
          {partyName}
        </h2>
      </div>

            <div className="flex gap-4 py-4 items-center">
              <Button onClick={handleAcceptClick} text={"Accept"} filled color="[#D71A62]" />
              <Button text={"Decline"} color="[#D71A62]" />

              <p className="hidden lg:block">{item.time} min</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RequestedRelation;
