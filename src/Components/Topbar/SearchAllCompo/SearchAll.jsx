import React, { useEffect, useState } from "react";
import { Search } from "../../../data"; // Replace with your actual data source
import { MdOutlineAddTask, MdPersonAddAlt1 } from "react-icons/md";
import Avatar from "../../../Fields/Avatar/avatar";
import Button from "../../../Fields/Button/button";
import { useLocation, useParams } from 'react-router-dom';
import axios from "axios";
import alternativeProfile from "../../../assets/image/alternativeProfile.png";
function SearchAll() {
  const location = useLocation();
  const { name } = useParams();
  const {  image, type,ProUid } = location.state || {};
  const [filter, setFilter] = useState("");
  const [DataProducts, setSearchCompany] = useState(null); 
   console.log(name)
  const decodedName = name ? (name.includes('%') ? decodeURIComponent(name).split(' ')[0] : name.split(' ')[0]) : '';
  const handleSearch = async () => {
    try {
      const url = 'https://search.qa.addissystems.et/partially';
      const response = await axios.post(url, {
        query: decodedName,
      });

      const formattedResults = response.data
        .filter(item => ['party', 'product'].includes(item.entityType))
        .map(item => {
          if (item.entityType === 'party') {
            return {
              businessname: item.party.businessname,
              Uid: item.Uid,
              entityType: item.entityType,
              // Add more fields for 'party' if needed
            };
          } else if (item.entityType === 'product') {
            return {
              productName: item.productName,
              productDescription: item.productDescription,
              imageUrl: item.imageUrl,
              Uid: item.Uid,
              entityType: item.entityType,
              // Add more fields for 'product' if needed
            };
          }
          return null;
        });

      setSearchCompany(formattedResults);
    } catch (error) {
      console.error('Error performing search', error.message);
    }
  };

  useEffect(() => {
    if (decodedName) { // Add a check before calling handleSearch
      handleSearch();
    }
  }, [decodedName]); // Dependency array to ensure useEffect runs when decodedName changes

  return (
    <div>
      <div className="max-w-[780px] md:w-[780px] gap-2 flex-col md:flex-row justify-between bg-white drop-shadow-xl">
        <div className="flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">Search result All</h1>
          <div className="flex justify-center items-center gap-4">
            <p>Sort By:</p>
            <select
              className="border-2 p-2 border-blue-800 outline-none"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value={"all"}>All</option>
              <option value={"accepted"}>Accepted</option>
              <option value={"connected"}>Connected</option>
              <option value={"declined"}>Declined</option>
            </select>
          </div>
        </div>

        {DataProducts?.filter((item) =>
          filter === "accepted"
            ? item.isAccepted === true
            : filter === "" || filter === "all"
            ? item
            : filter === "connected"
            ? item.isConnected === true && item.isAccepted === true
            : null
        ).map((search, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-between md:items-center py-1 px-4">
            <div className="flex items-center lg:justify-center gap-2">
              <Avatar img={alternativeProfile || search.image} />
              <h2 className="font-bold text-[#000] text-center text-[17px]">
                {name || search.businessname}
              </h2>
            </div>
            <div className="py-4 justify-between">
              {type === 'party' ? (
                search.isAccepted === false ? (
                  <div className="flex gap-4">
                    <Button text={"Accept"} filled color="[#D71A62]" />
                    <Button text={"Decline"} color="[#D71A62]" />
                  </div>
                ) : (
                  <div>
                    <Button
                      text={search.isConnected ? "Connected" : "Connect"}
                      icon={
                        search.isConnected ? <MdOutlineAddTask /> : <MdPersonAddAlt1 />
                      }
                      iconPosition="left"
                      color="[#D71A62]"
                      filled={!search.isConnected}
                    />
                  </div>
                )
              ) : (
                // Render something else for type 'product'
                <div>
                  {/* Here you can render something specific to 'product' type */}
                </div>
              )}
            </div>
          </div>
        ))}

        <a href="#" className="flex flex-col justify-center items-center pb-4">
          <p className="flex justify-center text-[#3222C6]">See More</p>
          <div className="h-1 w-12 bg-[#3222C6]"></div>
        </a>
      </div>
    </div>
  );
}

export default SearchAll;
