import React from "react";
import { Collapse } from "antd";
import { product } from "../../../../../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "./ProductCard";
function ProductPage() {
  return (
    <div>
      <Collapse
        className="w-full bg-zinc-50"
        items={[
          {
            key: "1",
            label: (
              <div className="w-full flex items-center justify-between">
                <h1 className="font-bold text-smallP">Products</h1>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon
                    icon={faPencil}
                    className="text-secondary text-smallT cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-secondary text-smallT cursor-pointer"
                  />
                </div>
              </div>
            ),
            children: (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-y-scroll max-h-[430px] scrole-overflow   items-center justify-center gap-3">
                {product.map((product) => (
                  <ProductCard
                    key={product.key}
                    productName={product.productName}
                    image={product.image}
                    place={product.place}
                    price={product.price}
                  />
                ))}
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

export default ProductPage;
