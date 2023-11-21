import React from "react";
import verifyd from "../../../assets/logo/verified.png";
import Avatar from "../../../Fields/Avatar/avatar";
import { format } from 'date-fns';
import { Link ,useNavigate} from "react-router-dom";
const LikeCard = ({ companyName, image, date, icon,id }) => {
  const formattedDate = date ? format(new Date(date), 'MMM yyyy') : "";
  const navigate= useNavigate()
  const hadleNavigateProfile = async(e)=>{
    e.preventDefault();
    navigate(`/feed/profile/${id}`)
}

  return (
    <div className="flex justify-between items-center    gap-3">
      <div className="flex justify-center items-center gap-3">
        <Avatar onClick={hadleNavigateProfile} className="h-8 w-8" img={image} />
        <div>
          
          <div onClick={hadleNavigateProfile} className="flex items-center gap-2">
           <h1 className="text-black ">
           <Link >
{companyName}
           </Link>
            </h1>
            <img src={verifyd} alt="" className="w-4 h-4 flex items-center " />
          </div>
          <p className="text-[15px] text-gray-800">{formattedDate}</p>
        </div>
      </div>

      <div className="text-2xl">{icon}</div>
    </div>
  );
};

export default LikeCard;
