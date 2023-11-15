import React, { useEffect, useState } from "react";
import { faUserPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from "../../Fields/Avatar/avatar";
import axios from "axios";
import alternativeProfile from "../../assets/image/alternativeProfile.png";
import { useCookies } from "react-cookie";

function RecomendedRelation() {
  const [DataRecommendation, setRecommendation] = useState([]);
  const [loadingSend, setLoadingSend] = useState(false);  // Add this line
  const [cookies] = useCookies(['User']);

  const ownerUid = cookies?.user?.Uid;

  const fetchRecomendation = () => {
    axios
      .post(import.meta.env.VITE_GET_RECOMMENDATION, { Uid: cookies?.user?.Uid })
      .then((res) => {
        const recommendationData = Array.isArray(res.data) ? res.data : [];
        // Add loading and success states to each recommendation
        const recommendationWithStates = recommendationData.map((recomeded) => ({
          ...recomeded,
          loadingSend: false,
          isSuccessful: false,
        }));
        setRecommendation(recommendationWithStates);
      });
  };

  useEffect(() => {
    fetchRecomendation();
  }, []);

  const handleRequestConectionlClick = async (recomededIndex) => {
    setLoadingSend(true);
    try {
      const url = `${import.meta.env.VITE_SEND_CONNECION}`;
      const res = await axios.post(
        url,
        {
          node1: ownerUid.toString(),
          node2: DataRecommendation[recomededIndex]?.account?.Uid?.toString(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Update the success state for the specific recommendation card
      setRecommendation((prevRecommendations) => {
        const updatedRecommendations = [...prevRecommendations];
        updatedRecommendations[recomededIndex].isSuccessful = true;
        return updatedRecommendations;
      });
      fetchRecomendation()
    } catch (error) {
      console.error(
        "Error in handleRequestConnectionClick:",
        error.response ? error.response.data : error.message
      );
      fetchRecomendation()
    } finally {
      // Update the loading state for the specific recommendation card
      setRecommendation((prevRecommendations) => {
        const updatedRecommendations = [...prevRecommendations];
        updatedRecommendations[recomededIndex].loadingSend = false;
        return updatedRecommendations;
      });
      setLoadingSend(false);
      fetchRecomendation();
    }
  };

  return (
    <div className="mx-auto grid grid-cols-2 justify-items-center gap-2 px-2 sm:grid-cols-3 sm:px-0 pb-4 lg:grid-cols-3">
      {DataRecommendation.map((recomeded, index) => (
        <div key={`${recomeded?.account?.Uid}_${index}`} className="flex-col justify-center items-center w-[185px] h-[160px] border-2 border-blue-800">
          <div className="flex-col items-center justify-center py-4">
            <div className="flex justify-center">
              <Avatar img={recomeded?.account?.profilePicture ? recomeded?.account?.profilePicture : alternativeProfile} />
            </div>
            <h2 className="mt-2 text-[#000] text-center text-[17px]">
              {recomeded?.account?.party}
            </h2>
          </div>

          <div className="flex justify-center">
            {recomeded.loadingSend ? (
              <div className="spinner"></div>
            ) : recomeded.isSuccessful ? (
              <FontAwesomeIcon icon={faCheck} className='text-largeP md:text-smallT text-success' />
            ) : (
              <FontAwesomeIcon onClick={() => handleRequestConectionlClick(index)} icon={faUserPlus} className='text-largeP md:text-smallT text-secondary cursor-pointer' />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecomendedRelation;
