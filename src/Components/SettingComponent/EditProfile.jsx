import React, { useState, useContext } from "react";
import flag from "../../assets/image/etflag.png";
import { ThemeContext } from "../../theme/ThemeContext";
const EditProfile = () => {
  const { myFontSize, increaseFontSize, decreaseFontSize } =
    useContext(ThemeContext);
  const [fontSize, setFontSize] = useState(16); // Initial font size of 16px
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    overview: "",
    companyPhone: "",
    salesPhone: "",
    website: "",
    country: "",
    city: "",
    foundedYear: "",
    foundedMonth: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission
      console.log(formData);
    } else {
      // Form validation failed
      console.log("Form validation failed");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (formData.overview.trim() === "") {
      newErrors.overview = "Overview is required";
      isValid = false;
    }

    if (formData.companyPhone.trim() === "") {
      newErrors.companyPhone = "Company Phone Number is required";
      isValid = false;
    }

    if (formData.salesPhone.trim() === "") {
      newErrors.salesPhone = "Sales Phone Number is required";
      isValid = false;
    }

    if (formData.website.trim() === "") {
      newErrors.website = "Website is required";
      isValid = false;
    }

    if (formData.country.trim() === "") {
      newErrors.country = "Country is required";
      isValid = false;
    }

    if (formData.city.trim() === "") {
      newErrors.city = "City is required";
      isValid = false;
    }

    if (formData.foundedYear.trim() === "") {
      newErrors.foundedYear = " Year is required";
      isValid = false;
    }

    if (formData.foundedMonth.trim() === "") {
      newErrors.foundedMonth = " Month is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  console.log("myFontSize:", myFontSize);

  return (
    <form onSubmit={handleSubmit}>
      <div className=" mx-auto bg-[#F9F7F7] p-4 mt-5 ">
        <h1
          style={{ fontSize: 16 + myFontSize }}
          className="ml-8 text-[18p] font-bold"
        >
          Edit Profile
        </h1>
        <div className="max-w-[472] p-6 mx-6">
          <div className="mb-4 ">
            <label
              htmlFor="overview"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              <p style={{ fontSize: 16 + myFontSize }}>Overview</p>
            </label>

            <input
              type="text"
              id="overview"
              name="overview"
              placeholder="Eg: Lorem ipsum dolor sit amet consectetur."
              value={formData.overview}
              onChange={handleChange}
              className={`bg-[#FFF]  outline-none bg-transparent w-full px-3 py-2 border ${
                errors.overview ? "border-red-500" : "border-2 border-[#3222C6]"
              } `}
            />
            {errors.overview && (
              <p className="text-red-500 text-sm">{errors.overview}</p>
            )}
          </div>
          <div className="  mb-4">
            <label
              htmlFor="companyPhone"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              <p style={{ fontSize: 16 + myFontSize }}> Company Phone Number</p>
            </label>
            <div
              className={` bg-[#FFF] flex px-3 py-2 border items-center ${
                errors.companyPhone
                  ? "border-red-500"
                  : "border-2 border-[#3222C6]"
              } `}
            >
              <img
                className="h-7 w-9 rounded object-cover"
                src={flag}
                alt="ethiopian flag"
              />{" "}
              <span className="ml-1 text-base">+251</span> {""}
              <input
                type="number"
                id="companyPhone"
                name="companyPhone"
                value={formData.companyPhone}
                onChange={handleChange}
                className={` bg-transparent w-full outline-none `}
              />
            </div>

            {errors.companyPhone && (
              <p className="text-red-500 text-sm">{errors.companyPhone}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="salesPhone"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              <p style={{ fontSize: 16 + myFontSize }}> Sales Phone Number</p>
            </label>
            <div
              className={`bg-[#FFF]  flex px-3 py-2 border items-center ${
                errors.companyPhone
                  ? "border-red-500"
                  : "border-2 border-[#3222C6]"
              }  }`}
            >
              <img
                className="h-7 w-9 rounded object-cover"
                src={flag}
                alt="ethiopian flag"
              />{" "}
              <span className="ml-1 text-base">+251</span>
              <input
                type="number"
                id="salesPhone"
                name="salesPhone"
                value={formData.salesPhone}
                onChange={handleChange}
                className="  bg-transparent  w-full  outline-none "
              />
            </div>

            {errors.salesPhone && (
              <p className="text-red-500 text-sm">{errors.salesPhone}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="website"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              <p style={{ fontSize: 16 + myFontSize }}> Website</p>
            </label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="Eg: www.helloWorld.com"
              value={formData.website}
              onChange={handleChange}
              className={` bg-[#FFF]  outline-none w-full px-3 py-2 border ${
                errors.website ? "border-red-500" : "border-2 border-[#3222C6]"
              }`}
            />
            {errors.website && (
              <p className="text-red-500 text-sm">{errors.website}</p>
            )}
          </div>

          <div className="flex px-2">
            <div className="mb-4 w-56">
              <label
                htmlFor="country"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
                <p style={{ fontSize: 16 + myFontSize }}> Location </p>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                placeholder="Country"
                onChange={handleChange}
                className={` outline-none w-full px-3 py-2 border ${
                  errors.country
                    ? "border-red-500"
                    : "border-2 border-[#3222C6]"
                } `}
              >
                <option style={{ fontSize: 16 + myFontSize }} value="">
                  Select Country
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="Eth">
                  Ethiopia
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="USA">
                  USA
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="keniya">
                  Keniya
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="USA">
                  USA
                </option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>
            <div className="mt-9 w-56 ml-6">
              <div className="">
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`  outline-none w-full px-3 py-2 border ${
                    errors.city ? "border-red-500" : "border-2 border-[#3222C6]"
                  }
                   `}
                >
                  <option style={{ fontSize: 16 + myFontSize }} value="">
                    City
                  </option>
                  <option
                    style={{ fontSize: 16 + myFontSize }}
                    value="Ethiopia"
                  >
                    Addis Ababa
                  </option>
                  <option style={{ fontSize: 16 + myFontSize }} value="USA">
                    Hawasa
                  </option>
                  <option style={{ fontSize: 16 + myFontSize }} value="USA">
                    Adama
                  </option>
                </select>
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex mx-2">
            <div className=" w-56">
              <label
                htmlFor="foundedMonth"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
                Founded Year
              </label>
              <select
                type="text"
                id="foundedMonth"
                name="foundedMonth"
                value={formData.foundedMonth}
                onChange={handleChange}
                className={`  outline-none foundedMonth w-full px-3 py-2 border ${
                  errors.foundedMonth
                    ? "border-red-500"
                    : "border-2 border-[#3222C6]"
                }`}
              >
                <option style={{ fontSize: 16 + myFontSize }} value="">
                  Select Month
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="January">
                  January
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="February">
                  February
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="February">
                  march
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="February">
                  april
                </option>
              </select>
              {errors.foundedMonth && (
                <p className="text-red-500 text-sm">{errors.foundedMonth}</p>
              )}
            </div>

            <div className="mt-9 ml-6 w-56">
              <select
                type="number"
                id="foundedYear"
                name="foundedYear"
                value={formData.foundedYear}
                onChange={handleChange}
                className={`  outline-none w-full px-3 py-2 border ${
                  errors.foundedYear
                    ? "border-red-500"
                    : "border-2 border-[#3222C6]"
                }`}
              >
                <option style={{ fontSize: 16 + myFontSize }} value="">
                  Select Year
                </option>
                <option value="January">2020</option>
                <option value="February">2021</option>
                <option value="February">2022</option>
                <option value="February">2023</option>
              </select>
              {errors.foundedYear && (
                <p className="text-red-500 text-sm">{errors.foundedYear}</p>
              )}
            </div>
          </div>
          <div className="flex justify-center my-12">
            <button
              style={{ fontSize: 16 + myFontSize }}
              type="submit"
              className="px-4 py-2 text-lg  w-[100px] font-medium text-white bg-[#D71A62] rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
