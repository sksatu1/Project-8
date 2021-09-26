import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import "./Writer.css"

const Writer = (props) => {
    const { name, country, Books, Died, phone, img } = props.writer;
    return (
        <div className="single-writer">
            <img src={img} alt="" />
            <h3>name : {name}</h3>
            <h3>country : {country}</h3>
            <h3>books : {Books}</h3>
            <p>phone : {phone}</p>
            <p>Died : {Died}</p>
            <button onClick={() => props.addWriterHandler(props.writer)} className="btn-regular"><FontAwesomeIcon icon={faPenNib} /> Add Writers</button>
        </div>
    );
};

export default Writer;