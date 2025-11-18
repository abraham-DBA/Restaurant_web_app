import React from "react";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white shadow-sm z-50">
      <a href="/">
        <img
          className="h-9"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
          alt="Logo"
        />
      </a>
      <div className="flex items-center gap-5 text-gray-600">
        <p className="hidden md:block">Hi! Admin</p>
        <button className="border rounded-full text-sm px-4 py-1 hover:bg-gray-100">Logout</button>
      </div>
    </header>
  );
};

export default Header;
