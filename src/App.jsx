import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');
  // function changeColor(color){
  //   setColor(color);
  // }
  return (
    <div 
      className='w-full h-screen  duration-200' 
      style={{ backgroundColor: color}}> 
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
            onClick={() => setColor('red')} style={{backgroundColor: "red"}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >            Red
          </button>
          <button 
            onClick={() => setColor('green')} style={{backgroundColor: "green"}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >
            Green
          </button>
          <button 
            onClick={() => setColor('violet')} style={{backgroundColor: "violet"}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >            Violet
          </button>
          <button 
            onClick={() => setColor('blue')} style={{backgroundColor: "blue"}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >            Blue
          </button>
          <button 
            onClick={() => setColor('orange')} style={{backgroundColor: "orange"}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >            Orange
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
