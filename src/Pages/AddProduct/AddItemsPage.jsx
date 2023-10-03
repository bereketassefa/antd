import React, { useState } from "react";
import { BiMoney } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSolidImageAlt } from "react-icons/bi";
import { message } from "antd";
import axios from "axios";
import { useCookies } from "react-cookie";

function AddItemsPage({ handleModal }) {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productFeatures, setProductFeatures] = useState([]);
  const [feature, setFeature] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [errors, setErrors] = useState({});
  const [productImage, setProductImage] = useState(null);
  const [productPriceError, setProductPriceError] = useState("");
  const [hsnNo, setHsnNo] = useState("");
  const [cookies] = useCookies(["user"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
 if (hsnNo.trim() === "") {
   validationErrors.hsnNo = "HSN Number is required.";
 } else if (!/^\d+$/.test(hsnNo)) {
   validationErrors.hsnNo = "HSN Number must be a numeric value.";
 }
    if (productName.trim() === "") {
      validationErrors.productName = "Product Name is required.";
    }
    if (productDescription.trim() === "") {
      validationErrors.productDescription = "Product Description is required.";
    }
    if (productFeatures.some((feature) => feature.trim() === "")) {
      validationErrors.productFeatures = "Product Features must be filled.";
    }
    if (productPrice.trim() === "") {
      validationErrors.productPrice = "Product Price is required.";
    }

    if (Object.keys(validationErrors).length === 0) {
      handleSubmitProducts();
    } else {
      setErrors(validationErrors);
    }
  };

  const handleSubmitProducts = async () => {
    try {
      const Uid = cookies?.user.Uid;
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("productDescription", productDescription);
      formData.append("ProductFeature", JSON.stringify(productFeatures));
      formData.append("ProductPrice", productPrice);
      formData.append("HsnNo", hsnNo);
      formData.append("image", productImage);
      formData.append("Uid", Uid);

      const url = `${import.meta.env.VITE_ADD_PRODUCTS}`;
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log("Data inserted successfully");
        message.success("Product added successfully!");
        handleModal();
      }
    } catch (error) {
      console.log(error);
      message.error("Failed to add product. Please try again.");
    }
  };

  const handleAddFeature = () => {
    if (feature.length > 2) {
      setProductFeatures([...productFeatures, feature.trim()]);
      setFeature("");
    }
  };

  const handleRemoveFeature = (name) => {
    const updatedFeatures = productFeatures.filter((item) => item !== name);
    setProductFeatures(updatedFeatures);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
  };
  
  return (
    <div className="dark:bg-[#1b1f23] w-full  ">
      <p className="dark:text-white text-2xl font-bold">Add Product</p>
      <hr className="bg-[#B7B7B7] h-[1px] mb-5" />
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex justify-between items-center gap-2 ">
          <div className="">
            <div className="">
              <label
                htmlFor="productName"
                className="dark:text-white text-xl font-semibold text-black"
              >
                <p>Product Name</p>
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="Eg: ABC"
                className="bg-[#FFF]  rounded-lg outline-none bg-transparent w-full px-3 py-2 border-2 border-[#A7A7A7]"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
              {errors.productName && (
                <p className="text-red-500">{errors.productName}</p>
              )}
            </div>
            <div className="">
              <label
                htmlFor="productDescription"
                className="dark:text-white text-xl font-semibold text-black"
              >
                <p>Product Description</p>
              </label>
              <textarea
                id="productDescription"
                name="productDescription"
                placeholder="Eg: Business Analysis 101"
                className="bg-[#FFF]  outline-none bg-transparent px-2  max-w-w-[450px] md:w-[450px] rounded-lg   md:py-4 border-2 border-[#A7A7A7] "
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              ></textarea>
              {errors.productDescription && (
                <p className="text-red-500">{errors.productDescription}</p>
              )}
            </div>
          </div>
          <div className="dark:bg-[#1b1f23]    mt-4">
            <form onSubmit={handleSubmit} noValidate className="">
              <div className="  md:w-[130px]  md:h-[100px] border-2 rounded-lg border-[#A7A7A7] flex flex-col">
                {productImage ? (
                  <img
                    src={URL.createObjectURL(productImage)}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex    justify-center items-center ">
                    <BiSolidImageAlt className=" text-[#555555]  w-20 h-20   rounded-lg" />
                  </div>
                )}
                <input
                  type="file"
                  id="productImage"
                  name="productImage"
                  accept="image/*"
                  style={{ display: "none" }}
                  className=" rounded-lg w-20 h-20  border-2 border-red-900 "
                  onChange={handleImageUpload}
                  required
                />
              </div>
              <div className="mt-2 rounded-md py-1 text-white flex items-center justify-center bg-[#A7A7A7]">
                <label htmlFor="productImage" className="cursor-pointer">
                  Upload
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="  my-2 px-3 py-2 rounded-md border-2 border-[#A7A7A7]">
          <label
            htmlFor="productFeatures"
            className="dark:text-white text-xl font-semibold text-black"
          >
            <p>Product Features</p>
          </label>
          <div className=" flex justify-between items-center  ">
            <hr className="border-2" />
            <input
              type="text"
              name={`productFeature`}
              placeholder=" type here"
              className="bg-[#FFF] outline-none bg-transparent w-full"
              value={feature}
              onChange={(e) => setFeature(e.target.value)}
              required
            />

            <div onClick={handleAddFeature}>
              <IoMdAdd className="text-[#A7A7A7] w-[24px] h-[24px]  " />
            </div>
          </div>
          <hr />
          <div className="flex gap-4 mt-3">
            {productFeatures.map((featu) => (
              <div className=" relative bg-red-300 p-2 text-[17px] rounded-md">
                {featu}
                <div className=" " onClick={() => handleRemoveFeature(featu)}>
                  <AiFillCloseCircle className="dark:text-white absolute top-0 right-0 translate-x-2 -translate-y-1 text-red-500 text-[18px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {errors.productFeatures && (
          <p className="text-red-500">{errors.productFeatures}</p>
        )}
        <div className="flex justify-between  gap-8">
          <div>
            <label
              htmlFor="productPrice"
              className="dark:text-white text-xl font-semibold text-black"
            >
              <p>Product Price</p>
            </label>
            <div className="flex justify-center items-center mb-4 max-w-56 md:w-56 border-2 border-[#A7A7A7] pr-4">
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                placeholder="ETB"
                className="dark:tex-white bg-[#FFF] outline-none bg-transparent w-full px-3 py-2"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />

              <span className="dark:text-white flex justify-center items-center gap-1">
                <BiMoney /> ETB
              </span>
            </div>
            {errors.productPrice && (
              <p className="text-red-500">{errors.productPrice}</p>
            )}
          </div>

          <div className="w-56">
            <label
              htmlFor="HsnNo"
              className="dark:text-white text-xl text-black"
            >
              <p>HSN no</p>
            </label>
            <input
              type="text"
              id="HsnNo"
              name="HsnNo"
              maxLength={6}
              pattern="[0-9]*"
              placeholder="123456"
              className="dark:text-white bg-[#FFFFFF] outline-none bg-[transparent] w-full px-3 py-2 border-2 border-[#A7A7A7]"
              value={hsnNo}
              onChange={(e) => setHsnNo(e.target.value)}
              required
            />
            {errors.hsnNo && <p className="text-red-500">{errors.hsnNo}</p>}
          </div>
        </div>

        <div className="flex justify-end items-center ">
          <button
            type="submit"
            className="w-[101px] rounded-lg h-[40px] text-white text-xl font-bold bg-[#433C83]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItemsPage;
