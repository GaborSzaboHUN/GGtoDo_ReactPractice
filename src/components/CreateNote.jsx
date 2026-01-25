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

        if (cleanTitle === "" || noteList.length === 0) return;
        // Majd egy popupot iderakni, hogy ne felejtsd el kitölteni a note-ot

        props.onAddNoteSection(newNoteSection);
        setTitle("");
        setNoteInputs([""]);
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
