import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({question, index}) => {


    const answerloader = (correntAnswer, answer) => {

         if(correntAnswer === answer){
            toast.success('Answer is Right !', {
                position: toast.POSITION.TOP_CENTER
            });  
         }
         
         else{
            toast.error('Answer is Wrong !', {
                position: toast.POSITION.TOP_CENTER
            });
         }
   
       }

 const setrightAnswer = ringtAnswer =>{
    toast.success(ringtAnswer, {
        position: toast.POSITION.TOP_CENTER
    });
    
 } 

// const [ringtAnswer, setrightAnswer] = useState(false)

    return (
        <div >
             <div className="card-body">
            
              <div className='card lg:w-full bg-base-100 shadow-xl p-8'>
              <div className='flex items-center justify-between'>
              <h2 className="card-title">Quiz {index} : {question.question}</h2>
              <div >
              <svg onClick={()=> setrightAnswer(question.correctAnswer)}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 lg:w-6 lg:h-6 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              </div>
               <div className='grid lg:grid-cols-2 gap-8 mt-4'>
               {
                    question.options.map(answer =>(
                        <div className='flex items-center'>
                            <input onClick={ () => answerloader(answer, question.correctAnswer)}  type="radio" name="radio-2" className="radio radio-primary" ></input> 
                            <p className='p-2'>{answer}</p>
                            <ToastContainer />
                           
                        </div>
                    ))
                }
               </div>
               {/* {
                ringtAnswer && (
                     
                        
                      <div>
                        <p><span className='font-bold'>Answer: </span> {question.correctAnswer}</p>
                    </div>
                )
               } */}
              </div>
             
         </div>
        </div>
    );
};

export default Questions;

            
            