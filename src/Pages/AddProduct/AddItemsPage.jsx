import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSolidImageAlt } from "react-icons/bi";
function AddItemsPage() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productFeatures, setProductFeatures] = useState([]);
  const [feature, setFeature] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [availability, setAvailability] = useState("");
  const [errors, setErrors] = useState({});
  const [productImage, setProductImage] = useState(null);
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
    if (availability === "") {
      validationErrors.availability = "Availability is required.";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Submit form data if there are no errors
      // ...
    } else {
      setErrors(validationErrors);
    }
  };

  const handleAddFeature = () => {
    feature.length > 2 &&
      setProductFeatures([...productFeatures, feature.trim()]);
    setFeature("");
  };

  const handleRemoveFeature = (name) => {
    const updatedFeatures = productFeatures.filter((item) => item !== name);
    setProductFeatures(updatedFeatures);
  };

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...productFeatures];
    updatedFeatures[index] = value;
    setProductFeatures(updatedFeatures);
  };
  const handleImageUpload = (file) => {
    setProductImage(file);
  };
  return (
    <div className=" w-full">
      <p className="text-2xl font-bold">Add Product</p>
      <hr className="bg-[#B7B7B7] h-[1px] mb-5" />
      <form onSubmit={handleSubmit} noValidate>
        <div className="">
          <label
            htmlFor="productName"
            className="text-xl font-semibold text-black"
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
            className="text-xl font-semibold text-black"
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
            className="text-xl font-semibold text-black"
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
                  <AiFillCloseCircle className=" absolute top-0 right-0 translate-x-2 -translate-y-1 text-red-500 text-[18px]" />
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
              className="text-xl font-semibold text-black"
            >
              <p>Product Price</p>
            </label>
            <div className="flex justify-center items-center mb-4 w-56 border-2 border-[#3222C6] pr-4">
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                placeholder="ETB"
                className="bg-[#FFF] outline-none bg-transparent w-full px-3 py-2"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />

              <span>ETB</span>
            </div>
            {errors.productPrice && (
              <p className="text-red-500">{errors.productPrice}</p>
            )}
          </div>
          <div className="w-56">
            <label
              htmlFor="availability"
              className="text-xl font-semibold text-black"
            >
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              placeholder="In Stock/Out of Stock"
              className="bg-[#FFF] outline-none bg-transparent w-full px-3 py-2 border-2 border-[#3222C6]"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              required
            >
              <p>Select Availability</p>
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
            {errors.availability && (
              <p className="text-red-500">{errors.availability}</p>
            )}
          </div>
        </div>

        <div className="">
          <p className="text-xl font-semibold text-black">
            Upload Product Image
          </p>
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
            className="w-[131px] h-[50px] text-white text-xl font-bold bg-[#D71A62]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItemsPage;
