import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import Detail from './Components/ProductDetail/Detail';
import Home from './Components/ProductDetail/Home';

function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </div>
  );
}

export default App;
