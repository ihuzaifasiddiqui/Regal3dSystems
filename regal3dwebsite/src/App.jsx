import { useState } from 'react'
import HeroSection from './Components/hero-section'
import WhatWeOffer from './Components/what-we-offer'
import Testimonials from './Components/testimonials'
import Footer from './Components/footer'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/about'
import { BrowserRouter , createBrowserRouter, RouterProvider} from "react-router";
import Services from './Pages/Services'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:<Home/>,
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path: "/services",
      element:<Services/>
    },
    {
      path: "/about",
      element:<About/>
    }
    
  ]
)
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className= 'w-screen h-full'>
      {/* <HeroSection />
      <WhatWeOffer />
      <Testimonials/>
      <Footer/> */}
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
