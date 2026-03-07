import React, { useState } from "react";
import CreateNewNote from "./CreateNewNote.jsx";
import NoteCard from "./NoteCard.jsx";
import SelectedNoteSection from "./SelectedNoteSection.jsx";

const AllNotesCollection = (props) => {
    const [notesGroup, setNotesGroup] = useState([]);
    const [selectedNoteId, setSelectedNoteId] = useState(null);

    const handleAddNoteSection = (newNoteSection) => {
        setNotesGroup((prev) => [newNoteSection, ...prev]);
    };

    const handleSelectedNoteId = (id) => {
        setSelectedNoteId(id);
    }

    const handleCloseSelectedNote = () => {
        setSelectedNoteId(null);
    }

    const handleDoneStatusChange = (noteId) => {
        // még ki kell találni
    };

    const selectedNoteSection = notesGroup.find((noteSection) => noteSection.id === selectedNoteId);

    return (
        <div className="notes-section">
            <CreateNewNote
                onAddNoteSection={handleAddNoteSection}
                isCreateNoteOpen={props.isCreateNoteOpen}
            />
            {notesGroup.map((noteSection) => (
                <NoteCard 
                    key={noteSection.id}
                    id={noteSection.id} 
                    title={noteSection.title} 
                    noteList={noteSection.noteList}
                    onCardClick={handleSelectedNoteId}
                />
            ))}
            {selectedNoteId && (
                <SelectedNoteSection 
                    title={selectedNoteSection.title}
                    noteList={selectedNoteSection.noteList}
                    isDoneStatusChange={handleDoneStatusChange}
                    onCloseSelectedNote={handleCloseSelectedNote}
                />
            )}

        </div>
    );
};

export default AllNotesCollection;
