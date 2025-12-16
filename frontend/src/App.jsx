import React from 'react'

import AppRouter from './routes/AppRouter'
import { ToastContainer } from 'react-toastify'
export const apiUrl = import.meta.env.VITE_API_URL;

const App = () => {
  return (
    <>
    <ToastContainer/>
    <AppRouter />
    </>
  )
}

export default App