import './App.css';
import AboutHospital from './components/aboutHospital/AboutHospital';
import Appointments from './components/appointments/Appointments';
import BookAppoinmentPage from './components/bookAppoinmentPage/BookAppoinmentPage';
import Header from './components/header/Header';
import HomePage from './components/homePage/HomePage';
import LoginPage from './components/loginPage/LoginPage';
import SignUpPage from './components/signUpPage/SignUpPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const router = createBrowserRouter([
  { 
    path:'/login',
    element:<LoginPage/>
  },
  { 
    path:'/signup',
    element:<SignUpPage/>
  },
  { 
    path:'/home/bookAppointment',
    element:<HomePage/>
  },
  { 
    path:'/home/bookAppointment',
    element:<BookAppoinmentPage/>
  },
  { 
    path:'/home/appointment',
    element:<><Header/><Appointments/></>
  },
  { 
    path:'/home/aboutHospital',
    element:<><Header/><AboutHospital/></>
  },
])

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
