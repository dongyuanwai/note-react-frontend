import React from 'react'
import {
  BrowserRouter as Router,
} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'lib-flexible/flexible'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
