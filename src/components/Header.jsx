import React from "react";

const Header = () => {
    return (
        <header className="app-header-bar">
            <button className="header-bamburger-button">☰</button>
            <input
                className="header-search-input"
                type="text"
                placeholder="Search..."
            />
        </header>
    );
};

export default Header;
