import React from "react";
import Link from "../components/Link";
import '../App.css';


const Footer = () => {
  return (
    <div className="btns">
      <Link filter={"SHOW_ALL"}  className="btn-submit">All</Link>
      <Link filter={"SHOW_ACTIVE"} className="btn-submit">Active</Link>
      <Link filter={"SHOW_COMPLETE"} className="btn-submit">Complete</Link>
    </div>
  );
};

export default Footer;
