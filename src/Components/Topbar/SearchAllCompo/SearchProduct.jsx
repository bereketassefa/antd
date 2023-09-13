import React, { useEffect, useState } from "react";

import { RiArrowDropDownLine } from "react-icons/ri";
import { Search } from "../../../data";
import Avatar from "../../../Fields/Avatar/avatar";
import axios from "axios";
import { useParams } from 'react-router-dom';

function SearchProduct() {
 const { name } = useParams(); 
 const decodedName = name.includes('%') ? decodeURIComponent(name).split(' ')[0] : name.split(' ')[0];

  const [DataPeoducts ,setSearchProduct] =useState(null)
  const handleSearch = async () => {
   
    try {
      const url = 'http://localhost:8031/partially'; // Replace with your actual URL
      const response = await axios.post(url, {
        query: decodedName,
      });
// console.log(response.data)

const formattedResults = response.data
.filter(item => item.entityType === 'product')  // Filter only items with entityType as 'product'
.map(item => {
  return {
    productName: item.productName,
    Uid: item.Uid,
    imageUrl: item.imageUrl,
    productDescription: item.productDescription,
    ProductPrice: item.ProductPrice  // Include this if you need the price
  };
});
  // console.log(formattedResults)
      setSearchProduct(formattedResults);
    } catch (error) {
      console.error('Error performing search', error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className=" max-w-[780px] md:w-[780px] bg-white drop-shadow-xl">
      <div className="flex justify-between items-center   px-4 ">
        <h1 className="text-xl font-bold ">Search result products</h1>
        <div className="flex justify-center items-center  gap-4">
          <p>Sort By:</p>
          <select
            className=" border-2 p-2 border-blue-800 outline-none  "
            placeholder="Select"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value={"all"}>All</option>
            <option value={"accepted"}>Price</option>
            {/* <option value={"connected"}>Connected</option>
            <option value={"declined"}>Declined</option> */}
          </select>
        </div>
      </div>

      {DataPeoducts?.map((items) => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center px-4 ">
      <div className="justify-start flex flex-col lg:justify-center gap-2 ">
        <div className="flex justify-start ">
          <Avatar img={items.imageUrl} /> {/* Changed from items.image */}
          <div>
            <h2 className="font-bold text-[#000] text-center text-[17px] my-4 mx-1 ">
              {items.productName}
            </h2>
            <div className="border-2 flex justify-center ">
              <p>Price: </p>
              {items.ProductPrice} {/* Changed from items.Price */}
            </div>
          </div>
        </div>
        <p className="max-w-[670px] mb-6"> {items.productDescription}</p>
      </div>
    </div>
  );
})}

      <a href="" className="flex flex-col justify-center items-center pb-8">
        <p className="flex justify-center text-[#3222C6]">See More</p>
        <div className="h-1 w-12 bg-[#3222C6]" />
      </a>
    </div>
  );
}

export default SearchProduct;
