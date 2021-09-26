import React from 'react';
import './SelectedWriter.css'

const SelectedWriter = (props) => {
    const { name, img } = props.writer;
    return (
        <div className="selected-writer">
            <div><img src={img} alt="" /></div>
            <div><p>{name}</p></div>
        </div>
    );
};

export default SelectedWriter;