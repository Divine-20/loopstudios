import { Route, Routes } from "react-router-dom";
import './App.css';
import Creation from './creation';
import HomePage from './homePage';
import Interactive from './interactive';

function App() {


  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/careers' element={<Interactive />}></Route>
      <Route path='/Events' element={<Creation />}></Route>
    </Routes>
  );
}

export default App;
