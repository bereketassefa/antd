import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import { product } from "../../../../../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "./ProductCard";
import { Link, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Modal } from "antd";

import AddItemsPage from "../../../../../../Pages/AddProduct/AddItemsPage";
function ProductPage() {
  const { id } = useParams(); // Destructure id from useParams
  const [cookies] = useCookies(["user"]);
  const isUserIdEqual = cookies.user._id === id;
  const [products, setProducts] = useState([]);

  // console.log(id);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // console.log(id);
  useEffect(() => {
    // Define an async function
    const fetchProducts = async () => {
      try {
        const url = `${import.meta.env.VITE_GET_PRODUCT_BY_ID}/${id}`;
        // Replace 'YOUR_SERVER_URL' with your actual server URL
        const response = await axios.get(url);
        setProducts(response.data); // Set fetched data to state
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    // Call the async function
    fetchProducts();
  }, [id]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        centered
        visible={isModalOpen}
        width={700}
        footer={null}
        onCancel={handleCloseModal}
      >
        <AddItemsPage />
      </Modal>
      <Collapse
        className="w-full bg-zinc-50"
        items={[
          {
            key: "1",
            label: (
              <div className="w-full flex items-center justify-between">
                <h1 className="font-bold text-smallP">Products</h1>
                {isUserIdEqual && (
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      icon={faPencil}
                      className="text-secondary text-smallT cursor-pointer"
                    />

                    <FontAwesomeIcon
                      icon={faPlus}
                      className="text-secondary text-smallT cursor-pointer"
                      onClick={handleOpenModal}
                    />
                  </div>
                )}
              </div>
            ),
            children: (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-y-scroll max-h-[430px] scrole-overflow  items-center justify-center gap-3 ">
                {products.map((product) => (
                  <ProductCard
                    key={product.key}
                    productName={product.productName}
                    image={product.imageUrl}
                    place={product.place}
                    price={product.ProductPrice}
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
