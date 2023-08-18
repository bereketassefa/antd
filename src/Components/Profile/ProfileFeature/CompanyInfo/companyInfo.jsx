import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faPencil,
  faShareNodes,
  faUserPlus,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import profileHolder from "../../../../assets/img/profileHolder.png";
import Button from "../../../../Fields/Button/button";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function CompanyInfo({ data, Uid }) {
  // const  {id}  = useParams();
  const [cookies] = useCookies(["user"]);
  const [Data, setData] = useState(null);
  const [res, setRes] = useState(null);
  const [sender, setSender] = useState(null);
  const [countData, setCountData] = useState();
  //    console.log(data.account[0].Uid)
  //    console.log(Uid)
  const OwnerUid = cookies?.user.Uid;
  // const ownerid = cookies?.user._id;
  const anotherUid = data?.account[0]?.Uid;
  //  const anotherid= data?.account[0]?._id
  const handleRequestConectionlClick = async () => {
    try {
      const url= `${import.meta.env.VITE_SEND_CONNECION}`
      const response = await axios.post(url, {
        node1:OwnerUid.toString(),
        node2: anotherUid.toString() 
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      console.log("Successful Response:", response.data);
    } catch (error) {
      console.error("Error in handleRequestConectionlClick:", error.response ? error.response.data : error.message);
    }
  };
  
  useEffect(() => {
    const checkTheStatus = async () => {
      try {
        const url = `${
          import.meta.env.VITE_CHECK_THE_STATUS
        }/${OwnerUid}/${anotherUid}`;

        // Using Axios to send a GET request
        const response = await axios.get(url, {
         
        });
        // console.log("Calling URL:", url);

        if (response.status !== 200) {
          throw new Error("Request failed");
        }

        // console.log("API Response:", response.data);
        setRes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    checkTheStatus();
  });

  useEffect(() => {
    const FetchCountRetation = async () => {
      try {
        const url = `${import.meta.env.VITE_COUNT_RELATION}/${Uid}`;
        const response = await fetch(url, {
          method: "GET", // Or the appropriate HTTP method for your API
        });

        if (!response.ok) {
          throw new Error("Request failed"); // Handle non-successful response
        }

        const dataa = await response.json();
        //    console.log(dataa)
        setCountData(dataa);
        // Process the response data if needed
      } catch (error) {
        console.error(error); // Handle the error, e.g., show an error message
      }
    };
    FetchCountRetation();
  });

  const handleAcceptClick = async () => {
    try {
      const url = `${import.meta.env.VITE_ACCEPT_THE_RELATION}/${
        res[0].relation?.properties?.id
      }`;
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
    const handlecheckWhoisSender = async () => {
    try {
      const url = `http://localhost:8013/connection/get/${OwnerUid}/${anotherUid}`;
      const response = await fetch(url, {
        method: "GET", // Or the appropriate HTTP method for your API
      });

      if (!response.ok) {
        throw new Error("Request failed"); // Handle non-successful response
      }

      const data = await response.json();
      setSender(data)
      console.log(data)
    } catch (error) {
      console.error(error); // Handle the error, e.g., show an error message
    }
    // Handle cancel click logic here
  };
  handlecheckWhoisSender();

  const handleCancelClick = async () => {
    try {
      const url = `${import.meta.env.VITE_CANCEL_THE_RELATION}/${
        res[0].relation?.properties?.id
      }`;
      const response = await fetch(url, {
        method: "DELETE", // Or the appropriate HTTP method for your API
      });

      if (!response.ok) {
        throw new Error("Request failed"); // Handle non-successful response
      }

      const data = await response.json();
      //   console.log(data); // Process the response data if needed
    } catch (error) {
      console.error(error); // Handle the error, e.g., show an error message
    }
    // Handle cancel click logic here
  };
  // const handleCancelClick = async () => {
  //     try {
  //         const url = `${import.meta.env.VITE_FIND_MY_DATA}/${id}`
  //       const response = await fetch(
  //         url,
  //          {
  //         method: "GET", // Or the appropriate HTTP method for your API
  //       });

  //       if (!response.ok) {
  //         throw new Error("Request failed"); // Handle non-successful response
  //       }

  //       const data = await response.json();
  //         setData(data);

  //        // Process the response data if needed
  //     } catch (error) {
  //       console.error(error); // Handle the error, e.g., show an error message
  //     }

  //     // Handle cancel click logic here
  //   };

  // handleCancelClick()
  // console.log(Data)

  let buttonText = "Connect";
  let buttonIcon = <FontAwesomeIcon icon={faUserPlus} />;  // default icon

 
  if (res && res[0] && res[0].relation && res[0].relation.properties.status) {
      const status = res[0].relation.properties.status;
  
      if (status === "Accepted") {
          buttonText = "Connected";
          buttonIcon = <FontAwesomeIcon icon={faUserCheck} />;
      } else if (status === "pending") {
          if (sender && sender.sender === OwnerUid.toString()) {
              buttonText = "Pending";
          } else if (sender && sender.receiver === OwnerUid.toString()) {
              buttonText = "Accept";
          }
      }
  }
  
  return (
    <>
      <div className="w-full flex flex-col gap-2  mt-[-5rem]  md:mt-[-10rem]  ">
        <div className="w-full flex items-end justify-between">
          <div className="bg-white w-fit p-0  ml-[1rem] md:ml-[3rem]  mt-[2rem] md:mt-[6rem]  w-[100px] md:w-[130px] aspect-square  flex justify-end">
            <div className="w-full">
              <img src={profileHolder} alt="" />
            </div>
            <div className="bg-white p-[3px] rounded-full absolute mt-[-0.5rem] mr-[-0.5rem]">
              {data &&
                data.account &&
                data.account[0] &&
                data.account[0]._id === cookies.user._id && (
                  <div className="bg-secondary w-fit p-2 rounded-full flex cursor-pointer">
                    <FontAwesomeIcon
                      icon={faPencil}
                      className="text-white text-midP"
                    />
                  </div>
                )}
            </div>
          </div>
          {data &&
            data.account &&
            data.account[0] &&
            data.account[0]._id === cookies.user._id && (
              <div className=" mr-[1rem]">
                <Button
                  text={"Edit Profile"}
                  filled={false}
                  color={"secondary"}
                />
              </div>
            )}
        </div>
        <div className="flex flex-col gap-4 w-full  md:ml-[3rem] max-w-[600px]   ">
          <div className="w-full flex flex-col gap-1">
            <h1 className="flex gap-2 items-center text-smallT font-bold">
              {data?.account[0]?.party} <img alt="" />{" "}
              {/* {data?.account[0]?.party} <img src={verified} alt="" />{" "} */}
            </h1>

            <p className="w-full text-smallP">{data?.account[0]?.party}</p>

            <div className="flex gap-4 items-center">
              <span className="flex gap-2 items-center">
                <h1 className="font-bold text-smallP">{countData?.count}</h1>
                <p className="text-smallP">Relations</p>
              </span>
              <span className="flex gap-2 items-center">
                {/* <h1 className='font-bold text-smallP'>2.4K</h1>
                                <p className='text-smallP'>Views</p> */}
              </span>
            </div>
          </div>
          {data &&
            data.account &&
            data.account[0] &&
            data.account[0]._id !== cookies.user._id && (
              <div className="w-full flex items-center justify-start gap-2 flex-wrap">
                <Button
                  onClick={() => {
                    if (buttonText === "Connect") {
                      handleRequestConectionlClick();
                    } else if (buttonText === "Accept") {
                      handleAcceptClick();
                    } else if (buttonText === "Pending") {
                      const userConfirmed = window.confirm(
                        "Are you sure you want to cancel sending?"
                      );
                      if (userConfirmed) {
                        handleCancelClick();
                      }
                    } else if (buttonText === "Connected") {
                      const userConfirmed = window.confirm(
                        "Are you sure you want to disconnect?"
                      );
                      if (userConfirmed) {
                        handleCancelClick();
                      }
                    }
                  }}
                  text={buttonText}
                  filled={true}
                  color={"secondary"}
                  icon={buttonIcon}
                  iconPossition="left"
                />

                <Button
                  text={"Message"}
                  filled={false}
                  color={"secondary"}
                  icon={<FontAwesomeIcon icon={faMessage} />}
                  iconPossition="left"
                />
              </div>
            )}
          {data &&
            data.account &&
            data.account[0] &&
            data.account[0]._id === cookies.user._id && (
              <div className="w-full flex items-center justify-start gap-2 flex-wrap">
                <Button
                  text={"Invite"}
                  filled={false}
                  color={"primary"}
                  icon={<FontAwesomeIcon icon={faShareNodes} />}
                  iconPossition={"left"}
                />
              </div>
            )}
        </div>
      </div>
    </>
  );
}
