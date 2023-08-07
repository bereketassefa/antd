import React, { useState } from "react";
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

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || pass === "") {
        setErrMsg("Please enter your credentials");
      } else {
        setLoading(true);
        const response = await axios.post(
          `http://localhost:8010/account/sign-in/${email}/${pass}`,
          {
            headers: {
              // Add your headers here if needed
            },
          }
        );
        console.log(response);
        if (response.status === 400) {
          setErrMsg("Server not responding!");
          setLoading(false);
        } else if (response.status === 200) {
          setErrMsg("Username and password are incorrect!");
          setLoading(false);
        } else if (response.status === 201) {
          setLoading(false);
          let expires = new Date();
          expires.setTime(expires.getTime() + 2 * 60 * 60 * 1000);

          setCookie('user', response.data);
          console.log(response.data)
          // setCookie("user", response.data, { path: "/", expires });
          // Commenting out the setCookie function since it's not defined in the code provided
          navigate("/");
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
    <div>
      <Heading Title={"Welcome Back!!"} text={"Please Login to your Account"} />

      <form onSubmit={handleLogin}>
        <div className="grid gap-3 max-w-[480]">
          <div
            className={`border-[2px] rounded-[3px] flex items-center gap-[10px] px-[10px] py-[10px] ${
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
