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
const fetchRecordsOfRelation = () => {

    try {
      setLoading(true);
       const url= `${import.meta.env.VITE_FETCH_ACCEPTED_RELATION}/${cookies?.user.Uid}`
    axios.get(url
        ,
        )
      .then((res) => {
        setDataSource(res.data);
        // console.log(res.data)
        setLoading(false);
         
      });
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
   
  };
  fetchRecordsOfRelation();
  })
  
 
  return (
    <div>
      <div className="flex flex-col  md:flex-row items-center ">
        <div className="  lg:mt-3 sm:mt-2  grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-2 md:gap-1 justify-items-center lg:gap-4 mb-4">
          {dataSource?.map((Relation) => (
            <RelationCard
            key={Relation?.id}
            id={Relation?.id}
            type={Relation?.type}
            title={Relation?.title}
            companyName={Relation?.account[0]?.party}
            profilePic= {Relation?.account[0]?.profilePicture}
            _id={Relation?.account[0]?._id} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Relations;
