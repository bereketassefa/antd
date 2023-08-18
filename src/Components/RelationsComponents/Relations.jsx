import React from "react";
import RelationCard from "./RelationCard";
import { Relation } from "../../data";
export default function Relations() {
  return (
    <div>
    <div className="flex flex-col  md:flex-row items-center mb-8 ">
      <div className="  lg:mt-3 sm:mt-2  grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-2 md:gap-1 justify-items-center lg:gap-4">
        {Relation.map((Relation) => (
          <RelationCard
            key={Relation.key}
            title={Relation.title}
            image={Relation.image}
          />
        ))}
      </div>
    </div>
  </div>
  )
}
