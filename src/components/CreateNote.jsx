import React, { useState, useEffect, use } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CreateNote = (props) => {
    const [title, setTitle] = useState("");
    const [noteInputs, setNoteInputs] = useState([{id: crypto.randomUUID(), text: "", isDone: false}]);
    const [inputFilled, setInputFilled] = useState(false);
    const [noteInputsLength, setNoteInputsLength] = useState(1);

    // - - - - - - CHECK IF ANY INPUT FIELD IS FILLED TO ACTIVATE THE SUBMIT BUTTON

    useEffect(() => {
        if (
            title.trim().length > 0 ||
            noteInputs.some((note) => note.text.trim().length > 0)
        ) {
            setInputFilled(true);
        } else {
            setInputFilled(false);
        }
    }, [title, noteInputs]);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    // - - - - - - HANDLE CHANGES IN EACH NOTE INPUT FIELD ACCORDING TO ITS ID

    const handleNoteChange = (e, id) => {
        setNoteInputs((prev) => (
            prev.map((note) => note.id === id ? {...note, text: e.target.value} : note)
        ));
    };

    // - - - - - ADD NEW NOTE INPUT TO THE END OF THE noteInputs ARRAY

    const addNewNoteInput = () => {
        setNoteInputs((prev) => [...prev, {id: crypto.randomUUID(), text: "", isDone: false}]);
    };



    // - - - - - - CHECK THE LENGTH OF THE noteInputs ARRAY TO SEE IF IT CHANGES WHEN ADDING OR REMOVING NOTE INPUTS

    useEffect(() => {
        setNoteInputsLength(noteInputs.length);
    }, [noteInputs]);

    // - - - - - REMOVE NOTE INPUT FROM TEH noteInputs ARRAY

    const handleRemoveNoteInput = (id) => {
        const noteIdToRemove = id;
        setNoteInputs((prev) => prev.filter((note) => note.id !== noteIdToRemove));
    };

    

    // - - - - - - HANDLE FORM SUBMISSION

    const handleSubmit = (e) => {
        e.preventDefault();

        // - - - - - CREATE noteList ARRAY BASED ON noteInputs ARRAY

        const noteList = noteInputs.filter((note) => note.text.trim() !== "")
        const cleanTitle = title.trim();

        const newNoteSection = {
            id: Date.now(),
            title: cleanTitle,
            noteList: noteList,
        };

        if (cleanTitle.length === 0 && noteList.length === 0) return;

        props.onAddNoteSection(newNoteSection);
        setTitle("");
        setNoteInputs([{id: crypto.randomUUID(), text: "", isDone: false}]);
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
                    {noteInputs.map((note) => (
                        <div 
                            className="note-texts-wrapper" 
                            key={note.id}
                        >
                            <textarea
                                className="new-note-text"
                                placeholder="New note..."
                                value={note.text}
                                onChange={(e) => handleNoteChange(e, note.id)}
                            />
                            {noteInputsLength > 1 && (
                                <button
                                    className="remove-note-button"
                                    type="button"
                                    onClick={ () => handleRemoveNoteInput(note.id) }
                                >
                                    <DeleteOutlineIcon />
                                </button>
                            )}
                        </div>
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
