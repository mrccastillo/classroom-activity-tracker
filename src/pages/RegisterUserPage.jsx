import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  isLogin: true,
  signupSteps: 1,
  loginDetails: { emailOrUsername: "", password: "" },
  signupDetails: {
    username: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    email: "",
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

  function handleSignupSubmit() {
    console.log(signupDetails);
    navigate("/dashboard");
  }

  function handleLoginSubmit() {
    console.log(loginDetails);
    navigate("/dashboard");
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
              name="emailOrUsername"
              value={loginDetails.emailOrUsername}
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
                  type="confirm-password"
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
                  value={signupDetails.confirmPassword}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="login-input"
                  placeholder="Email"
                  name="email"
                  value={signupDetails.confirmPassword}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="login-input"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={signupDetails.confirmPassword}
                  onChange={handleInputChange}
                />
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
