import React from "react";

const CreateNote = () => {
    return (
        <>
            <form>
                <input type="text" name="title" placeholder="New title..." />
                <input type="text" name="note" placeholder="New note..." />
                <button type="button" name="addNewNote">
                    + Add new note...
                </button>

                <button type="submit">Add Note</button>
            </form>
        </>
    );
};

export default CreateNote;
