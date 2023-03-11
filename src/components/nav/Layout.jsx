import React from "react";
import TopBar from "./TopBar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-primary relative ">
      <div className="sticky top-0">
        <TopBar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
