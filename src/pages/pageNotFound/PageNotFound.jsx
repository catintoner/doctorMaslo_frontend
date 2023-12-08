import React from "react";

import './PageNotFound.css';

import NavPanel from "../../components/NavPanel/NavPanel";

function PageNotFound(props) {
  return (
    <>
      <NavPanel />
      <button
      onClick={props.handleGoBack}
      >TAP TAP</button>
    </>
  );
}

export default PageNotFound;
