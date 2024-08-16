import React, { useState, useEffect, useContext } from 'react';
import "./style2.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { TopicContext } from './TopicContext';
import queryString from 'query-string';

const AddTopic = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { topicList, addTopic, updateTopic } = useContext(TopicContext);
    const queryParams = queryString.parse(location.search);
    const editIndex = queryParams.index ? parseInt(queryParams.index, 10) : undefined;
    const [input, setInput] = useState({
        title: "",
        des: ""
    });

    useEffect(() => {
        if (editIndex !== undefined) {
            const topicToEdit = topicList[editIndex];
            if (topicToEdit) {
                setInput(topicToEdit); 
            }
        }
    }, [editIndex, topicList]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleClick = () => {
        if (input.title && input.des) {
            if (editIndex !== undefined) {
                updateTopic(editIndex, input); 
            } else {
                addTopic(input);
            }
            navigate("/"); 
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <React.Fragment>
            <div className="assignment-container">
                <div className="assignment-header">
                    <h2>{editIndex !== undefined ? "Edit Topic" : "Add Topic"}</h2>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Topic Title"
                            className="input-field"
                            value={input.title}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="des"
                            placeholder="Topic Description"
                            value={input.des}
                            className="input-field"
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            className="add-button"
                            onClick={handleClick}
                        >
                            {editIndex !== undefined ? "Update Topic" : "Add Topic"}
                        </button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AddTopic;
