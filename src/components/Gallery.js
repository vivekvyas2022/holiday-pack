import React from 'react';

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-sapn-2 row-span-2'>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1679958256318-1ffdb03bfad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
            alt=''
          />
        </div>
        <div>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1679358361341-aec7a00aa5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            alt=''
          />
        </div>
        <div>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1679478562104-d1115a0a7253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
          />
        </div>
        <div>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1679254205082-ba0b1d469ac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=891&q=80'
            alt=''
          />
        </div>
        <div>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1678539300417-c443bf85255b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
