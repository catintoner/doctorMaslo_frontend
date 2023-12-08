import React from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';

import MainPage from '../pages/mainPage/MainPage';
import PageNotFound from '../pages/pageNotFound/PageNotFound';

function App() {

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <div className='page__container'>
      <Routes>
        <Route exact path='/'
          element={
            <MainPage />
          }
        />

        <Route path='*'
          element={
            <PageNotFound handleGoBack={handleGoBack} />
          }
        />
      </Routes>

    </div>
  );
}

export default App;
