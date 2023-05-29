import { Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Dashboard from './components/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='gallery' element={<Gallery/>} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={['admin']} />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path='products' element={<Products />} />
            <Route path='orders' element={<Orders />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
