import React, { useEffect, useState } from "react";
import { MdOutlineAddTask, MdPersonAddAlt1 } from "react-icons/md";
import { Search } from "../../../../data";
import Avatar from "../../../../Fields/Avatar/avatar";
import Button from "../../../../Fields/Button/button";
import { useLocation,useParams } from "react-router-dom";
import alternativeProfile from "../../../../assets/image/alternativeProfile.png";
import axios from "axios";
import { useCookies } from "react-cookie";
function SearchCompanyPublic() {
  const { name } = useParams();
  // Decode name if needed
  // const decodedName = name.includes("%")
  //   ? decodeURIComponent(name).split(" ")[0]
  //   : name.split(" ")[0];

  // console.log(decodedName);
  const [DataProducts, setSearchCompany] = useState(null); // Renamed state variable
  const [connectionStatus, setConnectionStatus] = useState({});
  const [filter, setFilter] = useState("");
  const [cookies] = useCookies(["user"]);

  const handleSearch = async () => {
    try {
      const url = "https://search.qa.addissystems.et/partially";
      const response = await axios.post(url, {
        query: name,
      });

      const formattedResults = response.data

        .filter((item) => item.entityType === "party")
        .map((item) => ({
          businessname: item.party.businessname,
          Uid: item.Uid,
          imageUrl: item.imageUrl,
        }));

      setSearchCompany(formattedResults);
      console.log(formattedResults);
    } catch (error) {
      console.error("Error performing search", error.message);
    }
  };
  useEffect(() => {
    handleSearch();

    // Assuming DataProducts is available at this point
    if (DataProducts) {
      DataProducts.forEach(async (item) => {
        try {
          const url = `https://connection.qa.addissystems.et/connection/get/${cookies?.user?.Uid}/${item.Uid}`;
          const response = await axios.get(url);
          if (response.data.sender.Uid === cookies?.user?.Uid) {
            setConnectionStatus((prevStatus) => ({
              ...prevStatus,
              [item.Uid]: "Pending",
            }));
          } else if (response.data.receiver.Uid === cookies?.user?.Uid) {
            setConnectionStatus((prevStatus) => ({
              ...prevStatus,
              [item.Uid]: "Accept/Decline",
            }));
          }
        } catch (error) {
          setConnectionStatus((prevStatus) => ({
            ...prevStatus,
            [item.Uid]: "Connect",
          }));
        }
      });
    }
  }, [DataProducts]);

  const handleRequestConectionlClick = async (targetUid) => {
    try {
      const url = `${import.meta.env.VITE_SEND_CONNECION}`;
      const response = await axios.post(
        url,
        {
          node1: cookies?.user?.Uid?.toString(),
          node2: targetUid.toString(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Successful Response:", response.data);
    } catch (error) {
      console.error(
        "Error in handleRequestConectionlClick:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // Decode the search term if it exists

  return (
    <div className=" border-gray-300 max-w-[780px] md:w-[780px] rounded-md shadow-lg">
      <div className=" flex justify-between items-center   px-4 ">
        <h1 className="text-xl font-bold ">Search result company</h1>
        <div className="flex justify-center items-center  gap-4">
          <p>Sort By:</p>
          <select
            className=" border-2 p-2 border-blue-800 outline-none  "
            placeholder="Select"
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
          ? item.isAccepted == true
          : filter === "" || filter == "all"
          ? item
          : filter == "connected"
          ? item.isConnected == true && item.isAccepted == true
          : null
      )?.map((search, index) => {
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between md:items-center   px-4 "
          >
            <div className="justify-start flex items-center lg:justify-center gap-2 ">
              <Avatar img={search.image ? search.image : alternativeProfile} />
              <h2 className=" font-bold text-[#000] text-center text-[17px] ">
                {search?.businessname}
              </h2>
            </div>

            <div className=" flex gap-4 py-4 items-center">
              {search.isAccepted === false ? (
                <div className="flex gap-4">
                  <Button text={"Accept"} filled color="[#D71A62]" />
                  <Button text={"Decline"} color="[#D71A62]" />
                </div>
              ) : (
                <div>
                  <Button
                    text={search.isConnected ? "Connected" : "Connect"}
                    icon={
                      search.isConnected ? (
                        <MdOutlineAddTask />
                      ) : (
                        <MdPersonAddAlt1 />
                      )
                    }
                    iconPossition="left"
                    color="[#D71A62]"
                    filled={search.isConnected ? false : true}
                    onClick={() => {
                      if (!search.isConnected) {
                        handleRequestConectionlClick(search.Uid);
                      }
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}

      <a href="" className="flex flex-col justify-center items-center pb-4">
        <p className="flex justify-center text-[#3222C6]">See More</p>
        <div className="h-1 w-12 bg-[#3222C6] "></div>
      </a>
    </div>
  );
}

export default SearchCompanyPublic;
