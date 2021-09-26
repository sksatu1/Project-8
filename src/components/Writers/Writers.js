import React, { useEffect } from 'react';
import { useState } from 'react';
import AddedWriters from '../AddedWriters/AddedWriters';
import Writer from '../Writer/Writer';
import "./Writers.css";

const Writers = () => {
    const [writers, setWriters] = useState([]);

    const [addedWriters, setAddedWriters] = useState([]);

    useEffect(() => {
        fetch('./writers.json')
            .then(res => res.json())
            .then(data => setWriters(data))
    }, [])


    // add writer button handler ---------------------------------------------
    const addWriterHandler = (writer) => {
        const newaddedWriters = [...addedWriters, writer];
        setAddedWriters(newaddedWriters)
    }

    return (
        <div className="writers-container">

            {/* display writers ----------------------- */}
            <div className="writers">
                {
                    writers.map(writer => <Writer
                        key={writer.phone}
                        addWriterHandler={addWriterHandler}
                        writer={writer}></Writer>)
                }
            </div>

            {/* writer cart ---------------------------- */}
            <div className="writers-added">
                <AddedWriters
                    addedWriters={addedWriters} ></AddedWriters>
            </div>
        </div>
    );
};

export default Writers;