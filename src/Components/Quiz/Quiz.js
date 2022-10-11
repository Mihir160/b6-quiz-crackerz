import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizData = useLoaderData()
     const {name, questions} = quizData.data
     console.log(questions)

    return (
        <div className='grid lg:grid-cols-2 '>
            <div className='mt-4'>
           
            <h1 className='text-3xl text-center'>Quiz of {name}</h1>
            
            <div>
            
                {
                    questions.map(question=>(<Questions key={question.id} question={question}></Questions>))
                }
            </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Quiz;