import { useState, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  isLogin: true,
  signupSteps: 1,
  loginDetails: { username: "", password: "" },
  signupDetails: {
    username: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    email: "",
    section: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LOGIN":
      return { ...state, isLogin: true, signupSteps: 1 };

    case "TOGGLE_SIGNUP":
      return { ...state, isLogin: false };

    case "NEXT_SIGNUP":
      return { ...state, signupSteps: state.signupSteps + 1 };

    case "SET_LOGIN_DETAILS":
      return { ...state, loginDetails: action.payload };

    case "SET_SIGNUP_DETAILS":
      return { ...state, signupDetails: action.payload };

    default:
      return state;
  }
};

const RegisterUser = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLogin, signupSteps, loginDetails, signupDetails } = state;
  const navigate = useNavigate();

  async function handleLoginSubmit() {
    try {
      const response = await axios.post(
        "https://classroom-activity-tracker.onrender.com/api/auth/login",
        loginDetails
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignupSubmit() {
    const signupForm = {
      fullName: signupDetails.fullName,
      email: signupDetails.email,
      password: signupDetails.password,
      username: signupDetails.username,
    };

    try {
      const response = await axios.post(
        "https://classroom-activity-tracker.onrender.com/api/auth/signup",
        signupForm
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  function handleInputChange(e) {
    if (isLogin) {
      dispatch({
        type: "SET_LOGIN_DETAILS",
        payload: { ...loginDetails, [e.target.name]: e.target.value },
      });
    } else {
      dispatch({
        type: "SET_SIGNUP_DETAILS",
        payload: { ...signupDetails, [e.target.name]: e.target.value },
      });
    }
  }

  return (
    <div className="absolute p-4 w-[20rem] min-h-[15rem] bg-green-dark rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-full h-8 bg-white rounded-sm hover:cursor-pointer">
        <p
          className={`inline-block text-center w-1/2 leading-8 rounded-smrounded-sm ${
            isLogin ? "login-active" : "text-green-mint"
          }`}
          onClick={() => {
            dispatch({ type: "TOGGLE_LOGIN" });
          }}
        >
          LOG IN
        </p>
        {/* if inactive, text-mint */}
        <p
          className={`inline-block text-center w-1/2 leading-8  rounded-sm ${
            !isLogin ? "login-active" : "text-green-mint"
          }`}
          onClick={() => {
            dispatch({ type: "TOGGLE_SIGNUP" });
          }}
        >
          SIGNUP
        </p>
      </div>
      <div className="my-10">
        {isLogin ? (
          <>
            <input
              type="text"
              className="login-input"
              placeholder="Username / Email"
              name="username"
              value={loginDetails.username}
              onChange={handleInputChange}
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              name="password"
              value={loginDetails.password}
              onChange={handleInputChange}
            />
            <p className="text-white/50 text-xs">Forgot password?</p>
          </>
        ) : (
          <>
            {signupSteps === 1 && (
              <>
                <input
                  type="text"
                  className="login-input"
                  placeholder="Username"
                  name="username"
                  value={signupDetails.username}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  className="login-input"
                  placeholder="Password"
                  name="password"
                  value={signupDetails.password}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  className="login-input"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={signupDetails.confirmPassword}
                  onChange={handleInputChange}
                />
              </>
            )}
            {signupSteps === 2 && (
              <>
                <input
                  type="text"
                  className="login-input"
                  placeholder="Full Name"
                  name="fullName"
                  value={signupDetails.fullName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="login-input"
                  placeholder="Email"
                  name="email"
                  value={signupDetails.email}
                  onChange={handleInputChange}
                />
                <select
                  className="login-input opacity-90"
                  name="section"
                  value={signupDetails.section}
                  onChange={handleInputChange}
                >
                  <option value="">Section</option>
                  <option value="CS 1-1">CS 1-1</option>
                  <option value="CS 1-5">CS 1-5</option>
                </select>
              </>
            )}
          </>
        )}
      </div>
      {isLogin && (
        <button
          className="w-full bg-green-mint text-white h-8 rounded-sm"
          onClick={handleLoginSubmit}
        >
          LOG IN
        </button>
      )}
      {!isLogin && signupSteps != 2 && (
        <button
          className="w-full bg-green-mint text-white h-8 rounded-sm"
          onClick={() => {
            dispatch({ type: "NEXT_SIGNUP" });
            console.log(signupSteps);
          }}
        >
          NEXT
        </button>
      )}

      {!isLogin && signupSteps == 2 && (
        <button
          className="w-full bg-green-mint text-white h-8 rounded-sm"
          onClick={handleSignupSubmit}
        >
          SIGN UP
        </button>
      )}
    </div>
  );
};

export default RegisterUser;
