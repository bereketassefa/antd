import React, { useEffect, useState } from "react";
import BannerPublic from "../../Components/PublicComponents/BannerPublic";

import Heading from "../../Components/PublicComponents/Heading";

import vacancyImage from "../../assets/PuplicImage/job-vacancy.jpg";

import Button from "../../Components/PublicComponents/Button";

import { skills } from "../../PublicData/data";

import { areaOfInterest } from "../../PublicData/data";
import { RiCloseFill } from "react-icons/ri";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import flag from "../../assets/PuplicImage/1x/ethiopian_flag.svg";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { BiError } from "react-icons/bi";

const JobApply = () => {
  const { id, jobposition } = useParams();
  const initialValues = {
    FullName: "",
    Address: "",
    Gender: "",
    DateOfBirth: "",
    Email: "",
    PhoneNumber: "",
    City: "Addis Ababa",
    Country: "Ethiopia",
    EducationLevel: "",
    University: "",
    personalStatement: "",
    Skill: "",
    AreaOfInterest: "",
    Experience: "0 year",
    position: jobposition,
  };
  const [skill, setSkill] = useState([]);
  const [interestArea, setInterestArea] = useState([]);
  // const [birthdate, setBirthdate] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [spinloading, setSpinLoading] = useState(false);

  const [jobApply, setJobApply] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobApply({ ...jobApply, [name]: value });
  };
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSkill(
      skill.length < 5 &&
        !skill.includes(selectedValue) &&
        selectedValue !== "Please Add your skill"
        ? [...skill, event.target.value]
        : skill
    );
    jobApply.Skill = skill;
  };

  const handleInterestArea = (event) => {
    const selectedValue = event.target.value;
    setInterestArea(
      interestArea.length < 3 &&
        !interestArea.includes(selectedValue) &&
        selectedValue !== "Area of interest"
        ? [...interestArea, event.target.value]
        : interestArea
    );
    jobApply.AreaOfInterest = interestArea;
  };

  const handleEliminateSkill = (id) => {
    const newItem = skill.filter((item) => item !== id);
    setSkill(newItem);
  };
  const handleEliminateArea = (id) => {
    const newItem = interestArea.filter((item) => item !== id);
    setInterestArea(newItem);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(jobApply);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.FullName) {
      errors.FullName = "Full Name is required!";
    }
    if (!values.Gender) {
      errors.Gender = "Gender is required!";
    }
    if (!values.Email) {
      errors.Email = "Email is required!";
    } else if (!regex.test(values.Email)) {
      errors.Email = "This is not a valid Email format!";
    }
    if (!values.PhoneNumber) {
      errors.PhoneNumber = "PhoneNumber is required";
    } else if (values.PhoneNumber.length < 4) {
      errors.PhoneNumber = "PhoneNumber must be more than 4 Number";
    } else if (values.PhoneNumber.length > 10) {
      errors.PhoneNumber = "PhoneNumber cannot exceed more than 10 Number";
    }
    if (!values.DateOfBirth) {
      errors.DateOfBirth = "Date Of Birth is required!";
    }
    if (!values.University) {
      errors.University = "University Name is required!";
    }
    if (!values.City) {
      errors.City = "City is required!";
    }
    if (!values.Country) {
      errors.Country = "Country is required!";
    }
    if (!values.personalStatement) {
      errors.personalStatement = "Personal Statement is required!";
    }
    if (!values.EducationLevel) {
      errors.EducationLevel = "Education Level is required!";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(jobApply));
    const errors = validate(jobApply);
    setIsSubmit(true);
    setSpinLoading(true);

    if (Object.keys(errors).length) {
      setFormErrors(errors);
      toast.error("Something is wrong.. Please try again!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        icon: <BiError className="text-2xl text-red-600" />,
      });
      setIsSubmit(false);
      setSpinLoading(false);
    } else {
      try {
        axios
          .post("https://intern.qa.addissystems.et/Intern", jobApply)
          .then((response) => {
            console.log(response);
            if (response.status === 201) {
              axios
                .post("https://email.api.qa.addissystems.et/api/v1/job_apply", {
                  email: jobApply.Email,
                })
                .then((res) => {
                  if (res.data === "success") {
                    setSpinLoading(false);
                    setJobApply(initialValues);
                    setIsSubmit(false);
                    toast.success("You have been successfully applied", {
                      position: toast.POSITION.BOTTOM_RIGHT,
                    });
                    setInterval(() => window.location.reload(), 1500);
                  } else {
                    setSpinLoading(false);
                    setIsSubmit(false);
                    toast.error(res.data.meg, {
                      position: toast.POSITION.BOTTOM_RIGHT,
                      icon: <BiError className="text-2xl text-red-600" />,
                    });
                  }
                });
            } else {
              setSpinLoading(false);
            }
          });
      } catch (err) {
        toast.error("Something is wrong.. Please try again!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          icon: <BiError className="text-2xl text-red-600" />,
        });
        setIsSubmit(false);
        setSpinLoading(false);
      }
    }
  };

  return (
    <main className="">
      <BannerPublic
        bannerImage={vacancyImage}
        header={jobposition}
        subtitle={""}
      />{" "}
      <Heading
        head={"Apply for our"}
        headtwo={"Vacancy"}
        para={
          "Fill in the details below and one of our team members will get back to you shortly."
        }
      />
      <div className=" mx-auto max-w-7xl">
        <div className=" mb-24 bg-slate-200 px-2 py-10 sm:px-8 md:p-12">
          <form className=" " onSubmit={handleSubmit}>
            <h1 className=" mb-8 text-center text-xl">
              Fill the following information
            </h1>
            <div className=" mm:gap-8 flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:items-start sm:gap-4">
              <div className="flex w-full max-w-[450px] flex-col gap-y-4 sm:w-1/2 ">
                <input
                  className={
                    formErrors.FullName
                      ? "rounded border-[1px] border-rose-600 py-3 indent-2 outline-addisblue"
                      : "rounded py-3 indent-2 outline-addisblue"
                  }
                  type="text"
                  placeholder="Full Name"
                  name="FullName"
                  value={jobApply.FullName}
                  onChange={handleChange}
                />
                <p
                  className={
                    formErrors.FullName
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.FullName}
                </p>
                <div className=" ssm:gap-y0 flex w-full flex-col gap-y-3 ssm:flex-row">
                  <div className="mr-2 flex w-full flex-col sm:w-48">
                    <select
                      className={
                        formErrors.Gender
                          ? "mr-3 w-full rounded border-[1px] border-rose-600 py-3 indent-2 outline-addisblue  duration-300"
                          : "mr-3  w-full rounded py-3 pr-4 indent-2 outline-addisblue duration-300"
                      }
                      name="Gender"
                      value={jobApply.Gender}
                      onChange={handleChange}
                    >
                      <option value="">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <p
                      className={
                        formErrors.Gender
                          ? "-mb-3 ml-2 text-[11px] text-red-600"
                          : "ml-2 text-[11px]  text-red-600"
                      }
                    >
                      {formErrors.Gender}
                    </p>
                  </div>

                  <div className="flex w-full flex-col">
                    <div
                      className={
                        formErrors.PhoneNumber
                          ? "flex w-full items-center rounded border-[1px] border-rose-600 bg-white pl-2"
                          : "flex w-full items-center rounded bg-white pl-2"
                      }
                    >
                      <div className="h-5">
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
                        name="PhoneNumber"
                        placeholder="Phone Number"
                        value={jobApply.PhoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <p
                      className={
                        formErrors.PhoneNumber
                          ? "-mb-3 ml-2 text-[11px] text-red-600"
                          : "-mb-3 ml-2 text-[11px] text-red-600"
                      }
                    >
                      {formErrors.PhoneNumber}
                    </p>
                  </div>
                </div>
                <select
                  className={
                    formErrors.City
                      ? "rounded border-[1px] border-rose-600 py-3 indent-2 outline-addisblue"
                      : "rounded py-3 indent-2 outline-addisblue"
                  }
                  name="City"
                  value={jobApply.City}
                  onChange={handleChange}
                >
                  <option value="Addis Ababa">Addis Ababa</option>
                  <option value="NA">Nazret</option>
                  <option value="GD">Gondar</option>
                  <option value="MK">Mekele</option>
                  <option value="AW">Awasa</option>
                  <option value="DD">Dire Dawa</option>
                  <option value="BD">Bahir Dar</option>
                  <option value="HR">Harar</option>
                  <option value="JG">JigJiga</option>
                  <option value="AS">Assosa</option>
                  <option value="GA">Gambela</option>
                  <option value="SR">Semera</option>
                </select>
                <p
                  className={
                    formErrors.City
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.City}
                </p>
                <input
                  className={
                    formErrors.Email
                      ? "rounded border-[1px] border-rose-600 py-3 indent-2 outline-addisblue"
                      : "rounded py-3 indent-2 outline-addisblue"
                  }
                  name="Email"
                  type="email"
                  placeholder="Email Address"
                  value={jobApply.Email}
                  onChange={handleChange}
                />
                <p
                  className={
                    formErrors.Email
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.Email}
                </p>
                <select
                  className={
                    formErrors.EducationLevel
                      ? "rounded border-[1px] border-rose-600 py-3 indent-2 outline-addisblue"
                      : "rounded py-3 indent-2 outline-addisblue"
                  }
                  name="EducationLevel"
                  value={jobApply.EducationLevel}
                  onChange={handleChange}
                >
                  <option value="">Enter Your Education Level</option>
                  <option value="Master">Master</option>
                  <option value="Bachelor Degree">Bachelor Degree</option>
                  <option value="Diploma">Diploma</option>
                  <option value="TVET">TVET</option>
                  <option value="High School">High School</option>
                </select>
                <p
                  className={
                    formErrors.EducationLevel
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.EducationLevel}
                </p>
              </div>

              <div className="flex w-full max-w-[450px] flex-col gap-y-4 sm:w-1/2">
                <input
                  placeholder="Select a birthdate"
                  type="date"
                  className={
                    formErrors.DateOfBirth
                      ? "w-full rounded border-[1px] border-rose-600 py-3 pr-3 indent-3"
                      : "w-full rounded py-3 pr-3 indent-3"
                  }
                  name="DateOfBirth"
                  selected={jobApply.DateOfBirth}
                  onChange={handleChange}
                />
                {/* <DatePicker
                  // className="py-3 rounded w-full indent-3"
                  className={
                    formErrors.DateOfBirth
                      ? "py-3 rounded w-full indent-3 border-[1px] border-rose-600"
                      : "py-3 rounded w-full indent-3"
                  }
                  name="DateOfBirth"
                  selected={jobApply.DateOfBirth}
                  onChange={handleChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select a birthdate"
                /> */}
                <p
                  className={
                    formErrors.DateOfBirth
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.DateOfBirth}
                </p>
                <select className="rounded py-3 indent-2 outline-addisblue duration-300">
                  <option defaultValue={"Et"}>Ethiopia</option>
                  <option value="Ky" disabled>
                    Kenya
                  </option>
                  <option value="In" disabled>
                    India
                  </option>
                  <option value="Us" disabled>
                    USA
                  </option>
                </select>
                <input
                  className={
                    formErrors.University
                      ? "rounded border-[1px] border-rose-600 py-3 indent-2 outline-addisblue duration-300"
                      : "rounded py-3 indent-2 outline-addisblue duration-300"
                  }
                  placeholder="Name of University/College"
                  text="text"
                  name="University"
                  value={jobApply.University}
                  onChange={handleChange}
                ></input>
                <p
                  className={
                    formErrors.University
                      ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
                      : "-mt-4 ml-2 text-[11px] text-red-600"
                  }
                >
                  {formErrors.University}
                </p>
                {/* Skill Adding Input */}
                <div className="skill-selector">
                  {/* <p id="errorMessage" className="ml-1">
                    Add Your Skill from the List
                  </p> */}
                  <select
                    onChange={handleSelectChange}
                    className="w-full rounded py-3 indent-2 outline-addisblue duration-300"
                  >
                    <option>Please Add your skill</option>
                    {skills.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.skill}
                      </option>
                    ))}
                  </select>
                  <div
                    className={`${
                      skill.length > 0 ? "m-2 -mb-1 gap-2" : ""
                    } flex flex-wrap `}
                  >
                    {skill.map((skill, index) => (
                      <div
                        className="flex items-center gap-1 rounded-sm bg-addispink py-1 pl-2 text-white"
                        key={index}
                      >
                        {skill}
                        <RiCloseFill
                          className="mr-1 mt-0.5 cursor-pointer  text-xl duration-300 hover:scale-125 hover:text-addispink"
                          onClick={() => handleEliminateSkill(skill)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Area of Interest  */}
                <div className="skill-selector">
                  {/* <p id="errorMessage" className="ml-1">
                    Add Your Skill from the List
                  </p> */}
                  <select
                    onChange={handleInterestArea}
                    className="w-full rounded py-3 indent-2 outline-addisblue duration-300"
                  >
                    {/* <option>Area of interest</option> */}
                    {areaOfInterest.map((option, index) => (
                      <option key={option.id} value={option.value}>
                        {option.area}
                      </option>
                    ))}
                  </select>
                  <div className="m-2 flex flex-wrap gap-2">
                    {interestArea.map((area, index) => (
                      <div
                        className="flex items-center gap-1 rounded-sm bg-slate-50 py-1 pl-2"
                        key={index}
                      >
                        {area}
                        <RiCloseFill
                          className="mr-1 mt-0.5 cursor-pointer text-xl duration-300 hover:scale-125 hover:text-addispink"
                          onClick={() => handleEliminateArea(area)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <textarea
                className={
                  formErrors.personalStatement
                    ? "mx-auto mt-4 min-h-[100px] w-full max-w-[916px] rounded border-[1px] border-rose-600 outline-addisblue"
                    : "mx-auto mt-4 min-h-[100px] w-full max-w-[916px] rounded py-3 pl-4 outline-addisblue"
                }
                placeholder=" Please Write about your Self here."
                name="personalStatement"
                value={jobApply.personalStatement}
                onChange={handleChange}
              ></textarea>
            </div>
            <p
              className={
                formErrors.personalStatement
                  ? "-mb-3 text-[11px] text-red-600 lg:ml-36"
                  : "ml-2 text-[11px] text-red-600"
              }
            >
              {formErrors.personalStatement}
            </p>
            <div className="mt-10 text-center">
              {spinloading ? (
                <Button
                  text="Loading..."
                  bgHover={"hover:bg-addisblue"}
                  textHover={""}
                  width={180}
                  py={9}
                />
              ) : (
                <Button
                  text="Submit"
                  bgHover={"hover:bg-addisblue"}
                  textHover={""}
                  width={180}
                  py={9}
                />
              )}
              {/* <Link to="submitted"> */}

              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default JobApply;
