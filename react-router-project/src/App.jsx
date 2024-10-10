import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import ParamComp from './Components/ParamComp';
import Courses from './Components/Courses';
import Mocktest from './Components/Mocktest';
import Reports from './Components/Reports';
import Footer from './Components/Footer';


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path: "/About",
    element: 
    <div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path: "/Dashboard",
    element: 
    <div>
      <Navbar/>
      <Dashboard/>
    </div>,
    children:[
      {
        path:'courses',
        element: <Courses/>
      },
      {
        path:'mock-tests',
        element: <Mocktest/>
      },
      {
        path:'reports',
        element: <Reports/>
      }
    ]
  },
  {
    path: "/Navbar",
    element: <Navbar/>
  },

  {
    path: "/student/:id", //query parameter
    element:
    <div>
      <Navbar/>
      <ParamComp/>
    </div>
  }
]);

function App(){
  return(
    <div>
      <RouterProvider router={router} />
      <Footer/>
    </div>
  )
}
export default App;