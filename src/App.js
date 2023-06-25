import  {BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './pages/home/index';
import Login from './pages/login/index';
import Register from './pages/register/index';

function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
