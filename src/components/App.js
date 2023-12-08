import React from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';

function App() {

  const navigate = useNavigate();

  function handleReturnBack() {
    navigate.goBack();
  }

  return (
    <div className='page'>
      <div className='page__container'>
        <Routes>
          <Route exact path='/'>
            hello, world!
          </Route>

          <Route path='*'>

          </Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;
