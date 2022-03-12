import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './homePage';
import Interactive from './interactive';
import Creation from './creation';
 import Footer from './footer';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/careers' element={<Interactive />}></Route>
          <Route path='/Events' element={<Creation />}></Route>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
