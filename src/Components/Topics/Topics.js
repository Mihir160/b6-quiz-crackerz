import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic'
const Topics = () => {
    const topicsloader = useLoaderData()
    const topics = topicsloader.data
   
   
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 border-solid justify-items-center lg:mt-8 mt-56 gap-4 lg:p-48'>
                    {
                        topics.map(topic =>(<Topic key={topic.id} topic={topic}></Topic>))
                    }
        </div>
    );
        
       
};

export default Topics;