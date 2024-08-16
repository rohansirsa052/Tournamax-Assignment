import React, { createContext, useState } from 'react';

export const TopicContext = createContext();

export const TopicProvider = ({ children }) => {
    const [topicList, setTopicList] = useState([]);

    const addTopic = (newTopic) => {
        setTopicList((prevTopics) => [...prevTopics, newTopic]);
    };

    const updateTopic = (index, updatedTopic) => {
        setTopicList((prevTopics) => {
            const newTopics = [...prevTopics];
            newTopics[index] = updatedTopic;
            return newTopics;
        });
    };

    const deleteTopic = (index) => {
        setTopicList((prevTopics) => prevTopics.filter((_, i) => i !== index));
    };

    return (
        <TopicContext.Provider value={{ topicList, addTopic, updateTopic, deleteTopic }}>
            {children}
        </TopicContext.Provider>
    );
};
