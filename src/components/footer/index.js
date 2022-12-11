import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center py-4 bg-stone-900 text-white">
      <h5 className="mr-1">
        &copy; {new Date().getFullYear()}
        <span className="ml-1">ComfySloth</span>
      </h5>
      <h5 className="ml-1">All rights reserved.</h5>
    </div>
  );
};

export default Footer;
