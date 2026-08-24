import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Or HashRouter
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 👇 ADD basename="/drshidujaman" EXACTLY HERE */}
    <BrowserRouter basename="/drshidujaman"> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
