import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center py-6 bg-stone-900 text-white fixed bottom-0 left-0 right-0">
      <h5 className="mr-1">
        &copy; {new Date().getFullYear()}
        <span className="ml-1">Miroslav Stankov</span>
      </h5>
      <h5 className="ml-1">All rights reserved.</h5>
    </footer>
  );
};

export default Footer;
