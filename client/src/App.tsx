import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home'
import Invoices from './components/pages/Invoices'
import { queryClient } from '../api/reactQueryClient';
import { QueryClientProvider } from '@tanstack/react-query';

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
    <QueryClientProvider client={queryClient}>
      <div id="app"><RouterProvider router={router} /></div>
    </QueryClientProvider>
  )
}

export default App
