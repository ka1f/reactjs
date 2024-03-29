import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter,createRoutesFromElements, Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { githubinfo } from './components/Github/Github.jsx'
import Another from './components/Another/Another.jsx'
// const router = createBrowserRouter([
//    {
//       path: '/',
//       element: <Layout/>,

//       children: [ 
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       },
//       {
//         path: "user/:id",
//         element: <User/>
//       }
//       ,
//       {
//         loader: {githubinfo},
//         path: "github",
//         element: <Github/>
//       }
//     ]},
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader={githubinfo} path='github' element={<Github />}/>
      <Route path='another' element={<Another/>} />
      
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
