import React from "react";
import Button from "../../Components/PublicComponents/Button";
import { GiCheckMark } from "react-icons/gi";

const Submitted = () => {
  return (
    <main className="">
      <div className=" mx-auto my-4 max-w-7xl bg-slate-200 px-2 py-24 ">
        <div className=" text-center ">
          <div className=" mx-auto flex h-40 w-40 items-center justify-center rounded-full border-2 border-addispink text-8xl text-addispink">
            <div className="animate-pulse">
              <GiCheckMark />
            </div>
          </div>
          <h1 className=" mt-8 text-3xl font-semibold text-addispink">
            Thank You!
          </h1>
          <p className="text-lg">You have successfully submitted.</p>
        </div>
        <div className="mx-auto max-w-[500px]">
          <h1 className=" mt-16 text-center text-2xl font-medium ">
            Survery Form
          </h1>
          <p className="text-center">
            Please help us by filling this survery form
          </p>
          <form className=" flex flex-col ">
            <select
              className="my-3 rounded py-3 indent-2 outline-addisblue"
              name="info-place"
            >
              <option value={""}>where did you hear about us?</option>
              <option value={"social-media"}>Social Media</option>
              <option value={"mouth"}>Word of mouth</option>
              <option value={"recommendatin"}>By Recommendation</option>
              <option value={"friends"}>Friends</option>
            </select>
            <h4>Have you found what you were looking?</h4>
            <div className=" ml-2 flex flex-col">
              <label htmlFor="helpful">
                <input
                  className="mr-2 h-3 w-3"
                  type="radio"
                  id="helpful"
                  name="isHelpful"
                />
                Yes, I found it helpful
              </label>
              <label htmlFor="notMuch">
                <input
                  className="mr-2 h-3 w-3"
                  type="radio"
                  id="notMuch"
                  name="isHelpful"
                />
                Not that much
              </label>
              <label htmlFor="notHelpful">
                <input
                  className="mr-2 h-3 w-3"
                  type="radio"
                  id="notHelpful"
                  name="isHelpful"
                />
                No, I didn't found
              </label>
            </div>
            <label className="mt-3" htmlFor="comment">
              Any Comment/suggestion
              <textarea
                className="mt-1 max-h-60 w-full max-w-[500px] rounded py-2 indent-2 outline-addisblue"
                placeholder="leave us comment"
                rows={3}
              />
            </label>
            <div className=" mt-12 flex justify-between">
              <div className=" ">
                <Button
                  text="Skip"
                  width={70}
                  bg={"bg-slate-300"}
                  bgHover={"hover:bg-slate-400"}
                />
              </div>
              <div className=" shadow-md hover:shadow-lg">
                <Button
                  text="Submit"
                  width={100}
                  bgHover={"hover:bg-addisblue"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Submitted;
