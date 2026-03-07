import React from "react";

const SelectedNoteSection = ({title, noteList, onCloseSelectedNote, isDoneStatusChange}) => {
    return (
        <div className="selected-note-section">
        <h2>{title}</h2>
        <ul>
            {noteList.map((note) => (
                <li
                    key={note.id}
                    className={note.isDone ? "note-done" : ""}
                    onClick={() => isDoneStatusChange(note.id)}
                >
                    {note.name}
                </li>
            ))}
        </ul>
        <button onClick={onCloseSelectedNote}>Close</button>
    </div>
    )
}

export default SelectedNoteSection;