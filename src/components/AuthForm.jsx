import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomInput from "./CustomInput.jsx";

const AuthForm = () => {
  // eslint-disable-next-line no-undef
  const apiURL = process.env.REACT_APP_API_URL;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const [isLogIn, setIsLogIn] = useState(false);

  const navigate = useNavigate();

  const handleLogIn = () => {
    setIsLogIn(!isLogIn);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (isLogIn) {
        res = await axios.post(apiURL + "/api/auth/login", {
          email,
          password,
        });
        localStorage.setItem("userToken", res?.data?.token);
        navigate("main");
      } else {
        res = await axios.post(apiURL + "/api/auth/register", {
          firstName,
          lastName,
          email,
          password,
          contactNumber,
        });
        setIsLogIn(true);
        navigate("/");
      }
    } catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data.error);
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-100 w-[450px] flex items-center justify-center flex-col p-10">
        <h1 className="text-3xl font-medium m-2">
          {!isLogIn ? "Sign Up" : "Log In"}
        </h1>
        <form onSubmit={handleAuth}>
          {!isLogIn && (
            <div className="m-2">
              <CustomInput
                text="text"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></CustomInput>
            </div>
          )}

          {!isLogIn && (
            <div className="m-2">
              <CustomInput
                type="text"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></CustomInput>
            </div>
          )}

          <div className="m-2">
            <CustomInput
              type="text"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></CustomInput>
          </div>

          <div className="m-2">
            <CustomInput
              type="password"
              placeholder="Password"
              required
              minLength="6"
              maxLength="20"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></CustomInput>
          </div>

          {!isLogIn && (
            <div className="m-2">
              <CustomInput
                type="text"
                placeholder="Contact Number"
                required
                minLength="10"
                maxLength="10"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              ></CustomInput>
            </div>
          )}

          <button
            type="submit"
            className="h-10 border-2 border-black m-2 p-2 font-medium hover:border-dashed hover:bg-slate-200"
          >
            {isLogIn ? "LOG IN" : "REGISTER"}
          </button>
        </form>
        <div className="text-lg m-2">
          {isLogIn ? "New user? " : "User already registered? "}
          <button
            onClick={handleLogIn}
            className="text-blue-600 border-b-2 border-blue-600 hover:text-black"
          >
            {isLogIn ? "Sign Up" : "Log In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
