import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './login/login.js'
import Waiter from './rol/waiter/waiter.js'
import Chef from './rol/chef/chef.js'
import Admin from './rol/admin/admin.js';
import ProtectedRoute from './componentes/ProtectedRoute';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/waiter'
          element={
            <ProtectedRoute>
              <Waiter />
            </ProtectedRoute>
          } />
        <Route path='/chef'
          element={
            <ProtectedRoute>
              <Chef />
            </ProtectedRoute>
          } />
        <Route path='/admin'
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
      </Routes>
    </div>

  );
}

export default App;
