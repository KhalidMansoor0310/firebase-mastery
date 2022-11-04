import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase-config";
import Loader from "./Loader";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setLoading(true);
        alert("User Signin Successfully");
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };
  return (
    <div className="shadow p-3 offset-md-2">
      <h3 style={{ fontFamily: "inter" }}>Login</h3>
      <form onSubmit={signInUser}>
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
        <button className="btn btn-outline-primary my-2" type="submit">
          {loading ? <Loader /> : "LOGIN"}
        </button>
      </form>
    </div>
  );
}

export default Signin;
