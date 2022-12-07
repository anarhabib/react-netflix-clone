import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {
  const { user, logIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="absolut w-full h-full object-cover hidden sm:block"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/68c1b94a-de06-4de9-a958-1d4e5d804c4f/AZ-en-20221128-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="fixed w-full h-full bg-black/60 top-0 left-0"></div>
        <div className="fixed w-full h-full top-0  px-4 py-40 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto  bg-black/75 text-white">
            <div className="w-full h-200px  py-12 px-8">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error?.message ? (
                <p className="bg-red-600 p-4 mt-4">{error?.message}</p>
              ) : null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full rounded bg-gray-700 p-4 my-4"
                  type="text"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full rounded bg-gray-700 p-4 my-4"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-red-600 w-full py-4 font-bold rounded my-6">
                  Sign In
                </button>
              </form>
              <div className="flex justify-between">
                <p>
                  <input type="checkbox" />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </p>
                <p className="text-gray-600">Need help?</p>
              </div>
              <p className="py-8 ">
                <span className="text-gray-600 mr-4">New to Netflix?</span>
                <Link to="/signUp">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
