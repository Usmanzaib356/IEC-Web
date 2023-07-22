import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Css/index.css'
import './Css/font.css'
import './Css/media.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       <App />
    </BrowserRouter>
)
