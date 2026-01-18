import React from "react";
import Time from "./Time.jsx";
import { year, formattedDate } from "./utils/Date";

const Footer = () => {
    return (
        <>
            <footer>
                <p>© {year} GGtoDo. All rights reserved.</p>
                <div>
                    <div>{formattedDate}</div>
                    <Time />
                </div>
            </footer>
        </>
    );
};

export default Footer;
