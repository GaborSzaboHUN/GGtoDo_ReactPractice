import React, { useState } from "react";

const CreateNote = (props) => {
    const [title, setTitle] = useState("");
    const [noteInputs, setNoteInputs] = useState([""]);

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

    // - - - - - CREATE noteList ARRAY BASED ON noteInputs ARRAY

    const noteList = noteInputs
        .filter((note) => note.trim() !== "")
        .map((noteText) => ({
            id: Date.now() + (Math.random() * 100).toFixed(0),
            name: noteText,
            isDone: false,
        }));

    const newNoteSection = {
        id: Date.now(),
        title: title,
        noteList: noteList,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        return newNoteSection;
    };

    return (
        <div className="notes-section">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="New title..."
                    value={title}
                    onChange={handleTitle}
                />

                {noteInputs.map((noteText, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder="New note..."
                        value={noteText}
                        onChange={(e) => handleNoteChange(e, index)}
                    />
                ))}

                <button type="button" onClick={addNewNoteInput}>
                    + Add new note...
                </button>

                <button type="submit">Add Note</button>
            </form>
        </div>
    );
};

export default CreateNote;
