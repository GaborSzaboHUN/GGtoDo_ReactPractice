import React from "react";
import Time from "./Time.jsx";
import { year, formattedDate } from "../utils/Date.js";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import DoneIcon from "@mui/icons-material/Done";

const Footer = () => {
    return (
        <>
            <footer>
                <p>© {year} GGtoDo. All rights reserved.</p>
                <div className="footer-action-container">
                    <button className="done-button">
                        <DoneIcon />
                    </button>
                    <button className="add-note-group-button">
                        <AddIcon />
                    </button>
                    <div className="footer-time-date-container">
                        <Time />
                        <div className="footer-date">{formattedDate}</div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
