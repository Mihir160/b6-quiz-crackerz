import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const datLoader = useLoaderData()
    const data = datLoader.data
    // console.log(data)
    return (
        <div className='mt-8'>
            <ResponsiveContainer width="100%" height={650}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
         
          <Line type="monotone" dataKey='total' stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>  
        </div>
    );
};

export default Statistics;