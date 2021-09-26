import React from 'react';
import SelectedWriter from '../SelectedWriter/SelectedWriter';
import Writer from '../Writer/Writer';
import './AddedWriters.css'

const AddedWriters = (props) => {
    console.log('added : ', props)

    // access selected items---------------------------------
    const { name, img } = props.selectedWriter;

    // access all the added writers -------------------------
    const { addedWriters } = props;
    // console.log(addedWriters);

    let totalBooks = 0;
    for (const writer of addedWriters) {
        totalBooks = totalBooks + writer.Books;
    }
    return (
        <div>
            <h1>Writers Added :{addedWriters.length}</h1>
            <h2>Total books : {totalBooks}</h2>

            <div>
                {
                    addedWriters.map(writer => <SelectedWriter writer={writer}></SelectedWriter>)
                }
            </div>
        </div>
    );
};

export default AddedWriters;