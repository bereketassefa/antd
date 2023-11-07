import React, { useEffect, useState } from "react";
import { Col, InputNumber, Row, Slider, Space } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Search } from "../../../data";
import Avatar from "../../../Fields/Avatar/avatar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BiMoney } from "react-icons/bi";
import alternativeProfile from "../../../assets/image/alternativeProfile.png";
import noproductimage from "../../../assets/image/noproductimage.png";

function SearchProduct() {
  const { name } = useParams();
  const decodedName = name.includes("%")
    ? decodeURIComponent(name).split(" ")[0]
    : name.split(" ")[0];

  const [inputValue, setInputValue] = useState(1);
  const [hasSliderTouched, setHasSliderTouched] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [DataProducts, setSearchProduct] = useState(null);

  const onChange = (newValue) => {
    setInputValue(newValue);
    setHasSliderTouched(true); // Set this state when the slider is changed
  };
  const handleSearch = async () => {
    try {
      const url = "https://search.qa.addissystems.et/partially";
      const response = await axios.post(url, {
        query: decodedName,
      });
      // console.log(decodedName)
      const formattedResults = response.data
        .filter((item) => item.entityType === "product")
        .map((item) => {
          return {
            productName: item.productName,
            Uid: item.Uid,
            imageUrl: item.imageUrl,
            productDescription: item.productDescription,
            ProductPrice: item.ProductPrice,
            comapanyName: item.companyName,
            accountId: item.accountId,
            profilePicture: item.profilePicture,
            ProductFeature: item.ProductFeature,
          };
        });

      const prices = formattedResults.map((item) => item.ProductPrice);
      setMinPrice(Math.min(...prices));
      setMaxPrice(Math.max(...prices));
      setSearchProduct(formattedResults);
      // console.log(DataProducts.accountId)
      //  console.log(formattedResults)
      //  console.log(DataProducts)
    } catch (error) {
      console.error("Error performing search", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const hadleNavigateProfile = async (e) => {
    e.preventDefault();
    try {
      const url = `${import.meta.env.VITE_FIND_MY_DATA}/${
        DataProducts.accountId
      }`;
      await axios.get(url);
      //  console.log(response?.data)
      //   setProfilePic(response?.data?.account[0]?.profilePicture)

      // console.log(cookies.user._id)
      window.location.href = `/feed/profile/${DataProducts.accountId}`;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dark:bg-[#1b1f23] max-w-[780px] md:w-[780px] bg-white drop-shadow-xl">
      <div className="flex justify-between md:w-[700px]  max-w[700px]  py-7  items-center mx-3">
        <p className="dark:text-white text-2xl font-bold">Products</p>
        <div className="dark:text-white flex justify-between gap-1 md:gap-16 items-center ">
          <p>Price</p>{" "}
          <div>
            {" "}
            <Row>
              <Col span={12}>
                <Slider
                  className="dark:text-white"
                  min={1}
                  max={1000000}
                  onChange={onChange}
                  value={typeof inputValue === "number" ? inputValue : 0}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  className="dark:text-white"
                  min={1}
                  max={1000000}
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
      <hr className="mx-6 my-6  " />
      {(!hasSliderTouched
        ? DataProducts
        : DataProducts?.filter((item) => item?.ProductPrice <= inputValue)
      )?.map((item) => {
        return (
          <div className="border-2 rounded-lg my-4 ">
            <div className="flex justify-end">
              <p className="dark:text-white">Price</p>
              <div
                dir="rtl"
                className="bg-gray-300 w-36 h-10 flex gap-2 items-center rounded-bl-[40px]"
              >
                <p>ETB</p>
                <BiMoney className="text-xl" />
                {item.ProductPrice}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:items-center px-4 ">
              <div className="justify-start flex flex-col lg:justify-center gap-2  mt-4">
                <div className="flex  justify-start items-center">
                  <Avatar
                    onClick={hadleNavigateProfile}
                    img={
                      item.profilePicture
                        ? item.profilePicture
                        : alternativeProfile
                    }
                  />
                  <div>
                    <h2
                      onClick={hadleNavigateProfile}
                      className="dark:text-white font-bold text-[#000]  text-[13px]   mx-1"
                    >
                      {item.comapanyName.toLowerCase()}
                    </h2>
                    <p className="dark:text-white pl-3 flex font-bold ">
                      {item.productName}
                    </p>
                  </div>
                </div>
                <div className=" w- flex justify-between items-center  ">
                  <p className="dark:text-white max-w-[670px] md:w-[600px] mb-6 ">
                    {item.productDescription}
                  </p>
                  <img
                    src={item.imageUrl ? item.imageUrl : noproductimage}
                    className="w-36 h-40 rouded-2 pb-4 object-cover rounded-lg  "
                  ></img>
                </div>
              </div>
            </div>
            <div className="dark:text-white flex flex-col ml-10 mb-4">
              <p>Feature </p>
              <div className="flex gap-5 mt-4">
                <div className="border-2 rounded-md  w-36 px h-10 ">
                  {item.ProductFeature}
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
        <p className="dark:text-white flex justify-center text-[#3222C6]">
          See More
        </p>
        <div className="dark:text-white h-1 w-12 bg-[#3222C6]" />
      </a>
    </div>
  );
}

export default SearchProduct;
