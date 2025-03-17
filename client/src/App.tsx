import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home'
import Invoices from './components/pages/Invoices'

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Router>
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/invoices" element={<Invoices/>} />
      </Route>
    // </Router>
  ))
function App() {

  return (
    <div id="app"><RouterProvider router={router} /></div>
    
  )
}

export default App
