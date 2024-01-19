import React from "react";

import './MainPage.css';

import NavPanel from "../../components/NavPanel/NavPanel";

function MainPage() {
  return (
    <>
      <header>
        <NavPanel />
      </header>
      <main>
        <section className="main__firstTitle"></section>
      </main>
      {/* <Header /> */}
    </>
  );
}

export default MainPage;
