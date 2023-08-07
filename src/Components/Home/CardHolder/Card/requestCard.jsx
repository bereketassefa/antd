import  { useEffect, useRef, useState } from "react";
import Avatar from '../../../../Fields/Avatar/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'
import './scss/avatar.scss'


export default function RequestCard({id , img, companyName}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  function getFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase();
}
   useEffect(() => {

    // Fetch data and handle loading and error states here
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8013/connection/${id}`);
        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = await response.json();
        console.log(data); // Process the response data if needed
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error(error);
        setError("Failed to fetch data");
        setLoading(false); // Set loading to false on error
      }
    }

     
    const intervalId= setInterval(()=>{
     fetchData();
    },100)
    return () => clearInterval(intervalId);
  }, [id]); // Run the effect whenever 'id' changes

  const handleAcceptClick = async () => {
    try {
      const response = await fetch(`http://localhost:8013/connection/accept/${id}`, {
        method: "POST", // Or the appropriate HTTP method for your API
      });

      if (!response.ok) {
        throw new Error("Request failed"); // Handle non-successful response
      }

      const data = await response.json();
      console.log(data); // Process the response data if needed
    } catch (error) {
      console.error(error); // Handle the error, e.g., show an error message
    }
    // Handle accept click logic here
  };

  const handleCancelClick = async () => {
    try { 
      const response = await fetch(`http://localhost:8013/connection/cancel/${id}`, {
        method: "DELETE", // Or the appropriate HTTP method for your API
      });

      if (!response.ok) {
        throw new Error("Request failed"); // Handle non-successful response
      }

      const data = await response.json();
      console.log(data); // Process the response data if needed
    } catch (error) {
      console.error(error); // Handle the error, e.g., show an error message
    }
    // Handle cancel click logic here
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
 


  return (
    <div className="flex items-center justify-between" key={id}>
      <div className="flex gap-2 items-center">
      {
                    img 
                    ? <Avatar img={img} />
                    : <div className="avatar-placeholder">{getFirstLetter(companyName)}</div>
                }
        <h1 className="text-smallP md:text-midP lg:text-largeP">{companyName}</h1>
      </div>

      <div className="flex gap-2">
        <div
          onClick={handleAcceptClick}
          className="w-[40px] aspect-square rounded-full flex items-center justify-center border-2 border-primary cursor-pointer"
        >
          <FontAwesomeIcon icon={faCheck} className="text-largeP md:text-smallT text-primary" />
        </div>
        <div
          onClick={handleCancelClick}
          className="w-[40px] aspect-square rounded-full flex items-center justify-center border-2 border-secondary cursor-pointer"
        >
          <FontAwesomeIcon icon={faClose} className="text-largeP md:text-smallT text-secondary" />
        </div>
      </div>
    </div>
  )}
