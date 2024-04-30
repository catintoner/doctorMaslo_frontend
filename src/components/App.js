import React from 'react';

import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";

import MainPage from "../pages/mainPage/MainPage";
import PageNotFound from "../pages/pageNotFound/PageNotFound";

function App() {

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  function getMaskForNumber(phone) {
    return phone.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, "+7($1)$2-$3-$4");
  };

  return (
    <div className="page__container">
      <Routes>
        <Route exact path="/"
          element={
            <MainPage
              getMaskForNumber={getMaskForNumber}
            />
          }
        />

        <Route path="*"
          element={
            <PageNotFound
              handleGoBack={handleGoBack}
              getMaskForNumber={getMaskForNumber}
            />
          }
        />
      </Routes>

    </div>
  );
}

export default App;
