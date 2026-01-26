import React from "react";
import Time from "./Time.jsx";
import { year, formattedDate } from "../utils/Date.js";
import AddIcon from "@mui/icons-material/Add";

const Footer = () => {
    return (
        <>
            <footer>
                <p>© {year} GGtoDo. All rights reserved.</p>
                <div className="footer-action-container">
                    <div className="footer-time-date-container">
                        <Time />
                        <div className="footer-date">{formattedDate}</div>
                    </div>
                    <button className="add-note-group-button">
                        <AddIcon />
                    </button>
                </div>
            </footer>
        </>
    );
};

export default Footer;
