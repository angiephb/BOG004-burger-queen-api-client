import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './login/login.js'
import Waiter from './rol/waiter/waiter.js'
import Chef from './rol/chef/chef.js'
import Admin from './rol/admin/admin.js';



const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/waiter' element={<Waiter />} />
        <Route path='/chef' element={<Chef />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>

  );
}

export default App;
