import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from 'react-router-dom'

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider(); //create auth provider
      const auth = getAuth(app); //import exported firebase config details from firebase.js, inside getAuth()

      const result = await signInWithPopup(auth, provider); //this create to popUp window for select email for signIn or SignUp
      console.log(result);
      const res = await fetch("/api/auth/google", {
        //then get the data of selected email to store database and to verify
        method: "POST", //method is post
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          //'result' is variable we created, data come to that variable in bodycafter click one of email
          name: result.user.displayName, //get displaying name of email //console.log() ekk dala balanna after click a email'_variable_.user' path eke thamai me data thiyenne
          email: result.user.email, //get email
          photo: result.user.photoURL, //get email profile pic
        }),
      });

      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/')
    } catch (error) {
      console.log("could not login with google", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95"
    >
      Continue with google
    </button>
  );
}
