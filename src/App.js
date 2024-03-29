import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/main';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;