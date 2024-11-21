import React from "react";

const RegisterUser = (props) => {
  return (
    <div className="absolute p-4 w-[20rem] min-h-[15rem] bg-loginGreen-dark rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-full h-8 bg-white rounded-sm">
        <p className="inline-block text-center w-1/2 leading-8 login-active rounded-smrounded-sm">
          LOG IN
        </p>
        {/* if inactive, text-mint */}
        <p className="inline-block text-center w-1/2 leading-8 text-loginGreen-mint rounded-sm">
          SIGNUP
        </p>
      </div>
      <div className="my-10">
        <input
          type="text"
          className="login-input"
          placeholder="Username / Email"
        />
        <input type="text" className="login-input" placeholder="Password" />
        <p className="text-white/50 text-xs">Forgot password?</p>
      </div>
      <button className="w-full bg-loginGreen-mint text-white h-8 rounded-sm">
        LOG IN
      </button>
    </div>
  );
};

export default RegisterUser;
