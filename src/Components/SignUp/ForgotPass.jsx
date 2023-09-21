// import React, { useState, useEffect } from "react";
// import Button from "../SignUp/Login/Button";
// import Heading from "../SignUp/Heading";

// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import Helppra from "./Helppra";
// function ForgotPass() {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [demoReqForm, setDemoReqForm] = useState({});
//   const [formErrors, setFormErrors] = useState({});

//   const initialValues = {
//     phone: "",
//   };

//   useEffect(() => {
//     // Set the phone field's initial value to phoneNumber when it's available
//     setDemoReqForm({
//       ...demoReqForm,
//       phone: phoneNumber,
//     });
//   }, [phoneNumber]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone") {
//       setPhoneNumber(value);
//     } else {
//       setDemoReqForm({ ...demoReqForm, [name]: value });
//     }

//     if (name === "phone") {
//       if (!value) {
//         setFormErrors({ ...formErrors, phone: "Phone Number is required" });
//       } else if (value.length < 10) {
//         // Account for the '+' and country code
//         setFormErrors({
//           ...formErrors,
//           phone: "Phone Number must be more than 4 Numbers",
//         });
//       } else if (value.length > 14) {
//         // Account for the '+' and country code
//         setFormErrors({
//           ...formErrors,
//           phone: "Phone Number cannot exceed more than 13 Numbers",
//         });
//       } else if (value.startsWith("+251")) {
//         // Handle phone number logic for specific country code
//       } else {
//         setFormErrors({ ...formErrors, phone: "" });
//       }
//     }
//   };

//   return (
//     <div className="">
//       <Heading
//         Title={"Forget Password?"}
//         text={"Please enter your Phone Number to recover your password"}
//       />

//       <div className="flex w-full max-w-[500px] flex-col gap-y-4 sm:w-1/2  mt-4 ">
//         <div
//           className={
//             formErrors.phone
//               ? "flex items-center rounded bg-white pl-2   "
//               : "flex items-center rounded bg-white pl-2"
//           }
//         >
//           <PhoneInput
//             country={"et"}
//             enableAreaCodes={true}
//             value={phoneNumber}
//             onChange={(value) =>
//               handleChange({ target: { name: "phone", value } })
//             }
//             inputProps={{
//               className:
//                 "w-full py-3 px-12 rounded outline-none rounded border-2 border-[#3222C6]  max-w-[500px] md:w-[480px]",
//             }}
//             containerStyle={{ position: "relative" }} // Add custom container style
//             buttonStyle={{ background: "transparent", border: "none" }} // Remove button background and border
//             dropdownStyle={{
//               position: "absolute",
//               top: "100%",
//               left: 0,
//             }} // Position the dropdown
//           />
//         </div>
//         <p
//           className={
//             formErrors.phone
//               ? "-mb-3 -mt-4 ml-2 text-[11px] text-red-600"
//               : "-mt-4 ml-2 text-[11px] text-red-600"
//           }
//         >
//           {formErrors.phone}
//         </p>
//       </div>
//       <div className=" max-w-[500px] md:w-[480px]">
//         <a href="">
//           <Button text={"Send"} bgColor={"bg-[#d71a62]"} />
//         </a>
//         <div className=" ml-5">
//           <Helppra />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ForgotPass;

import React, { useState, useEffect } from "react";
import Button from "../SignUp/Login/Button";
import Heading from "../SignUp/Heading";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Helppra from "./Helppra";

function ForgotPass() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [demoReqForm, setDemoReqForm] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const initialValues = {
    phone: "",
  };

  useEffect(() => {
    setDemoReqForm({
      ...demoReqForm,
      phone: phoneNumber,
    });
  }, [phoneNumber]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setPhoneNumber(value);
    } else {
      setDemoReqForm({ ...demoReqForm, [name]: value });
    }

    if (name === "phone") {
      if (!value) {
        setFormErrors({ ...formErrors, phone: "Phone Number is required" });
      } else if (value.length < 10) {
        setFormErrors({
          ...formErrors,
          phone: "Phone Number must be more than 4 Numbers",
        });
      } else if (value.length > 13) {
        setFormErrors({
          ...formErrors,
          phone: "Phone Number cannot exceed more than 13 Numbers",
        });
      } else if (value.startsWith("+251")) {
        // Handle phone number logic for specific country code
      } else {
        setFormErrors({ ...formErrors, phone: "" });
      }
    }
  };

  const isFormValid = () => {
    return Object.values(formErrors).every((error) => error === "");
  };

  return (
    <div className="">
      <Heading
        Title={"Forget Password?"}
        text={"Please enter your Phone Number to recover your password"}
      />

      <div className="flex w-full max-w-[500px] flex-col gap-y-4 sm:w-1/2 mt-4 ">
        <div
          className={
            formErrors.phone
              ? "flex items-center rounded bg-white pl-2   "
              : "flex items-center rounded bg-white pl-2"
          }
        >
          <PhoneInput
            country={"et"}
            enableAreaCodes={true}
            value={phoneNumber}
            onChange={(value) =>
              handleChange({ target: { name: "phone", value } })
            }
            inputProps={{
              className:
                "w-full py-3 px-12 rounded outline-none rounded border-2 border-[#3222C6]  max-w-[500px] md:w-[480px]",
            }}
            containerStyle={{ position: "relative" }}
            buttonStyle={{ background: "transparent", border: "none" }}
            dropdownStyle={{
              position: "absolute",
              top: "100%",
              left: 0,
            }}
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
      </div>
      <div className="max-w-[500px] md:w-[480px]">
        <a href="">
          <Button
            text={"Send"}
            bgColor={"bg-[#d71a62]"}
            disabled={!isFormValid()}
          />
        </a>
        <div className="ml-5">
          <Helppra />
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;
