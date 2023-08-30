import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
export default function RecommendedRelationCard({id , img, companyName,Uid}) {
  function truncateCompanyName(name) {
    return name && name.length > 8 ? name.substring(0, 8) + '...' : name;
  }
  const navigate= useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(['User']);
    
    const handleRequestConectionlClick = async () => {
      try {
        // Get node2 value from cookies
        const node2Value = cookies?.user.Uid
    
        // Specify your node1 value (assuming it's a variable in this scope)
      
        const url = `${import.meta.env.VITE_SEND_CONNECTION}`
        // Make the POST request
        const response = await fetch(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ node1: id, node2: node2Value })
        });
    
        console.log(response);
    
        if (!response.ok) {
          throw new Error("Request failed");
        }
    
        const data = await response.json();
        console.log(data);
    
      } catch (error) {
        console.error(error);
      }
    };
    
  const hadleNavigateProfile = async(e)=>{
    e.preventDefault();
    navigate(`/feed/profile/${Uid}`)

    // try {
    //     const response = await axios.get(`http://localhost:8013/find-my-data/${Uid}`);

    //       console.log(response.data)
    //     // console.log(cookies.user._id)
    //     window.location.href = `/feed/profile/${Uid}`;
         
    // } catch (error) {
    //     console.log(error);
    // }
}
    function getFirstLetter(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase();
    }
    return (
        <div className='flex items-center justify-between' key={id}>
            <div className='flex gap-2 items-center'>
            {
                    img 
                    ? <Avatar  img={img} />
                    : <div onClick={hadleNavigateProfile} className="avatar-placeholder">{getFirstLetter(companyName)}</div>
                }
                <h1 className='text-smallP md:text-midP lg:text-largeP' >{truncateCompanyName(companyName)}</h1>
            </div>

            <div className='flex gap-2'>
                <FontAwesomeIcon   onClick={handleRequestConectionlClick} icon={faUserPlus} className='text-largeP md:text-smallT text-secondary' />                    
            </div>
        </div>
    )
}
