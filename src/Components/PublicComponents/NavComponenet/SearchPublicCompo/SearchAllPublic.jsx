import React, { useEffect, useState } from "react";
import { MdOutlineAddTask, MdPersonAddAlt1 } from "react-icons/md";
import Avatar from "../../../../Fields/Avatar/avatar";
import Button from "../../Button";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Search, Chat, Jobs } from "../../../../data";
import { BiMoney } from "react-icons/bi";
import alternativeProfile from "../../../../assets/image/alternativeProfile.png";
import noproductimage from "../../../../assets/image/noproductimage.png";
import verifiyPNG from "../../../../assets/logo/verified.png";
import idphne from "../../../../assets/image/iphone2.webp";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import SearchCardTwo from "./SearchCardTwoPublic";
import JabCard from "../SearchPublicCompo/JabCard";
import SearchCardTwoPublic from "./SearchCardTwoPublic";

function SearchAllPublic() {
  const location = useLocation();
  const { searchInput } = useParams();

  const { image, type, ProUid } = location.state || {};
  const [filter, setFilter] = useState("");
  const [DataProducts, setSearchCompany] = useState(null);
  const [showHiddenContent, setShowHiddenContent] = useState(false);
  const [showHiddenContent2, setShowHiddenContent2] = useState(false);
  const [showHiddenContent3, setShowHiddenContent3] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showAllCompanies, setShowAllCompanies] = useState(false);
  const [hasSliderTouched, setHasSliderTouched] = useState(false);
  const [ShowResults, setShowResults] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [data, setData] = useState([]);
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

  function handleClick() {
    const container = document.querySelector(".border-2");
    container.classList.remove("overflow-y-hidden");
  }

  console.log(searchInput);
  const decodedName = searchInput;
  const handleSearch = async () => {
    try {
      const url = "https://search.qa.addissystems.et/partially";
      const response = await axios.post(url, {
        query: decodedName,
      });

      const formattedResults = response.data
        .filter((item) => ["party", "product"].includes(item.entityType))
        .map((item) => {
          if (item.entityType === "party") {
            return {
              businessname: item.party.businessname,
              Uid: item.Uid,
              entityType: item.entityType,
              // Add more fields for 'party' if needed
            };
          } else if (item.entityType === "product") {
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

      //   setSearchCompany(formattedResults);
      // } catch (error) {
      //   console.error("Error performing search", error.message);
      // }
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error performing search", error.message);
    }
  };

  useEffect(() => {
    if (decodedName) {
      // Add a check before calling handleSearch
      handleSearch();
    }
  }, [decodedName]); // Dependency array to ensure useEffect runs when decodedName changes
  const onChange = (newValue) => {
    setInputValue(newValue);
    setHasSliderTouched(true); // Set this state when the slider is changed
  };

  return (
    <div className="   max-w-[780px] md:w-[780px] gap-2 flex-col md:flex-row justify-between items-center bg-white drop-shadow-xl px-2">
      <div className="dark:bg-[#1b1f23] max-w-[780px] md:w-[750px]  ">
        <p className=" ml-3 my-3 text-2xl font-bold">Products</p>
        <div className="border-2 rounded-lg ">
          <div
            className={`rounded-lg ${
              showHiddenContent
                ? " h-auto overflow-hidden"
                : "max-h-[400px] overflow-hidden"
            }`}
          >
            {
              // (!hasSliderTouched
              //   ? Search
              //   : DataProducts?.filter((item) => item?.ProductPrice <= inputValue)
              // )?.map((item, index) => {
              //   if (!showAllProducts && index >= 5) {
              //     return null; // Skip rendering the remaining products
              data
                .filter((item) => item.entityType === "product")
                .map((item, index) => {
                  if (!showAllProducts && index >= 5) {
                    return null; // Skip rendering the remaining products
                  }

                  return (
                    <div className="border-[1px]   h-[400px]   ">
                      <div className="flex justify-end ">
                        <p className=" text-[#3222C6]  font-bold">Price</p>
                        <div
                          dir="rtl"
                          className="bg-[#3222C6] w-36 h-10 flex gap-2 items-center rounded-bl-[40px] text-white"
                        >
                          <p>ETB</p>
                          <BiMoney className="text-xl text-white" />
                          {item.ProductPrice}
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row justify-between md:items-center px-4 ">
                        <div className="justify-start flex flex-col lg:justify-center gap-2  mt-4">
                          <div className="flex  justify-start items-center">
                            <Avatar
                              onClick={hadleNavigateProfile}
                              img={
                                 alternativeProfile
                              }
                            />
                            <div className="">
                              <div className="flex">
                                <h2
                                  onClick={hadleNavigateProfile}
                                  className="dark:text-white font-bold text-[#000]  text-[13px]   mx-1"
                                >
                                  {item?.companyName?.toLowerCase()}
                                </h2>
                                <di>
                                  <img src={verifiyPNG} alt="" />
                                </di>
                              </div>
                              <p className="dark:text-white pl-3 flex font-bold ">
                                {item.productName}
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <p className="dark:text-white max-w-[670px] md:w-[670px]  ">
                              {item.productDescription}
                            </p>
                            <img
                              // src={idphne}
                              // alt=""
                              src={
                                item.imageUrl ? item.imageUrl : noproductimage
                              }
                              className="w-36 h-40 rouded-2 object-cover rounded-lg"
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div className="dark:text-white flex flex-col ml-10  ">
                        <p>Feature </p>
                        <div className=" flex flex-col md:flex-row gap-1 md:gap-5 mt-4">
                          <div className="border-2 rounded-md  w-36  h-10 ">
                            {item.ProductFeature}
                          </div>
                          {/* <div className="border-2 rounded-md  w-36   h-10 ">
                            128 GB Storage{" "}
                          </div> */}
                        </div>
                      </div>
                    </div>
                  );
                })
            }
          </div>
          <hr className="border-[1px]" />
          <div className="   flex justify-center items-center">
            <button
              className="text-[#3222C6]"
              onClick={() => setShowHiddenContent(!showHiddenContent)}
            >
              See All Products
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className=" ml-3 my-3 text-2xl font-bold">Companies</p>

        <div className="border-2 rounded-lg m-2  ">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-6    ${
              showHiddenContent2
                ? " h-auto overflow-hidden"
                : "max-h-[200px] overflow-hidden"
            }    `}
          >
            {/* {Chat.map((index) => (
              <SearchCardTwo
                key={index.title}
                title={index.title}
                description={index.description}
                time={index.time}
                image={index.image}
                status={index.status}
              />
            ))} */}
            {data
              .filter((item) => item.entityType === "party")
              .map((party, index) => {
                return (
                  <SearchCardTwoPublic
                    key={party.Uid}
                    title={party.party.businessname}
                    Uid={party.Uid}
                    // description={/* Description Here */}
                    description={
                      party?.branch[0]?.country
                        ? party?.branch[0]?.country
                        : party?.branch[0]?.city
                    }
                    // image={}
                  />
                );
              })}
          </div>
          <hr className="border-[1px]" />

          <div className="flex justify-center items-center">
            <button
              className="text-[#3222C6]"
              onClick={() => setShowHiddenContent2(!showHiddenContent2)}
            >
              See All Companies
            </button>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg m-2  ">
        <div
          className={`  items-center justify-center gap-6    ${
            showHiddenContent3
              ? " h-auto overflow-hidden"
              : "max-h-[200px] overflow-hidden"
          }    `}
        >
          {Jobs.map((index) => (
            <JabCard
              key={index.key}
              Name={index.Name}
              position={index.position}
              Description={index.Description}
              Para={index.Para}
            />
          ))}
        </div>
        <hr className="border-[1px]" />

        <div className="flex justify-center items-center">
          <button
            className="text-[#3222C6]"
            onClick={() => setShowHiddenContent3(!showHiddenContent3)}
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchAllPublic;
