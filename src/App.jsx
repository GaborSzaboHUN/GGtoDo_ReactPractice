import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AllNotesCollection from "./components/AllNotesCollection.jsx";

const App = () => {
    const [isCreateNoteOpen, setIsCreateNoteOpen] = useState(false);

    const toggleCreateNote = () => {
        setIsCreateNoteOpen((prev) => !prev);
    };

    return (
        <div className="app-container">
            <Header />
            <AllNotesCollection isCreateNoteOpen={isCreateNoteOpen} />
            <Footer
                onToggleCreateNote={toggleCreateNote}
                isCreateNoteOpen={isCreateNoteOpen}
            />
        </div>
    );
};

export default App;
