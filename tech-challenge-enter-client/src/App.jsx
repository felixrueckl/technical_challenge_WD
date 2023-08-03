import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";

import "./App.css";

function App() {
  const [phonesList, setPhonesList] = useState([]);
  const [fetchingPhones, setFetchingPhones] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getPhonesList();
  }, []);

  const getPhonesList = async () => {
    try {
      const response = await axios.get("http://localhost:5005/phones/");
      console.log("Status code:", response.status);
      console.log("Data:", response.data);

      setTimeout(() => {
        setPhonesList(response.data);
        setFetchingPhones(false);
      }, 1000);
    } catch (err) {
      console.log(err);
      navigate("/error");
    }
  };

  if (fetchingPhones) {
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <Navbar phonesList={phonesList} />

      <div id="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/phones/:id"
            element={<PhoneDetailsPage phonesList={phonesList} />}
          />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
