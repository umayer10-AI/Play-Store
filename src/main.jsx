import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import Home from './component/Home.jsx'
import Apps from './component/Apps.jsx'
import Installation from './component/Installation.jsx'
import NotFound from './component/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {index: true, Component: Home},
      {path: 'apps', Component: Apps},
      {path: 'install', Component: Installation},
    ]
  },
  {
    path: '*',
    Component: NotFound
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
