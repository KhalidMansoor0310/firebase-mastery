import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase-config";
import Loader from "./Loader";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const provider = new GoogleAuthProvider();

  const signupUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        alert("User Registered Successfully");
        setLoading(true);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
  };

  //   signup with google

  const signupWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
        console.log("successfully logged in");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="shadow p-3">
      <h3 style={{ fontFamily: "inter" }}>Register</h3>
      <form onSubmit={signupUser}>
        <div className="form-group my-2">
          <input
            type="text"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <button
              className="btn btn-lg btn-block btn-outline-success my-2"
              type="submit"
            >
              {loading ? <Loader /> : "REGISTER"}
            </button>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-danger btn-lg btn-block my-2"
              onClick={signupWithGoogle}
            >
              Signup With Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
