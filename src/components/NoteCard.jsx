import React from "react";

const NoteCard = ({ id, title, noteList, onCardClick, color }) => {
    return (
        <div 
            className="note-section-display"
            onClick={() => onCardClick(id)}
        >
            <div className="note-color-stripe" style={{backgroundColor: color}}></div>
            <h2>{title}</h2>
            <ul>
                {noteList.map((note) => (
                    <li
                        key={note.id}
                        className={note.isDone ? "note-done" : ""}
                    >
                        {note.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NoteCard;