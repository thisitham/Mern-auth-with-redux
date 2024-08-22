import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Signin() {
  const [formData, setFormData] = useState({});
  //const [error, setError] = useState(false); //this is for show error when occur //initially false
  //const [loading, setLoading] = useState(false); //this is for show buton display as loading when submiting data //initially false
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value }); //"e.target.id" means input tag eke id eka
  };

  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //setLoading(true); //after click button loading true
      //setError(false); //befor submit no error

      dispatch(signInStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }); //wenada 'axios' use karanawa axios use krnne nathi nisa mehema denna oni //'vite.config.js' eka blnne eke server details dunna with url
      const data = await res.json();
      //console.log(data);

      //setLoading(false); //after submit loading false
      //setError(false); //if not error error set false

      if (data.success === error) {
        //setError(true); //if got error error set true
        dispatch(signInFailure(data));
        return;
      }

      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      //setLoading(false); // when error occured loading false
      //setError(true); // when error occured error true

      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {/* disabled={loading} means when loading button desabled */}
          {loading ? "Loading..." : "Sign In"}
          {/*it means if loading true show 'Loading...' else show 'Sign Up'*/}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">
        {error ? error.message || "Something went wrong !" : ""}
      </p>
      {/* error true wenakota meka display wenawa*/}
    </div>
  );
}
