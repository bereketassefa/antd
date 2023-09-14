import React, { useEffect, useState } from "react";
import { Col, InputNumber, Row, Slider, Space } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Search } from "../../../data";
import Avatar from "../../../Fields/Avatar/avatar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BiMoney } from "react-icons/bi";
function SearchProduct() {
  const { name } = useParams();
  const decodedName = name.includes("%")
    ? decodeURIComponent(name).split(" ")[0]
    : name.split(" ")[0];

  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  const [DataProducts, setSearchProduct] = useState(null);
  const handleSearch = async () => {
    try {
      const url = 'https://search.qa.addissystems.et/partially';
      const response = await axios.post(url, {
        query: decodedName,
      });
console.log(decodedName)
      const formattedResults = response.data
        .filter((item) => item.entityType === "product")
        .map((item) => {
          return {
            productName: item.productName,
            Uid: item.Uid,
            imageUrl: item.imageUrl,
            productDescription: item.productDescription,
            ProductPrice: item.ProductPrice,
          };
        });

      setSearchProduct(formattedResults);
      console.log(DataProducts)
    } catch (error) {
      console.error("Error performing search", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  

  return (
    <div className="max-w-[780px] md:w-[780px] bg-white drop-shadow-xl">

      <div className="flex justify-between   py-7  items-center mx-3">
        <p className="text-2xl font-bold">Products</p>
        <div className="flex justify-between gap-16 items-center ">
          <p>Price</p>{" "}
          <div>
            {" "}
            <Row>
              <Col span={12}>
                <Slider
                  min={1}
                  max={10000}
                  onChange={onChange}
                  value={typeof inputValue === "number" ? inputValue : 0}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={20}
                  style={{
                    margin: "0 16px",
                  }}
                  value={inputValue}
                  onChange={onChange}
                />
              </Col>
            </Row>{" "}
          </div>{" "}
          <p>ETB</p>
        </div>
      </div>
      <hr className="mx-6 my-6  "/>
      {DataProducts?.map((item) => {
        return (
          <div className="border-2    rounded-lg my-4">
            <div className="flex justify-end">
              <p>Price</p>{" "}
              <div
                dir="rtl"
                className="bg-gray-300 w-36 h-10  flex gap-2 items-center  rounded-bl-[40px]    "
              >
                <p>ETB</p>
                <BiMoney className="text-xl" />
                {item.Price}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:items-center px-4 ">
              <div className="justify-start flex flex-col lg:justify-center gap-2  mt-4">
                <div className="flex  justify-start items-center">
                  <Avatar img={item.image1} />
                  <div>
                    <h2 className="font-bold text-[#000]  text-[17px]   mx-1">
                      {item.productName}
                    </h2>
                    <p className=" pl-3 flex  ">{item.Product}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="max-w-[670px] mb-6"> {item.description}</p>
                  <img
                    src={item.image2}
                    alt="product image"
                    className="w-36 h-40 rouded-2 pb-4 object-cover rounded-lg"
                  ></img>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-10 mb-4">
              <p>Feature </p>
              <div className="flex gap-5">
                {" "}
                <div className="border-2 rounded-md  w-36 px h-10 ">
                  128 GB Storage{" "}
                </div>
                <div className="border-2 rounded-md  w-36 px h-10 ">
                  128 GB Storage{" "}
                </div>
              </div>
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
