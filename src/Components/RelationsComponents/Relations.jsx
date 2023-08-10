import React from "react";
import RelationCard from "./RelationCard";
import { Relation } from "../../data";
function Relations() {
  return (
    <div className="flex flex-col  md:flex-row items-center mb-8 ">
      <div className="mx-auto grid grid-cols-2 justify-items-center gap-5 px-2 sm:grid-cols-2 sm:px-0  md:grid-cols-3 lg:grid-cols-4">
        {Relation.map((Relation) => (
          <RelationCard
            key={Relation.key}
            title={Relation.title}
            image={Relation.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Relations;
