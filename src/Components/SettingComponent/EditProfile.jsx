import React, { useState, useContext } from "react";
import flag from "../../assets/image/etflag.png";
import { ThemeContext } from "../../theme/ThemeContext";
import { useNavigate } from "react-router-dom";
import {
  africanCountryCodeMap,
  africanCountryCapitalCity,
} from "../../../src/data";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const EditProfile = () => {
  const [companyPhoneError, setCompanyPhoneError] = useState("");
  const [salesPhoneError, setSalesPhoneError] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
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

  // const handleSend = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://account.qa.addissystems.et/account/login/forgot",
  //       {
  //         phone: phoneNumber,
  //       }
  //     );

  //     if (response.data) {
  //       navigate("/OTP", { state: { phoneNumber: phoneNumber } });
  //     }
  //   } catch (error) {
  //     console.error("Error sending OTP:", error);
  //   }
  // };
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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });

    if (name === "companyPhone") {
      setCompanyPhoneError(
        value.trim() === "" ? "Company Phone Number is required" : ""
      );
    }

    if (name === "salesPhone") {
      setSalesPhoneError(
        value.trim() === "" ? "Sales Phone Number is required" : ""
      );
    }
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
      <div className="  bg-[#F9F7F7]  mt-5">
        <h1
          style={{ fontSize: 16 + myFontSize }}
          className="ml-8 text-[18p] font-bold"
        >
          Edit Profile
        </h1>
        <div className="max-w-[650px]  w-[400px] p-6 mx-1    md:w-full lg:max-w-[800px] lg:w-full">
          <div className="flex w-full max-w-[500px] flex-col   mt-4">
            <label
              htmlFor="overview"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              <p style={{ fontSize: 16 + myFontSize }}>Company Description</p>
            </label>

            <input
              type="text"
              id="overview"
              name="overview"
              placeholder="type here.."
              value={formData.overview}
              onChange={handleChange}
              className={` py-3   pl-4   outline-none rounded border-2 border-[#3222C6] max-w-[650px] md:w-[650px]   ${
                errors.overview ? "border-red-500" : "border-2 border-[#3222C6]"
              } `}
            />
            {errors.overview && (
              <p className="text-red-500 text-sm">{errors.overview}</p>
            )}
          </div>
          <div className="my-2 ">
            <label
              htmlFor="companyPhone"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              <p style={{ fontSize: 16 + myFontSize }}> Company Phone Number</p>
            </label>
            <div className="flex w-full max-w-[500px] flex-col gap-y-4 mt-4 ">
              <div
                className={
                  companyPhoneError
                    ? "flex items-center rounded bg-white pl-2 border-2 border-red-500 max-w-[650px]  md:w-[650px]"
                    : "flex items-center rounded bg-white pl-2 border-2 border-[#3222C6] max-w-[650px]  md:w-[650px]"
                }
              >
                <PhoneInput
                  country={"et"}
                  enableAreaCodes={true}
                  value={formData.companyPhone}
                  inputProps={{
                    className: "w-full py-3 px-12 rounded outline-none ",
                  }}
                  containerStyle={{ position: "relative" }}
                  buttonStyle={{ background: "transparent", border: "none" }}
                  dropdownStyle={{ position: "absolute", top: "100%", left: 0 }}
                  onChange={(value) =>
                    handleChange({ target: { name: "companyPhone", value } })
                  }
                />
              </div>
              {companyPhoneError && (
                <p className="text-red-500 text-sm">{companyPhoneError}</p>
              )}
            </div>
          </div>
          <div className="my-2">
            <label
              htmlFor="salesPhone"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              <p style={{ fontSize: 16 + myFontSize }}> Sales Phone Number</p>
            </label>
            <div className="flex w-full max-w-[700px] flex-col   mt-4">
              <div
                className={
                  salesPhoneError
                    ? "flex items-center rounded bg-white pl-2 border-2 border-red-500 max-w-[650px]  md:w-[650px]"
                    : "flex items-center rounded bg-white pl-2 border-2 border-[#3222C6] max-w-[650px]  md:w-[650px]"
                }
              >
                <PhoneInput
                  country={"et"}
                  enableAreaCodes={true}
                  value={formData.salesPhone}
                  inputProps={{
                    className: "w-full py-3 px-12 rounded outline-none ",
                  }}
                  containerStyle={{ position: "relative" }}
                  buttonStyle={{ background: "transparent", border: "none" }}
                  dropdownStyle={{ position: "absolute", top: "100%", left: 0 }}
                  onChange={(value) =>
                    handleChange({ target: { name: "salesPhone", value } })
                  }
                />
              </div>
              {salesPhoneError && (
                <p className="text-red-500 text-sm">{salesPhoneError}</p>
              )}
            </div>
          </div>

          <div className="flex w-full max-w-[500px] flex-col   my-2">
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
              placeholder="Eg: www.abc.com"
              value={formData.website}
              onChange={handleChange}
              className={` py-3 pl-4  outline-none rounded border-2 border-[#3222C6] max-w-[650px]  md:w-[650px] ${
                errors.website ? "border-red-500" : "border-2 border-[#3222C6]"
              }`}
            />
            {errors.website && (
              <p className="text-red-500 text-sm">{errors.website}</p>
            )}
          </div>

          <div className="flex px-2">
            <div className="flex flex-col my-2 w-56">
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
                className={` w-full py-3 pl-4  outline-none rounded border-2 border-[#3222C6] max-w-[650px]   ${
                  errors.country
                    ? "border-red-500"
                    : "border-2 border-[#3222C6]"
                } `}
              >
                <option value="">Select Country</option>
                {Object.keys(africanCountryCodeMap).map((countryCode) => (
                  <option
                    key={countryCode}
                    value={africanCountryCodeMap[countryCode].name}
                  >
                    {africanCountryCodeMap[countryCode].name}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>
            <div className="mt-11 w-56 ml-6">
              <div className="">
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full py-3 pl-3 rounded outline-none border-2 border-[#3222C6] max-w-[650px] ${
                    errors.city ? "border-red-500" : "border-2 border-[#3222C6]"
                  }`}
                >
                  <option value="">Select City</option>
                  {Object.values(africanCountryCapitalCity).map((country) => (
                    <option key={country.capital} value={country.capital}>
                      {country.capital}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex px-2 ">
            <div className=" w-56">
              <label
                htmlFor="foundedMonth"
                className="block mb-2   text-lg font-medium text-gray-700"
              >
                <p style={{ fontSize: 16 + myFontSize }}> Founded Year</p>
              </label>
              <select
                type="text"
                id="foundedMonth"
                name="foundedMonth"
                value={formData.foundedMonth}
                onChange={handleChange}
                className={`w-full py-3 pl-3  rounded outline-none  border-2 border-[#3222C6] max-w-[650px]   ${
                  errors.foundedMonth
                    ? "border-red-500"
                    : "border-2 border-[#3222C6]"
                }`}
              >
                <option style={{ fontSize: 16 + myFontSize }} value="">
                  Select Month
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="Jan">
                  January
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="Feb">
                  February
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="mar">
                  March
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="apr">
                  April
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value=" may">
                  May
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="jun ">
                  June
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="jul">
                  July
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="aug">
                  August
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="sep">
                  September
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="oct">
                  October
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="nov">
                  November
                </option>
                <option style={{ fontSize: 16 + myFontSize }} value="dec">
                  December
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
                className={`w-full py-3 pl-3   outline-none rounded border-2 border-[#3222C6] max-w-[650px]    ${
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
                <option value="February">202</option>
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
