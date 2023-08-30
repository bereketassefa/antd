import React, { useState } from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import Button from "../../Fields/Button/button";
import Avatar from "../../Fields/Avatar/avatar";
import { Recomend } from "../../data";
import axios from "axios";
import { useCookies } from "react-cookie";
function RecomendedRelation() {
  const [DataRecommendation, setRecommendation] = useState([]);
  const [cookies] = useCookies(['User']);

  const fetchRecomendation = () => {
    axios
      .post(import.meta.env.VITE_GET_RECOMMENDATION,{ Uid: cookies?.user.Uid })
      .then((res) => {
        console.log("Recommendation response:", res.data); // Log the response
        // Check if the data is an array, if not, set it to an empty array
        const recommendationData = Array.isArray(res.data) ? res.data : [];
        setRecommendation(recommendationData);
      });
  };
  // fetchRecomendation();
  return (
    <div className="mx-auto grid  grid-cols-2 justify-items-center gap-5 px-2 sm:grid-cols-3 sm:px-0  pb-4 lg:grid-cols-4">
      {DataRecommendation.map((recomeded) => {
        return (
          <div className="flex-col  justify-center items-center w-[185px] h-[160px] border-2 border-blue-800 ">
            <div className=" flex-col items-center justify-center py-4 ">
              <div className=" flex justify-center">
                {" "}
                <Avatar img={recomeded?.account?.party} />
              </div>
              <h2 className=" mt-2 font-bold text-[#000] text-center text-[17px]">
                {recomeded.title}
              </h2>
            </div>

            <div className="flex justify-center">
              {" "}
              <Button
                text="Accept"
                icon={<BsFillPersonPlusFill />}
                iconPossition="left"
                color="[#D71A62]"
                filled
                onClick={null}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecomendedRelation;
