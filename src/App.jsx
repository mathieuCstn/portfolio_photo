import { Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Register from './pages/Register';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setType } from './redux/screenDeviceSlice';
import Unauthorized from './pages/Unauthorized';

const mediaQueryIsMobileDevice = window.matchMedia('(max-width: 820px)')

function App() {
  const [isMobileDisplay, setIsMobileDisplay] = useState(mediaQueryIsMobileDevice.matches)
  const dispatch = useDispatch()

  mediaQueryIsMobileDevice.addEventListener('change', (e) => {
      setIsMobileDisplay(e.currentTarget.matches)
  })

  useEffect(() => {
    if(isMobileDisplay) {
      dispatch(setType('mobile'))
    } else {
      dispatch(setType('desktop'))
    }
  }, [isMobileDisplay, dispatch])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='gallery' element={<Gallery/>} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path='unauthorized' element={<Unauthorized />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={['admin']} />}>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='products' element={<Products />} />
            <Route path='orders' element={<Orders />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
