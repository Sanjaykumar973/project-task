import { useState, useEffect } from "react";
import Login from "./components/login";
import Register from "./components/Register";
import Home from "./components/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import FormContext from "../FormContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Explore from "./components/Explore";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);
  const [yogaTeachers, setYogaTeacher] = useState([]);

  const login = (email, password) => {
    fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == false) {
          toast.error(data.message);
        } else {
          setUser(data);
          localStorage.setItem("userdata", JSON.stringify(data));
          navigator("/home");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const navigator = useNavigate();

  const signup = (name, email, password) => {
    fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == false) {
          toast.error(data.message);
        } else {
          toast.success(data.message);
          navigator("/");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const fetchAllTeachers = () => {
    // if user doent's exits then go back
    if (!user) return;

    fetch("http://localhost:8000/yoga/getyoga", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == false) {
          alert("Error while Fetching Teachers " + data.message);
        } else {
          setYogaTeacher(data.yogaTeachers);
        }
      })
      .catch((err) => console.log("Error ", err.message));
  };

  useEffect(() => {
    if (localStorage.getItem("userdata")) {
      setUser(JSON.parse(localStorage.getItem("userdata")));
      navigator("/home");
    }
  }, []);

  const logout = () => {
    navigator("/");
    localStorage.removeItem("userdata");
    setUser(null);
  };

  return (
    <div>
      <FormContext.Provider
        value={{
          login,
          signup,
          user,
          Explore,
          fetchAllTeachers,
          logout,
          yogaTeachers,
        }}
      >
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </FormContext.Provider>
    </div>
  );
}

export default App;
