import React from "react";
import { Link,Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Link to='linkdin'>
        <h3>Contact via Linkdin</h3>
      </Link>
      <Link to='email'>
        <h3>Contact via Email</h3>
      </Link>
        <Outlet/>
    </div>
  );
};

export default Contact;
