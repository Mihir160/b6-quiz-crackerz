import React from 'react';

const Questions = ({question}) => {
 
 console.log(question)
    return (
        <div >
             <div className="card-body">
            
              <div className='card lg:w-full bg-base-100 shadow-xl p-8'>
              <h2 className="card-title">{question.question}</h2>
               <div className='grid lg:grid-cols-2 gap-8 mt-4'>
               {
                    question.options.map(answer =>(
                        <div className='flex items-center'>
                            <input type="radio" name="radio-2" className="radio radio-primary" /> 
                            <p className='p-2'>{answer}</p>
                        </div>
                    ))
                }
               </div>
              </div>
    
         </div>
        </div>
    );
};

export default Questions;

            
            