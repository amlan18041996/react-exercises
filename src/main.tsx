import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { routerExercise, routerPortfolio } from './utilities/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routerPortfolio} />
  </React.StrictMode>,
)
