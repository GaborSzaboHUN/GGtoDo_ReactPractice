import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const NoteInput = ({note, handleNoteChange, handleRemoveNoteInput, noteInputsLength}) => {

    return (
        <div 
            className="note-texts-wrapper" 
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
                    <DeleteForeverIcon className="delete-forever-icon" />
                    <DeleteOutlineIcon className="delete-outline-icon"/>
                </button>
            )}
        </div>
    )
}

export default NoteInput;