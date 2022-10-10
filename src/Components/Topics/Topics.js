import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic'
const Topics = ({topic}) => {
     
    const {id, name, logo} = topic
    return (
        <div className='h-56 w-56  border-green-900 mt-12'>
           
           <img src={logo} alt="" />
           <div className='flex justify-around items-center mt-4'>
            <p><span className=' text-sky-500'>{name}</span></p>
            <button className='bg-blue-500 p-2 text-white rounded-lg'>Start Practice</button>
           </div>
          
           
        </div>
    );
        
       
};

export default Topics;