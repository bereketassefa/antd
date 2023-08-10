import React, { useState } from "react";
import Heading from "./Heading";
import Button from "./Login/Button";
import { MdLockOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Helppra from "./Helppra";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Resetting errors
    setEmailError("");
    setPasswordError("");

    // Email validation
    if (email.trim() === "") {
      setEmailError("Please enter your email");
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
    }

    // Password validation
    if (pass.trim() === "") {
      setPasswordError("Please enter your password");
    } else if (pass.length < 8) {
      setPasswordError("Password Length Should be greater than 8");
    }

    // Other login logic
    if (email.trim() !== "" && validateEmail(email) && pass.trim() !== "") {
      // Perform login action
      console.log("Login successful");
    }
  };
  return (
    <div>
      <Heading Title={"Welcome Back!!"} text={"Please Login to your Account"} />

      <form onSubmit={handleLogin}>
        <div className=" grid  gap-3 max-w-[480]">
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
              placeholder="Confirm Password"
              name="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          {passwordError && !emailError && (
            <p className="text-red-500">{passwordError}</p>
          )}

          <a className="text-red-500 flex justify-end " href="ForgotPass">
            Forget Password?
          </a>

          <Button
            type="submit"
            text={"login"}
            bgColor={`bg-[#d71a62] ${
              !email ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!email ? true : false}
          />

          <Helppra />
        </div>
      </form>
    </div>
  );
}

export default Login;
