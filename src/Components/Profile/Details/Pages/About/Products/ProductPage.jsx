import React from "react";
import { Collapse } from "antd";
import { product } from "../../../../../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "./ProductCard";
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
function ProductPage() {

  const { id } = useParams();  // Destructure id from useParams
  const [cookies] = useCookies(['user']);

  // console.log(cookies.user._id);
  const isUserIdEqual = cookies.user._id === id;
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
                {
                  isUserIdEqual && (
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
                  )
                }
              
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
