import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Button from "./Login/Button";
import { MdLockOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Helppra from "./Helppra";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from 'react-cookie'

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['User']);
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
    try {
      if (email === "" || pass === "") {
        setErrMsg("Please enter your credentials");
      } else {
        setLoading(true);
        
        const apiUrl = `${import.meta.env.VITE_LOGIN_USER_API}/${email}/${pass}`;
        // console.log(apiUrl);
        const response = await axios.post(
          apiUrl,
          {},
          {
            headers: {
              // Add your headers here if needed
            },
          }
        );
        // console.log(response);
        if (response.status === 400) {
          setErrMsg("Server not responding!");
          setLoading(false);
        } else if (response.status === 200 && response.data.error === "Invalid password") {
          setErrMsg("Please enter the correct credentials!");
          setLoading(false);
        } else if (response.status === 201) {
          setLoading(false);
          let expires = new Date();
          expires.setTime(expires.getTime() + 2 * 60 * 60 * 1000);

          setCookie('user', response.data);
          // console.log(response.data)
          // setCookie("user", response.data, { path: "/", expires });
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

  return (
    <div className=" z-50 w-full">
      <Heading Title={"Welcome Back!!"} text={"Please Login to your Account"} />
      {errMsg && (
        <div className="bg-[#d71a62] text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform animate-slideIn flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>{errMsg}</span>
        </div>
      )}
      <form onSubmit={handleLogin}>
        <div className="grid gap-3 max-w-[480]">
          <div
            className={` w-full border-[2px] rounded-[3px] flex items-center gap-[10px] px-[10px] py-[10px] ${
              emailError ? "border-red-500" : "border-[#3222c6]"
            }`}
          >
            {!email && <AiOutlineMail className="text-[24px] text-gray-400" />}

            <input
              className="text-[17px] outline-none w-full"
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {emailError && <p className="text-red-500">{emailError}</p>}

          <div
            className={`border-[2px] rounded-[3px] flex items-center gap-[10px] px-[10px] py-[10px] ${
              passwordError && !emailError
                ? "border-red-500"
                : "border-[#3222c6]"
            }`}
          >
            <MdLockOutline
              className={`text-[24px] ${
                pass?.length > 0 ? "hidden" : "block"
              } text-gray-400`}
            />
            <input
              className="text-[17px] outline-none w-full"
              type="password"
              placeholder="Password"
              name="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          {passwordError && !emailError && (
            <p className="text-red-500">{passwordError}</p>
          )}

          <a className="text-red-500 flex justify-end" href="forget-password">
            Forget Password?
          </a>

          <Button
            type="submit"
            text={"Login"}
            bgColor={`bg-[#d71a62] ${!email ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={!email ? true : false}
          />

          <Helppra />
        </div>
      </form>
    </div>
  );
}

export default Login;
