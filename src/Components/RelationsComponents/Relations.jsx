import { useEffect, useState ,useRef} from 'react';
import RelationCard from "./RelationCard";
import { Relation } from "../../data";
import axios from "axios";
import { useCookies } from 'react-cookie'
function Relations() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [cookies] = useCookies(['user']);


  useEffect(()=>{
const fetchRecordsOfRelation = async() => {

  try {
    const url = `${import.meta.env.VITE_FETCH_ACCEPTED_RELATION}/${cookies?.user.Uid}`;
    const res = await axios.get(url);

    // console.log("API Response:", res.data);  // Debug log to check the API response

    if (Array.isArray(res.data)) {
      setDataSource(res.data);
    } else {
      console.warn("Received data is not an array");  // Debug log if not an array
    }
  } catch (error) {
    console.warn(error);
  } finally {
    setLoading(false);
  }
   
  };
  fetchRecordsOfRelation();
  })
  
  return (
    <div>
      <div className=" flex flex-col  md:flex-row items-center ">
        <div className="lg:mt-3 sm:mt-2 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-2 md:gap-1 justify-items-center lg:gap-4 mb-4">
          {/* Debug Line */}
         
  
          {/* Check if dataSource is an Array before mapping */}
          {Array.isArray(dataSource) ? dataSource.map((Relation) => (
            <RelationCard
              key={Relation?.id}
              id={Relation?.id}
              type={Relation?.type}
              title={Relation?.title}
              companyName={Relation?.account?.party}
              profilePic= {Relation?.account?.profilePicture}
              _id={Relation?.account?._id} 
            />
          )) : "Data source is not an array"}
        </div>
      </div>
    </div>
  );
  
}
export default Relations;
