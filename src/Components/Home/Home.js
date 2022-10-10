import React from 'react';
import Lottie from 'lottie-react'
import quiz from '../assets/quiz.json'
import Topics from '../Topics/Topics';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
    const topicsloader = useLoaderData()
    const topics = topicsloader.data
    console.log(topics)
    return (
        <div>
             <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
                    <div className='flex flex-col items-center justify-between lg:flex-row'>
                        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                        <div className='max-w-xl mb-6 lg:mt-8'>
                            
                            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                            Introduction To <br className='hidden md:block mt-4' /> Web Development Quiz{' '}
                            <span className='inline-block text-blue-400 mt-4'>HTML CSS JS REACT</span>
                            </h2>
                            <p className='text-base text-gray-700 md:text-lg'>
                            This quiz covers all of the topics learnt in the "Introduction to Web Development" e-learning environment. 
                            There are no trick questions and all of the answers have been given at some point in the online sessions - 
                            recap using the presentations if you need to.
                            </p>
                        </div>
                        
                        </div>
                        <div className='relative lg:w-1/2 '>
                        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                            <Lottie animationData={quiz} loop={true} />
                        </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8 m-24 grid lg:grid-cols-4 border-solid gap-8 justify-center'>
                    {
                        topics.map(topic =>(<Topics key={topic.id} topic={topic}></Topics>))
                    }
                </div>
    
                
        </div>
    );
};

export default Home;