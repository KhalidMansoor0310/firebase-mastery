import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { auth } from "./firebase-config";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <div className="container mt-5 " style={{ fontFamily: "inter" }}>
      <h3 className="text-center my-5">
        Wellcome to Firebase Authentication & Authorization{" "}
      </h3>
      <div className="row m-auto">
        {user == null ? (
          <>
            <div className="col-md-6">
              <Signup />
            </div>
            <div className="col-md-4">
              <Signin />
            </div>
          </>
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
}

export default App;
