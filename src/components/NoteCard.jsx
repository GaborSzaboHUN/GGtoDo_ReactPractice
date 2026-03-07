import React from "react";

const NoteCard = ({ id, title, noteList, onCardClick }) => {
    return (
        <div 
            className="note-section-display"
            onClick={() => onCardClick(id)}
        >
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