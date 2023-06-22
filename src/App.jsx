
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";


import Home from './components/home/Home'
import Blog from './components/blog/Blog'
import About from './components/about/About'
import Services from './components/services/Services'
import Pricing from './components/pricing/Pricing'
import Contact from './components/contact/Contact'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
function App() {
  
  const Layout = ()=>{
    return(
      <div>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/services",
          element: <Services/>,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
      ],
    },
  ]);
  return (
    <>
        <RouterProvider router={router} />
       </>
  )
}

export default App






