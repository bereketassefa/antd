import React, { useState, useEffect } from "react";

import Heading from "../../Components/PublicComponents/Heading";

import BannerPublic from "../../Components/PublicComponents/BannerPublic";

import flag from "../../assets/PuplicImage/1x/ethiopian_flag.svg";

import SpinLoadingImg from "../../assets/PuplicImage/spinner.gif";

import Button from "../../Components/PublicComponents/Button";

import LearnMore from "../../Components/PublicComponents/LearnMore";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { BiError } from "react-icons/bi";
import "react-toastify/dist/ReactToastify.css";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import { useTranslation } from "../../Lang/Translater";
import "react-phone-input-2/lib/style.css"; // Import the default styles
import PhoneInput from "react-phone-input-2";

import { africanCountryCodeMap } from "../../PublicData/data";

const DemoRequest = () => {
  const { translate, language } = useTranslation();
  const [spinloading, setSpinLoading] = useState(false);
  const [tinInfo, setTinInfo] = useState({});

  const initialValues = {
    Fname: "",
    Lname: "",
    inputtitle: "",
    businessname: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    // service: "POS Service",
    tin_no: "",
    license_no: "",
    AddressInfo: {},
    Businesses: {},
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const [demoReqForm, setDemoReqForm] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [IsTinNumberVerify, setIsTinNumberVerify] = useState(null);
  const [IsLicenseNumberVerify, setIsLicenseNumberVerify] = useState(null);

  const [LoadingLicenseNumberVerify, setLoadingLicenseNumberVerify] =
    useState(false);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  useEffect(() => {
    // Set the phone field's initial value to phoneNumber when it's available
    setDemoReqForm({
      ...demoReqForm,
      phone: phoneNumber
    });
  }, [phoneNumber]);

  const handleLike = async (e) => {
    e.preventDefault()
    // console.log(e);
   
      // setLiked((prevLiked) => !prevLiked); // Optimistic update
      const url = `${import.meta.env.VITE_LIKE_DISLIKE_POST}/addissystemsGetfitget363294/afe34993-1b8a-4c92-a95d-2a55a8c2a993`;
      console.log(url);
      await fetch(url, { method: "POST"}).then(response => response.json()).then((data) => {
        // console.log(data);
      })
   
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setPhoneNumber(value);
    } else {
      setDemoReqForm({ ...demoReqForm, [name]: value });
    }

    const newErrors = { ...formErrors };
    if (name === "Fname") {
      if (!value) {
        newErrors.Fname = "FirstName is required!";
      } else {
        delete newErrors.Fname;
      }
    }

    if (name === "Lname") {
      if (!value) {
        newErrors.Fname = "LastName is required!";
      } else {
        delete newErrors.Fname;
      }
    }

    if (name === "email") {
      if (!value) {
        newErrors.email = "Email is required!";
      } else if (!regex.test(value)) {
        newErrors.email = "This is not a valid email format!";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "phone") {
      if (!value) {
        newErrors.phone = "Phone Number is required";
      } else if (value.length < 5) {
        // Account for the '+' and country code
        newErrors.phone = "Phone Number must be more than 4 Numbers";
      } else if (value.length > 14) {
        // Account for the '+' and country code
        newErrors.phone = "Phone Number cannot exceed more than 13 Numbers";
      } else if (value.startsWith("+251")) {
        // Handle phone number logic for specific country code
      } else {
        delete newErrors.phone;
      }
    }

    if (name === "inputtitle") {
      if (!value) {
        newErrors.inputtitle = "Position is required!";
      } else {
        delete newErrors.inputtitle;
      }
    }

    if (name === "businessname") {
      if (!value) {
        newErrors.businessname = "Company Name is required!";
      } else {
        delete newErrors.businessname;
      }
    }

    if (name === "city") {
      if (!value) {
        newErrors.city = "Region is required!";
      } else {
        delete newErrors.city;
      }
    }
    if (name === "tin_no") {
      if (!value) {
        newErrors.tin_no = "Tin Number is required";
      } else if (value.length < 10) {
        newErrors.tin_no = "Tin Number must be more than 10 Number";
      } else if (value.length > 13) {
        newErrors.tin_no = "Tin Number cannot less than 13 Number";
      } else if (value !== tinInfo?.OwnerTIN) {
        newErrors.tin_no =
          "Invalid Tin Number Please check your TIN No. again!";
      } else {
        delete newErrors.tin_no;
      }
    }

    if (name === "license_no") {
      if (!value) {
        setIsLicenseNumberVerify(null);
      } else {
        delete newErrors.license_no;
      }
    }
    setFormErrors(newErrors);
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(demoReqForm);
    }
  }, [formErrors]);
  // console.log(demoReqForm)
  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.keys(formErrors).length > 0;
    setSpinLoading(false);
    console.log(demoReqForm);
    if (hasErrors) {
      // setFormErrors(errors);
      toast.error("Something is wrong.. Please try again!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        icon: <BiError className="text-2xl text-red-600" />,
      });
      setIsSubmit(false);
    } else {
      setSpinLoading(true);
      try {
        axios
          .post(
            "https://party.qa.addissystems.et/Demo_handler",
              demoReqForm,
            {
              headers: {
                content: "application/json",
                "X-Auth-Token":
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzMyYzIzODNkZmQ5ZTQwOWRjMGZhNiIsImlhdCI6MTY4NTI2OTU3Nn0.tGNpNVOcUaf7mDvNF4jscOr0MnwVRrtIw9FVkaH4t08",
              },
            }
          )
          .then((response) => {
            // console.log(response)
            if (response.status === 201) {
              console.log(response.data.token);
              setSpinLoading(false);
              setDemoReqForm(initialValues);
              setIsSubmit(false);
              setIsTinNumberVerify(false);
              toast.success(
                "Account has been created successfully. Password Creation link has been sent to your email. check your inbox for the link.",
                {
                  position: toast.POSITION.BOTTOM_RIGHT,
                }
              );
              // const pathurl = `https://admin.addissystems.et/create-password/${response.data.token}`;
              // axios
              //   .post(
              //     "https://email.addispay.et/api/v1/account_create",
              //     {
              //       email: demoReqForm.email,
              //       path: pathurl,
              //     }
              //   )
              //   .then((res) => {
              //     if (res.data === "success") {
              //       setSpinLoading(false);
              //       setDemoReqForm(initialValues);
              //       setIsSubmit(false);
              //       setIsTinNumberVerify(false);
              //       toast.success(
              //         "Account has been created successfully. Password Creation link has been sent to your email. check your inbox for the link.",
              //         {
              //           position: toast.POSITION.BOTTOM_RIGHT,

              //         }
              //       );
              //     } else {
              //       setSpinLoading(false);
              //       setIsSubmit(false);
              //       toast.error(res.data.meg, {
              //         position: toast.POSITION.BOTTOM_RIGHT,
              //         icon: <BiError className="text-2xl text-red-600" />,
              //       });
              //     }
              //   });
            }
            // else if (
            //   response.status === 200 ||
            //   response.statusText === "OK"
            // )
            else {
              setSpinLoading(false);
              setIsSubmit(false);
              toast.error(response.data.msg, {
                position: toast.POSITION.BOTTOM_RIGHT,
                icon: <BiError className="text-2xl text-red-600" />,
              });
              // console.log(response.data.msg);
            }
          });
      } catch (err) {
        toast.error(err, {
          position: toast.POSITION.BOTTOM_RIGHT,
          icon: <BiError className="text-2xl text-red-600" />,
        });
      }
    }
  };

  //console.log(demoReqForm.tin_no)
  // useEffect(() => {
  //   if (demoReqForm.license_no) {
  //     verifyNumber();
  //   }
  // }, [demoReqForm.license_no]);

  const verifyNumber = async () => {
    try {
      setLoadingLicenseNumberVerify(true);
      const encodedData = encodeURIComponent(demoReqForm.license_no);
      console.log(encodedData);

      const response = await fetch(
        `https://party.addispay.et/CheckLicenseNotExist/${encodedData}`,
        {
          body: {},
          method: "POST",
          headers: {
            content: "application/json",
            "X-Auth-Token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzMyYzIzODNkZmQ5ZTQwOWRjMGZhNiIsImlhdCI6MTY4NTI2OTU3Nn0.tGNpNVOcUaf7mDvNF4jscOr0MnwVRrtIw9FVkaH4t08",
          },
        }
      );
      const data = await response.json();
      setTinInfo(data);
      console.log(data.AddressInfo?.Region);
      if (demoReqForm.license_no === data?.LicenceNumber) {
        setIsLicenseNumberVerify(1);
        demoReqForm.businessname = data?.TradeName;
        demoReqForm.AddressInfo = data?.AddressInfo;
        demoReqForm.Businesses = data?.BusinessLicensingGroupMain;
        demoReqForm.city = data.AddressInfo?.Region;
        if (demoReqForm.tin_no !== data?.OwnerTIN) {
          setIsTinNumberVerify(0);
        } else {
          setIsTinNumberVerify(1);
        }
        setLoadingLicenseNumberVerify(false);
      } else {
        setIsLicenseNumberVerify(0);
        setLoadingLicenseNumberVerify(false);
      }
    } catch (error) {
      console.error("Error verifying number:", error);
      setLoadingLicenseNumberVerify(false);
    }
  };

  return (
    <main className="">
      <BannerPublic header={translate("Demo Request")} />
      <Heading
        para={translate(
          "We’re here to help. Fill in the details below and one of our team members will get back to you shortly."
        )}
      />
      <div className=" mx-auto max-w-7xl">
        <div className=" mb-24 bg-slate-200 px-2 py-10 sm:px-8 md:p-12">
          <form className=" " onSubmit={handleSubmit}>
            <h1 className=" mb-8 text-center text-xl">
              {translate("Fill the following information")}
            </h1>

            <div className=" flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:items-start sm:gap-4 ">
              <div className="flex w-full max-w-[500px] flex-col gap-y-4 sm:w-1/2">
                <input
                  className={
                    formErrors.Fname
                      ? "rounded border-[1px] border-rose-600 py-3 indent-2 outline-addisblue"
                      : "rounded py-3 indent-2 outline-addisblue"
                  }
                  type="text"
                  placeholder={translate("First Name")}
                  name="Fname"
                  value={demoReqForm.Fname}
                  onChange={handleChange}
                />
                <p
                  className={
                    formErrors.Fname
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.Fname}
                </p>
                <input
                  className={
                    formErrors.Lname
                      ? "rounded border-[1px] border-rose-600 py-3 indent-2 outline-addisblue"
                      : "rounded py-3 indent-2 outline-addisblue"
                  }
                  type="text"
                  name="Lname"
                  placeholder={translate("Last Name")}
                  value={demoReqForm.Lname}
                  onChange={handleChange}
                />
                <p
                  className={
                    formErrors.Lname
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.Lname}
                </p>
                <div
                  className={
                    formErrors.phone
                      ? "flex items-center rounded border-[1px] border-rose-600 bg-white pl-2"
                      : "flex items-center rounded bg-white pl-2"
                  }
                >
                  {/* <div className="h-5">
                    <img
                      className="h-full w-7 rounded object-cover"
                      src={flag}
                      alt="ethiopian flag"
                    />{" "}
                  </div>
                  <span className="ml-1 text-base">+251</span>
                  <input
                    className="rounde w-full py-3 indent-2 outline-none"
                    type="tel"
                    name="phone"
                    placeholder={translate("Phone Number")}
                    value={demoReqForm.phone}
                    onChange={handleChange}
                  /> */}
                  <PhoneInput
                    country={"et"}
                    enableAreaCodes={true}
                    value={phoneNumber}
                    onChange={(value) =>
                      handleChange({ target: { name: "phone", value } })
                    }
                    inputProps={{
                      className:
                        "w-full py-3 px-12 rounded outline-none border-none -ml-1 ",
                    }}
                    containerStyle={{ position: "relative" }} // Add custom container style
                    buttonStyle={{ background: "transparent", border: "none" }} // Remove button background and border
                    dropdownStyle={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                    }} // Position the dropdown
                  />
                </div>
                <p
                  className={
                    formErrors.phone
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.phone}
                </p>
                <input
                  className={
                    formErrors.email
                      ? "rounded border-[1px] border-rose-600 py-3 indent-2 outline-addisblue"
                      : "rounded py-3 indent-2 outline-addisblue"
                  }
                  name="email"
                  type="email"
                  placeholder={translate("Email Address")}
                  value={demoReqForm.email}
                  onChange={handleChange}
                />
                <p
                  className={
                    formErrors.email
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.email}
                </p>
                <input
                  className={
                    formErrors.inputtitle
                      ? "rounded border-[1px] border-rose-600 py-3 indent-2 outline-addisblue"
                      : "rounded py-3 indent-2 outline-addisblue"
                  }
                  type="text"
                  name="inputtitle"
                  placeholder={translate("Enter Your Position")}
                  value={demoReqForm.inputtitle}
                  onChange={handleChange}
                />
                <p
                  className={
                    formErrors.inputtitle
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.inputtitle}
                </p>
              </div>
              <div className="flex w-full max-w-[500px] flex-col gap-y-4 sm:w-1/2">
                <div
                  className={
                    formErrors.tin_no
                      ? "flex w-full max-w-[500px] flex-row items-center rounded border-[1px] border-rose-600 bg-white py-3 indent-2 outline-addisblue"
                      : "flex w-full max-w-[500px] flex-row  items-center rounded bg-white py-3 indent-2 outline-addisblue"
                  }
                >
                  <input
                    className={
                      "flex w-full max-w-[500px] flex-row items-center border-none bg-white px-2 outline-none"
                    }
                    type="number"
                    name="tin_no"
                    placeholder={translate("TIN NO.")}
                    value={demoReqForm.tin_no}
                    onChange={handleChange}
                  />
                  {/* {(() => {
        if (IsTinNumberVerify === 1) {
          return (
            <span className="pr-2 text-green-600">
              <AiFillCheckCircle />
            </span>
          );
        } else if (IsTinNumberVerify === 0) {
          return (
            <span className="pr-2 text-red-600">
              <AiFillCloseCircle />
            </span>
          );
        } else {
          return null;
        }
      })()} */}

                  {LoadingLicenseNumberVerify ? (
                    <button className="" disabled={true}>
                      <img src={SpinLoadingImg} className="w-7" alt="loading" />
                    </button>
                  ) : IsTinNumberVerify === 1 ? (
                    <span className="pr-2 text-green-600">
                      <AiFillCheckCircle />
                    </span>
                  ) : IsTinNumberVerify === 0 ? (
                    <span className="pr-2 text-red-600">
                      <AiFillCloseCircle />
                    </span>
                  ) : null}
                </div>
                <p
                  className={
                    formErrors.tin_no
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.tin_no}
                </p>
                {/* license no. fields start */}
                <div
                  className={
                    formErrors.license_no
                      ? "flex w-full max-w-[500px] flex-row items-center rounded border-[1px] border-rose-600 bg-white py-3 indent-2 outline-addisblue"
                      : "flex w-full max-w-[500px] flex-row  items-center rounded bg-white py-3 indent-2 outline-addisblue"
                  }
                >
                  <input
                    className={
                      "flex w-full max-w-[500px] flex-row items-center border-none bg-white px-2 outline-none"
                    }
                    type="text"
                    name="license_no"
                    placeholder={translate("LICENSE NO.")}
                    value={demoReqForm.license_no}
                    onChange={handleChange}
                  />
                  {LoadingLicenseNumberVerify ? (
                    <button className="" disabled={true}>
                      <img src={SpinLoadingImg} className="w-7" alt="loading" />
                    </button>
                  ) : IsLicenseNumberVerify === 1 ? (
                    <span className="pr-2 text-green-600">
                      <AiFillCheckCircle />
                    </span>
                  ) : IsLicenseNumberVerify === 0 ? (
                    <span className="pr-2 text-red-600">
                      <AiFillCloseCircle />
                    </span>
                  ) : null}
                </div>
                {/* <p
                  className={
                    formErrors.tin_no
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.tin_no}
                </p> */}
                {/* license no. fields end */}
                <div className="w-full bg-white">
                  <input
                    className={
                      formErrors.businessname
                        ? "w-full rounded border-[1px] border-rose-600 bg-white py-3 indent-2 outline-addisblue"
                        : "w-full rounded py-3 indent-2 outline-addisblue"
                    }
                    readOnly
                    type="text"
                    name="businessname"
                    placeholder={translate("Company Name")}
                    value={demoReqForm.businessname}
                    onChange={handleChange}
                    onFocus={verifyNumber}
                  />
                </div>
                <p
                  className={
                    formErrors.businessname
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.businessname}
                </p>
                {/* <div className="w-full bg-white">
                  <input
                    className={
                      formErrors.country
                        ? "rounded border-[1px] w-full border-rose-600 bg-white py-3 indent-2 outline-addisblue"
                        : "rounded py-3 indent-2 w-full outline-addisblue"
                    }
                    readOnly
                    type="text"
                    name="country"
                    placeholder={translate("Country")}
                    value={demoReqForm.country}
                    onChange={handleChange}

                  />
                </div> */}
                <div className="flex flex-col">
                  <select
                    className={
                      formErrors.city
                        ? "rounded border-[1px] border-rose-600 py-3 indent-2 outline-addisblue"
                        : "rounded py-3 indent-2 outline-addisblue"
                    }
                    name="country"
                    id="country"
                    value={demoReqForm.country}
                    onChange={handleChange}
                  >
                    <option value="">Select Your Country</option>
                    {Object.keys(africanCountryCodeMap).map((countryCode) => (
                      <option
                        key={countryCode}
                        value={africanCountryCodeMap[countryCode].name}
                      >
                        {africanCountryCodeMap[countryCode].name}
                      </option>
                    ))}
                  </select>
                </div>
                <p
                  className={
                    formErrors.city
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.city}
                </p>{" "}
                {/* <div className="flex flex-col">
                
                  <select
                    className={
                      formErrors.city
                        ? "indent-2 py-3 rounded outline-addisblue border-[1px] border-rose-600"
                        : "indent-2 py-3 rounded outline-addisblue"
                    }
                    name="city"
                    id="region"
                    value={demoReqForm.city}
                    onChange={handleChange}
                    
                  >
                    <option value="">{translate("Select Region")}</option>
                    <option value="AA">{translate("Addis Ababa")}</option>
                    <option value="AF">{translate("Afar")}</option>
                    <option value="AM">{"Amhara"}</option>
                    <option value="BG">{translate("Benishangul-Gumuz")}</option>
                    <option value="GA">{translate("Gambela")}</option>
                    <option value="HA">{translate("Harari")}</option>
                    <option value="OR">{translate("Oromia")}</option>
                    <option value="SI">{translate("Sidama")}</option>
                    <option value="SO">{translate("Somali")}</option>
                    <option value="SNNPR">
                      Southern Nations, Nationalities, and Peoples'
                      Region(SNNPR)
                    </option>
                    <option value="TI">{translate("Tigray")}</option>
                    <option value="DD">{translate("Dire Dawa ")}</option>
                  </select>
                </div> */}
                <p
                  className={
                    formErrors.city
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.city}
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              {/* <Link to="submitted"> */}
              <Button
                text={spinloading ? "Loading..." : "Submit"}
                bgHover={"hover:bg-addisblue"}
                textHover={""}
                width={180}
                disable={IsLicenseNumberVerify ? 0 : 1}
                py={9}
              />
              {/* </Link> */}
            </div>
          </form>
        </div>
        <LearnMore />
      </div>
      <ToastContainer />
    </main>
  );
};

export default DemoRequest;
