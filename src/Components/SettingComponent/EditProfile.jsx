import React, { useState, useContext } from "react";
import flag from "../../assets/image/etflag.png";
import { ThemeContext } from "../../theme/ThemeContext";
import { useNavigate } from "react-router-dom";
import {
  africanCountryCodeMap,
  africanCountryCapitalCity,
} from "../../../src/data";
import PhoneInput from "react-phone-input-2";
import { SlCalender } from "react-icons/sl";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LoadingOutlined } from '@ant-design/icons';
import axios from "axios";
import { message } from 'antd';
import { useCookies } from 'react-cookie'
const EditProfile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['User']);
  const [companyPhoneError, setCompanyPhoneError] = useState("");
  const [salesPhoneError, setSalesPhoneError] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);
const token= cookies?.user?.token
  const handleCalendarClick = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
    setFormData({
      ...formData,
      CompanyFounded: date ? date.toISOString() : "",
    });
  };
  
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
    foundedYear: "", // Add this line
    foundedMonth: "", // Add this line
    CompanyFounded: "", // This line already exists
  });



  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
        setLoading(true);
        // Use loading state here if needed
        // setLoading(true);
const url= import.meta.env.VITE_UPDATE_PROFILE
        const response = await axios.put(
          // Update the API endpoint as needed, assuming you have a /party/:id route
          `${url}/${token}`, // Replace YOUR_API_BASE_URL and UID with actual values
          {
            Description: formData.overview,
            phone: formData.companyPhone,
            website: formData.website,
            Country: formData.country,
            City: formData.city,
            CompanyFounded: formData.CompanyFounded, // Convert date to ISO string
          },
          {
            headers: {
              'x-auth-token':import.meta.env.VITE_PRTY_TOKEN, // Replace YOUR_AUTH_TOKEN with an actual authentication token
            },
          }
        );
        // Handle successful update
        message.success('Profile updated successfully!');

        // Clear the form data
        setFormData({
          overview: '',
          companyPhone: '',
          salesPhone: '',
          website: '',
          country: '',
          city: '',
          CompanyFounded: '',
        });

        // Show success message (you might want to use Antd message here)
      
      } catch (error) {
        // Handle error
        message.error('Error updating profile. Please try again.');
        // Show error message (you might want to use Antd message here)
      
      } finally {
        // Use loading state here if needed
        setLoading(false);
      }
    } 
  

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" });
    
      if (name === "companyPhone") {
        setCompanyPhoneError(value.trim() === "" ? "Company Phone Number is required" : "");
      }
    
      if (name === "salesPhone") {
        setSalesPhoneError(value.trim() === "" ? "Sales Phone Number is required" : "");
      }
    
      // Add the following lines to set formData.CompanyFounded correctly
      if (name === "foundedYear" || name === "foundedMonth") {
        setFormData({
          ...formData,
          CompanyFounded: `${formData.foundedMonth} ${formData.foundedYear}`,
        });
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
    if (!selectedDate) {
      newErrors.CompanyFounded = "Date is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  
  

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
              <p style={{ fontSize: 16 + myFontSize }}>Overview </p>
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

          <div className="flex  gap-4  justify-between items-center  max-w-[650px]  md:w-[650px]">
            <div className=" w-80  ">
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
            <div className=" w-80 ">
              <label
                htmlFor="city"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
                <p style={{ fontSize: 16 + myFontSize }}> City </p>
              </label>
              <input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter here"
                className={`w-full py-3 pl-3 rounded outline-none border-2 border-[#3222C6] max-w-[650px] ${
                  errors.city ? "border-red-500" : "border-2 border-[#3222C6]"
                }`}
              ></input>
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
          </div>

          <div className="flex px-2 font-bold mt-5 justify-between max-w-[650px] md:w-[680px]">
            <p>Company Founded</p>
            <div className="flex justify-center items-center gap-2">
              <p className="text-[#A7A7A7]">Pick a date</p>
              <p className="text font-bold">
                {selectedDate ? selectedDate.toLocaleDateString() : ""}
              </p>

              <DatePicker
  selected={selectedDate}
  onChange={handleDateChange}
  dateFormat="MM/dd/yyyy"
  showMonthDropdown
  showYearDropdown
  dropdownMode="select"
  customInput={<SlCalender className="text-3xl" />}
/>

            </div>
            {formErrors.CompanyFounded && (
              <p className="text-red-500 text-sm">{formErrors.CompanyFounded}</p>
            )}
          </div>

          <div className="flex justify-end my-12">
          <button
          style={{ fontSize: 16 + myFontSize }}
          type="submit"
          className={`px-4 py-2 text-lg w-[100px] font-medium text-white rounded-md ${
            loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#D71A62] hover:bg-blue-600'
          }`}
          disabled={loading}
        >
          {loading ? (
            <LoadingOutlined className="animate-spin mr-2" />
          ) : (
            'Save'
          )}
        </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
