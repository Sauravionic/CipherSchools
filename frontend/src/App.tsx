import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Community from './Pages/Community/Community'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Community from './Pages/Community/Community';
function App() {

  const Layout = () => {
    return (
      <div className="App">
        <Navbar/>
        <Outlet/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Community item={ "posts" } />
        },
        {
          path: "/opportunities",
          element: <Community item={ "opportunities" } />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
