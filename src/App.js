import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import Detail from './Components/ProductDetail/Detail';
import Home from './Components/ProductDetail/Home';
import Team from './Components/Pages/Team'

function App() {
  return (
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </div>
  );
}

export default App;
