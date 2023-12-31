import React from "react";

import Card from "./Card/card";
import comment1 from "../../../assets/logo/comment1.png";
import logo from "../../../assets/logo/addisLogoS.png";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { message } from "antd";
import googleApp from "../../../assets/image/play store -02.png";
import Appstor from "../../../assets/image/app store-03.png";
import SociaCard from "./Card/SociaCard";
import { Link, NavLink } from "react-router-dom";
import { useScrollPosition } from "../NewsHolder/useScrollPosition";

export default function CardHolder() {
  const [dataSource, setDataSource] = useState([]);
  const [dataSourceRelation, setDataRelation] = useState([]);
  const [DataRecommendation, setRecommendation] = useState([]);
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const elementRef = useRef(null);
  const [error, setError] = useState(null);
  const [cookies] = useCookies(["User"]);
  // console.log(dataSource)
  const [conts, setconts] = useState(false)

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
  const fetchRecordsOfProduct = async () => {
    try {
      setLoading(true);
      const url = `${import.meta.env.VITE_GET_PRODUCT_BY_UID}/${
        cookies?.user?.Uid
      }`;
      axios.get(url).then((res) => {
        setProduct(res.data);
        // console.log(res.data);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchRecordsOfRelation = async () => {
    try {
      // setLoading(true);
      const url = `${import.meta.env.VITE_FETCH_ACCEPTED_RELATION}/${
        cookies?.user.Uid
      }`;
      const res = await axios.get(url);
      if (res.data.status === 404) {
        // console.log("No data found for the provided Uid");
      }

      setDataSource(res.data);
      // console.log(res.data[0])
    } catch (error) {
      console.warn("empty");
      // If you'd like to show the user a notification, you could use Ant Design's message component like so:
      // message.error('An error occurred while fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchRelationRequest = async () => {
    const url = `${import.meta.env.VITE_FETCH_RELATION_REQUEST}/${
      cookies?.user.Uid
    }`;
    axios.get(url).then((res) => {
      setDataRelation(res.data);
      //  console.log(res.data);
    });
  };

  const fetchRecomendation = async () => {
    axios
      .post(import.meta.env.VITE_GET_RECOMMENDATION, { Uid: cookies?.user.Uid })
      .then((res) => {
        //  console.log("Recommendation response:", res.data); // Log the response
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
      type: "product",
      title: "Products",
      data: Product,
    },
    {
      id: 2,
      type: "relationRecom",
      title: "Recommended Relations",
      data: DataRecommendation,
    },
    {
      id: 3,
      type: "relationReq",
      title: "Relation Requests",
      data: dataSourceRelation,
    },
    {
      id: 4,
      type: "relations",
      title: "Relations",
      data: dataSource,
    },
  ];
  // sticky top-[65px]
  
  return (
    // <div id="side">
    <div 
      className={`dark:bg-[#1b1f23] hidden lg:flex items-start justify-center w-[300px] flex-col 
      gap-2   top-24 mt-2 sticky`}
    >
      {cards?.map((items) => {
        // Check if items.data has data
        if (items?.data?.length > 0) {
          return (
            <Card
              key={items?.id}
              id={items?.id}
              type={items?.type}
              title={items?.title}
              data={items?.data?.slice(0, 3)}
            />
          );
        } else {
          // If no data, return null (nothing will be rendered for this card)
          return null;
        }
      })}

      <div className={`sticky top-0  "}`}>
        <SociaCard />
        <div className="  w-[300px] p-4 flex flex-col gap-2   bg-transparent  drop-shadow-xl ">
          <div>
            <ul className="flex  justify-evenly gap-2 text-[11px] ">
              <Link to="https://www.addissystems.et/about-us">
                <li className="text-[#00000099] ">About </li>
              </Link>

              <Link to="">
                <li className="text-[#00000099]">Help center</li>
              </Link>
              <Link to="">
                <select className=" bg-transparent text-[#00000099] ">
                  <option value="">terms & privacy</option>
                </select>
              </Link>
            </ul>
          </div>

          <div></div>
          <Link to="">
            <div className="flex justify-center items-center">
              <div>
                <img src={logo} alt="" className="w-5  "></img>
              </div>

              <p className="text-[11px]  ">
                Copyright © 2023 All right reserved.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
}
