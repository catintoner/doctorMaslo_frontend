import React, { useEffect } from "react";

import "./ContactsBar.css";

import { shopsInfo } from "../../constants/constants.jsx";

function ContactsBar({ fontSizeCls, getMuskForNumber }) {

  return (
    <li className="contacts">
      <a href={`mailto: ${shopsInfo.email}`} className={`contacts__data ${fontSizeCls}`}>{shopsInfo.email}</a>
      <a href={`tel: +7${shopsInfo.phone}`} className={`contacts__data ${fontSizeCls}`}>{getMuskForNumber(shopsInfo.phone)}</a>
    </li>
  );
};

export default ContactsBar;
