import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProductCard from "./productCard";
import RequestCard from "./requestCard";
import RecommendedRelationCard from "./recommendedRelationCard";
import RelationCard from "./relationCard";
import SociaCard from "./SociaCard";

function getFirstWord(str) {
  if (!str) return "";
  const words = str.split(" ");
  return words[0];
}

export default function Card({ android, apple, id, type, title, data }) {
  //  console.log(data.account.party)
  return (
    <div>
      <div
        className="dark:bg-[#1b1f23] w-[300px] p-4 flex flex-col gap-4 bg-cards drop-shadow-xl"
        key={id}
      >
        <div className="w-full flex items-center justify-between">
          <h1 className="dark:text-white font-bold text-smallP md:text-midP lg:text-largeP">
            {title}
          </h1>
          <div className="p-0">
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="dark:text-white text-largeP md:text-smallT cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          {data?.map((items) => {
            return (
              <>
                {type === "product" ? (
                  <ProductCard
                    key={items.key}
                    img={items?.imageUrl}
                    productName={items?.productName}
                    // sales={items.sales.toLocaleString()}
                  />
                ) : type === "relationReq" ? (
                  <RequestCard
                    Uid={items?.account?.Uid}
                    id={items.account?._id}
                    connections={items?.connections}
                    img={items.img}
                    companyName={items?.account?.party}
                  />
                ) : type === "relationRecom" ? (
                  <RecommendedRelationCard
                    Uid={items?.account?._id}
                    id={items.Uid}
                    img={items.img || getFirstWord(items.companyName)}
                    companyName={items?.account?.party}
                  />
                ) : type === "relations" ? (
                  <RelationCard
                    id={items?.account?._id}
                    Uid={items?.Uid}
                    img={items?.img}
                    companyName={items?.account?.party}
                  />
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    
    </div>
  );
}
