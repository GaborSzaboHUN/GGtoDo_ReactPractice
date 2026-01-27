import React, { useState } from "react";
import CreateNote from "./CreateNote.jsx";

const NotesSection = (props) => {
    const [notesGroup, setNotesGroup] = useState([]);

    const handleAddNoteSection = (newNoteSection) => {
        setNotesGroup((prev) => [newNoteSection, ...prev]);
    };

    return (
        <div className="notes-section">
            <CreateNote
                onAddNoteSection={handleAddNoteSection}
                isCreateNoteOpen={props.isCreateNoteOpen}
            />
            {notesGroup.map((noteSection) => (
                <div key={noteSection.id} className="note-section-display">
                    <h2>{noteSection.title}</h2>
                    <ul>
                        {noteSection.noteList.map((note) => (
                            <li
                                key={note.id}
                                className={note.isDone ? "note-done" : ""}
                            >
                                {note.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default NotesSection;
