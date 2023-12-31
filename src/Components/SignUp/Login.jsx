import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Button from "./Login/Button";
import { MdLockOutline } from "react-icons/md";
import { AiOutlineMail, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Helppra from "./Helppra";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

function Login() {
  const [showPass, setShowPass] = useState(true);
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["User"]);
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (errMsg) {
      const timer = setTimeout(() => {
        setErrMsg("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errMsg]);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log("hello");
    try {
      if (email === "" || pass === "") {
        setErrMsg("Please enter your credentials");
      } else {
        setLoading(true);

        const apiUrl = `${
          import.meta.env.VITE_LOGIN_USER_API
        }/${email}/${pass}`;
        // console.log(apiUrl);
        const response = await axios.post(apiUrl, {});
        // console.log(response);
        if (response.status === 400) {
          setErrMsg("Server not responding!");
          setLoading(false);
        } else if (
          response.status === 200 &&
          response.data.error === "Invalid password"
        ) {
          setErrMsg("Please enter the correct credentials!");
          setLoading(false);
        } else if (response.status === 201) {
          setLoading(false);
          let expires = new Date();
          expires.setTime(expires.getTime() + 2 * 60 * 60 * 1000);

          setCookie("user", response.data);
          // console.log(response.data)
          setCookie("user", response.data, { path: "/", expires });
          // Commenting out the setCookie function since it's not defined in the code provided
          navigate("/feed");
        }
      }
    } catch (err) {
      setErrMsg("Login Failed");
      setLoading(false);
    }
  };

  // The following useEffect hook is not needed in this component, so we can remove it
  // useEffect(() => {
  //   // Any code that should run on component mount or update can be placed here
  // }, []);

  // The email and password validation logic should be inside the handleLogin function, so we can remove it from here
  // In Button.js

  return (
    <div className=" z-50 w-full  lg:p-4 py-4 rounded-lg ">
      <Heading Title={"Welcome to BIZFYSPOT!"} text={"Please Login to your Account"} />
      {errMsg && (
        <div className="bg-[#d71a62] text-white py-2 px-4 rounded-md shadow-md 
        transition duration-300 ease-in-out transform animate-slideIn flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span>{errMsg}</span>
        </div>
      )}
      <form onSubmit={handleLogin}>
        <div className="grid lg:gap-3 max-w-[480]">
          <div
            className={` w-full border-[2px] mb-4 md:mb-6 lg:mb-0 rounded-lg md:rounded-[10px] lg:rounded-[3px] flex items-center gap-[10px] md:gap=[16px] 
            bg-white lg:bg-transparent px-4 md:px-6 lg:px-[10px] py-2 md:py-3 lg:py-3 ${
              emailError ? "border-red-500" : "border-[#3222c6]"
            }`}
          >
            {!email && <AiOutlineMail className="text-[12px] md:text-[16px] lg:text-[20px] text-gray-300 lg:mx-3" />}

            <input
              className="text-[12px] md:text-[16px] lg:text-[20px] outline-none w-full bg-transparent"
              type={showEmail ? "email" : "text"}
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // style={{ backgroundColor: "transparent" }}
            />
          </div>

          {emailError && <p className="text-red-500">{emailError}</p>}

          <div
            className={`w-full border-[2px] mb-2 md:mb-3 lg:mb-0 rounded-lg md:rounded-[10px] lg:rounded-[3px] flex items-center gap-[10px] md:gap=[16px] 
            bg-white lg:bg-transparent px-4 md:px-6 lg:px-[10px] py-2 md:py-3 lg:py-3
            ${
              passwordError && !emailError
                ? "border-red-500"
                : "border-[#3222c6]"
            }`}
          >
            <MdLockOutline
              className={`text-[12px] md:text-[16px] lg:text-[20px] text-gray-300 lg:mx-3 ${
                pass?.length > 0 ? "hidden" : "block"
              } text-gray-300`}
            />
            <input
              className="text-[12px] md:text-[16px] lg:text-[20px] outline-none w-full bg-transparent"
              type={showPass ? "password" : "text"}
              placeholder="Password"
              name="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <div
              className={`${pass?.length < 1 ? "hidden" : "block"}`}
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <AiFillEyeInvisible className="text-[20px] lg:text-[26px] text-[#3222C6]" />
              ) : (
                <AiFillEye className="text-[20px] text-[#3222C6]" />
              )}
            </div>
          </div>

          {passwordError && !emailError && (
            <p className="text-red-500">{passwordError}</p>
          )}

          <div className="flex justify-end">
            {" "}
            <a className="text-white text-[14px] md:text-[22px] lg:text-[24px] lg:text-red-500 flex justify-end" 
            href="forget-password">
              Forget Password?
            </a>
          </div>

          <Button
            type="submit"
            text={"LOG IN"}
            bgColor={`bg-[#d71a62] ${
              !email ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!email ? true : false}
            isLoading={loading}
          />

          <Helppra />
        </div>
      </form>
    </div>
  );
}

export default Login;
