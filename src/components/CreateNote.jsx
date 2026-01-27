import React, { useState, useEffect } from "react";
import DoneIcon from "@mui/icons-material/Done";

const CreateNote = (props) => {
    const [title, setTitle] = useState("");
    const [noteInputs, setNoteInputs] = useState([""]);
    const [inputFilled, setInputFilled] = useState(false);

    // - - - - - - CHECK IF ANY INPUT FIELD IS FILLED TO ACTIVATE THE SUBMIT BUTTON

    useEffect(() => {
        if (
            title.trim().length > 0 ||
            noteInputs.some((note) => note.trim().length > 0)
        ) {
            setInputFilled(true);
        } else {
            setInputFilled(false);
        }
    }, [title, noteInputs]);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    // - - - - - - HANDLE CHANGES IN EACH NOTE INPUT FIELD ACCORDING TO ITS INDEX

    const handleNoteChange = (e, index) => {
        const newNoteInputs = [...noteInputs];
        newNoteInputs[index] = e.target.value;
        setNoteInputs(newNoteInputs);
    };

    // - - - - - ADD NEW NOTE INPUT TO THE END OF THE noteInputs ARRAY

    const addNewNoteInput = () => {
        setNoteInputs((prev) => [...prev, ""]);
    };

    // - - - - - - HANDLE FORM SUBMISSION

    const handleSubmit = (e) => {
        e.preventDefault();

        // - - - - - CREATE noteList ARRAY BASED ON noteInputs ARRAY

        const noteList = noteInputs
            .filter((note) => note.trim() !== "")
            .map((noteText) => ({
                id: Date.now() + Number((Math.random() * 10000).toFixed(0)),
                name: noteText.trim(),
                isDone: false,
            }));

        const cleanTitle = title.trim();

        const newNoteSection = {
            id: Date.now(),
            title: cleanTitle,
            noteList: noteList,
        };

        if (cleanTitle.length === 0 && noteList.length === 0) return;

        props.onAddNoteSection(newNoteSection);
        setTitle("");
        setNoteInputs([""]);
    };

    return (
        <>
            <form
                className={`new-note-form ${
                    props.isCreateNoteOpen ? "open" : ""
                }`}
                onSubmit={handleSubmit}
            >
                <textarea
                    className="new-note-title"
                    type="text"
                    placeholder="New title..."
                    value={title}
                    onChange={handleTitle}
                />
                <div className="notes-texts-container">
                    {noteInputs.map((noteText, index) => (
                        <textarea
                            key={index}
                            className="new-note-text"
                            placeholder="New note..."
                            value={noteText}
                            onChange={(e) => handleNoteChange(e, index)}
                        />
                    ))}
                </div>

                <button
                    className="add-new-note-button"
                    type="button"
                    onClick={addNewNoteInput}
                >
                    <div>+</div> Add new note...
                </button>

                <button
                    className={`done-button ${inputFilled ? "active" : ""}`}
                    type="submit"
                >
                    <DoneIcon />
                </button>
            </form>
        </>
    );
};

export default CreateNote;
