import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  // console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between items-center p-4 md:p-8 absolute w-full z-[100]">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className="btns">
          <Link to="/account">
            <button className="text-white mr-4 font-bold">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 text-center rounded font-bold"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="btns">
          <Link to="/signIn">
            <button className="text-white mr-4 font-bold">Sign In</button>
          </Link>
          <Link to="/signUp">
            <button className="bg-red-600 text-white px-4 py-2 text-center rounded font-bold">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
