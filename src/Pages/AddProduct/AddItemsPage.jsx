import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
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
  const [availability, setAvailability] = useState("In Stock");
  const [errors, setErrors] = useState({});
  const [productImage, setProductImage] = useState(null);
  const [productPriceError, setProductPriceError] = useState("");
  const [hsnNo, setHsnNo] = useState("");
  const [cookies] = useCookies(["user"]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (productName.trim() === "") {
      validationErrors.productName = "Product Name is required.";
    }
    if (productDescription.trim() === "") {
      validationErrors.productDescription = "Product Description is required.";
    }
    if (productFeatures.some((feature) => feature.trim() === "")) {
      validationErrors.productFeatures = " Product Features must be filled.";
    }
    if (productPrice.trim() === "") {
      validationErrors.productPrice = "Product Price is required.";
    }
    // if (availability === "") {
    //   validationErrors.availability = "Availability is required.";
    // }
    if (Object.keys(validationErrors).length === 0) {
      handleSubmitProdcts();
    } else {
      setErrors(validationErrors);
    }
  };
  const handleSubmitProdcts = async () => {
    try {
      const Uid = cookies?.user.Uid;
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("productDescription", productDescription);
      formData.append("ProductFeature", feature); // Convert array to comma-separated string
      formData.append("ProductPrice", productPrice);
      formData.append("HsnNo", hsnNo);
      // formData.append("Availablity", availability);
      formData.append("image", productImage);
      formData.append("Uid", Uid);
      // Add any other fields if necessary
      const url = `${import.meta.env.VITE_ADD_PRODUCTS}`;
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        // Check if the response status is 200 OK
        console.log("Data inserted successfully");
        message.success("Product added successfully!");
        // window.location.href = '/feed'; // Redirect to the dashboard or any other URL
        handleModal();
      }
    } catch (error) {
      console.log(error);
      message.error("Failed to add product. Please try again."); // Show error message using antd's message component
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

  const handleImageUpload = (file) => {
    setProductImage(file);
  };
  return (
    <div className="dark:bg-[#1b1f23] w-full">
      <p className="dark:text-white text-2xl font-bold">Add Product</p>
      <hr className="bg-[#B7B7B7] h-[1px] mb-5" />
      <form onSubmit={handleSubmit} noValidate>
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
            className="bg-[#FFF] outline-none bg-transparent w-full px-3 py-2 border-2 border-[#3222C6]"
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
            className="bg-[#FFF] h-[120px] outline-none bg-transparent w-full px-3 py-2 border-2 border-[#3222C6]"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          ></textarea>
          {errors.productDescription && (
            <p className="text-red-500">{errors.productDescription}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="productFeatures"
            className="dark:text-white text-xl font-semibold text-black"
          >
            <p>Product Features</p>
          </label>
          <div className=" flex justify-between items-center border-2 border-[#3222C6] pr-2">
            <input
              type="text"
              name={`productFeature`}
              placeholder="eg: 128 GB Storage"
              className="bg-[#FFF] outline-none bg-transparent w-full px-3 py-2"
              value={feature}
              onChange={(e) => setFeature(e.target.value)}
              required
            />

            <div onClick={handleAddFeature}>
              <IoMdAdd className="text-[#3222C6] w-[24px] h-[24px]" />
            </div>
          </div>
          <div className="flex gap-4 mt-3">
            {productFeatures.map((featu) => (
              <div className=" relative bg-red-300 p-2 text-[17px]">
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
            <div className="flex justify-center items-center mb-4 w-56 border-2 border-[#3222C6] pr-4">
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

              <span className="dark:text-white">ETB</span>
            </div>
            {errors.productPrice && (
              <p className="text-red-500">{errors.productPrice}</p>
            )}
          </div>
          <div className="w-56"></div>

          <div className="w-56">
            <label htmlFor="HsnNo" className="dark:text-white text-xl text-black">
              <p>HSN no</p>
            </label>
            <input
              type="number"
              id="HsnNo"
              name="HsnNo"
              placeholder="123456"
              className="dark:text-white bg-[#FFF] outline-none bg-transparent w-full px-3 py-2 border-2 border-[#3222C6]"
              value={hsnNo}
              onChange={(e) => setHsnNo(e.target.value)}
              required
            />
            {errors.hsnNo && <p className="text-red-500">{errors.hsnNo}</p>}
          </div>
        </div>
        <div className="">
          <p className="dark:text-white text-xl text-black">Upload Product Image</p>
          <div className="w-[135px] h-[88px] border-2 border-[#3222C6] flex flex-col">
            {productImage ? (
              <img
                src={URL.createObjectURL(productImage)}
                alt="Product"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex justify-center items-center mt-2">
                <BiSolidImageAlt className="text-white text-5xl bg-[#D71A62]" />
              </div>
            )}
            <input
              type="file"
              id="productImage"
              name="productImage"
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files[0])}
              required
            />
            {/* <p className="flex justify-center items-start">Add Photo</p> */}
          </div>
        </div>
        <div className="flex justify-center items-center pb-8">
          <button
            type="submit"
            className="w-[101px] h-[40px] text-white text-xl font-bold bg-[#D71A62]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItemsPage;
