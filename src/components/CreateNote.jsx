import React, { useState, useEffect } from "react";
import NoteInput from "./NoteInput";
import DoneIcon from "@mui/icons-material/Done";


const CreateNote = (props) => {
    const [title, setTitle] = useState("");
    const [noteInputs, setNoteInputs] = useState([{id: crypto.randomUUID(), text: "", isDone: false}]);
    const [inputFilled, setInputFilled] = useState(false);

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



    // - - - - - REMOVE NOTE INPUT FROM THE noteInputs ARRAY

    const handleRemoveNoteInput = (id) => {
        const noteIdToRemove = id;
        setNoteInputs((prev) => prev.filter((note) => note.id !== noteIdToRemove));
    };

    

    // - - - - - - HANDLE FORM SUBMISSION

    const handleSubmit = (e) => {
        e.preventDefault();

        // - - - - - CREATE noteList ARRAY BASED ON noteInputs ARRAY

        const noteList = noteInputs
            .map((note) => ({id: note.id, name: note.text, isDone: false}))
            .filter((note) => note.name.trim() !== "");

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
                        <NoteInput 
                            key={note.id}
                            note={note}
                            handleNoteChange={handleNoteChange}
                            handleRemoveNoteInput={handleRemoveNoteInput}
                            noteInputsLength={noteInputs.length}
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
