import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'
import { useCookies } from 'react-cookie'
export default function RecommendedRelationCard({id , img, companyName}) {
    const [cookies, setCookie, removeCookie] = useCookies(['User']);
    
    const handleRequestConectionlClick = async () => {
      try {
        // Get node2 value from cookies
        const node2Value = cookies?.user.Uid
    
        // Specify your node1 value (assuming it's a variable in this scope)
        const node1Value = '';
    
        // Make the POST request
        const response = await fetch(`http://localhost:8013/connection`, {
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
    
    function getFirstLetter(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase();
    }
    return (
        <div className='flex items-center justify-between' key={id}>
            <div className='flex gap-2 items-center'>
            {
                    img 
                    ? <Avatar img={img} />
                    : <div className="avatar-placeholder">{getFirstLetter(companyName)}</div>
                }
                <h1 className='text-smallP md:text-midP lg:text-largeP' >{companyName}</h1>
            </div>

            <div className='flex gap-2'>
                <FontAwesomeIcon   onClick={handleRequestConectionlClick} icon={faUserPlus} className='text-largeP md:text-smallT text-secondary' />                    
            </div>
        </div>
    )
}
