import Contact from './pages/Contact'
import Project from './pages/Project'
import './App.css'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path:'/contact',
      element: <Contact/>
    },
    {
      path:'/project',
      element:<Project/>
    }
  ])

  return (
    <>
      <div>
        <Navbar/>
        <RouterProvider router={router}/>
       </div>
    </>
  )
}
export default App
