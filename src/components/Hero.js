import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img
        src='https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
        alt=''
        className='w-full h-full object-cover'
      />
      <div className='max-w-[1140] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='font-bold text-4xl '>Find Your Special Trip</h1>
          <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            aliquid quae enim rem tempora doloribus nostrum incidunt eaque
            facere, vitae blanditiis, autem provident inventore molestias
            numquam iste? Necessitatibus, ipsa? Praesentium?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
