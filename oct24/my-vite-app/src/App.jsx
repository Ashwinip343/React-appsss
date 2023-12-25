// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <h1 className='text-3xl text-green-500 margin-bottom-5'>Hey, I'm Ashwini </h1>
//      <button className='bg-green-500 shadow-lg shadow-green-500/50 text-black hover:animate-bounce' >Contact me</button>
       
//     </>
//   )
// }

// export default App

import React from 'react';
import './App.css';

const videoData = [
  { id: 1, title: 'Video 1', coverUrl: 'https://via.placeholder.com/300' },
  { id: 2, title: 'Video 2', coverUrl: 'https://via.placeholder.com/300' },
  { id: 3, title: 'Video 3', coverUrl: 'https://via.placeholder.com/300' },
  // Add more video data as needed
];

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <header className="py-10 text-center">
        <h1 className="text-4xl font-bold">Ashwini Aptil</h1>
        <p className="mt-2 text-lg">Video Editor</p>
        <img
          className="mt-4 mx-auto rounded-full w-32 h-32"
          src="https://via.placeholder.com/150"
          alt="Ashwini Aptil"
        />
      </header>
      <section className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">My Latest Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videoData.map((video) => (
            <div key={video.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img className="w-full h-48 object-cover mb-4" src={video.coverUrl} alt={video.title} />
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <button className="bg-yellow-500 hover:shadow-lg px-4 py-2 rounded-full transition duration-300">
                Watch Video
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
