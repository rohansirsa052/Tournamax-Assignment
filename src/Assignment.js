import React, { useContext} from 'react';
import './style2.css';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { TopicContext } from './TopicContext';

const AssignmentList = () => {
    const { topicList, deleteTopic } = useContext(TopicContext);  
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/add-topic");
    };

    const handleEdit = (index) => {
        navigate(`/add-topic?index=${index}`);
    };

    const handleDelete = (index) => {
        if (window.confirm("Are you sure you want to delete this topic?")) {
            deleteTopic(index);
        }
    };

    return (
        <div className="assignment-container">
            <div className="assignment-header">
                <h2>Tournamax Assignment</h2>
                <button className="add-topic-button" onClick={handleClick}> Add Topic  </button>
            </div>
            <div className="assignment-list">
                {topicList.map((topic, index) => (
                    <div key={index} className="assignment-item">
                        <div>
                            <h3>{topic.title}</h3>
                            <p>{topic.des}</p> 
                        </div>
                        <div className="assignment-actions">
                            <FiEdit className='edit-button' onClick={() => handleEdit(index)} />
                            <MdDelete className='delete-button' onClick={() => handleDelete(index)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AssignmentList;
