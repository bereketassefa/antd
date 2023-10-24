import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import ButtonChevron from "../PublicComponents/ButtonChevron";
import blogbanner2 from "../../assets/PuplicImage/RingTern-Blog-post.jpg";
 
function BlogModal() {
  return (
    <div className="   ">
      <div className=" flex justify-between items-center">
        <div className="flex justify-center items-center">
          <MdOutlineKeyboardArrowLeft /> Back
        </div>
        {/* <AiOutlineClose /> */}
      </div>
      <div>
        <div className="flex   items-center">
          <div>
            {" "}
            <h1 className="text-xl  font-bold my-3">Main Topic</h1>
            <h3 className="text-[15px]  font-bold my-3">
              Supporting sub topic here
            </h3>
            <p className=" max-w-[500px] mx-6">
              Lorem ipsum dolor sit amet, ut mea corpora expetenda. Quod
              nominavi sea ea, iudicabit inciderint vituperatoribus nam at. Pri
              discere aliquid in, mei ne mucius graecis eligendi. Animal
              argumentum vel id. At malis iracundia qui, illud velit percipit ne
              his, eu dicta mazim accusamus nec. Id per nullam
            </p>
          </div>
          <img
            src={blogbanner2}
            alt=""
            className=" w-[300px] h-48 object-cover"
          ></img>
        </div>
        <p className=" mx-6">
          Lorem ipsum dolor sit amet, ut mea corpora expetenda. Quod nominavi
          sea ea, iudicabit inciderint vituperatoribus nam at. Pri discere
          aliquid in, mei ne mucius graecis eligendi. Animal argumentum vel id.
          At malis iracundia qui, illud velit percipit ne his, eu dicta mazim
          accusamus nec. Id per nullam graeco platonem, case pertinax molestiae
          vix ut.
        </p>
        <div>
          <h2 className="text-xl  font-bold my-3">Subtopic</h2>
          <p className="mx-6">
            Lorem ipsum dolor sit amet, ut mea corpora expetenda. Quod nominavi
            sea ea, iudicabit inciderint vituperatoribus nam at. Pri discere
            aliquid in, mei ne mucius graecis eligendi. Animal argumentum vel
            id. At malis iracundia qui, illud velit percipit ne his, eu dicta
            mazim accusamus nec. Id per nullam graeco platonem, case pertinax
            molestiae vix ut.
          </p>
        </div>
      </div>
      <p className="text-xl  font-bold my-3">Related News</p>
      <div className="border-2 w-64 ">
        <div>
          <img src={blogbanner2} alt="" className="w-10 h-8"></img>
          <p className="max-w-[200px]">
            Lorem ipsum dolor sit amet, ut mea corpora expetenda. Quod nominavi
            sea ea, iudicabit inciderint vituperatoribus nam at. Pri discere
          </p>
          <ButtonChevron text="Read More" />
        </div>
      </div>
    </div>
  );
}

export default BlogModal;
