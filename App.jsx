import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {

    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        // alert("Iam clicked");
        setAddItem((preData) => {
            return [...preData, note]
        });
        console.log(note);
    };


    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />

            {addItem.map(( Val, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={Val.title}
                        content={Val.content}
                    />
                );
            })}

            <Footer />
        </>
    );
};
export default App;
