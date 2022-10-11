import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
     const {id, name, logo} = topic
    return (
        <div className="card card-compact w-60 bg-sky-200 shadow-xl ">
            <figure><img className='h-48' src={logo}/></figure>
            <div className="card-body">
            <h2 className="card-title">{name}</h2>
           
            <div className="card-actions justify-end">
                <Link to={`/topics/${id}`}><button className="p-2 rounded-lg btn-primary">Start Practice</button></Link>
            </div>
            </div>
            </div>
    );
};

export default Topic;