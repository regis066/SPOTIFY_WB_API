import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataLayer } from './DataLayer.jsx'
import reducer, { initialState } from './reducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <DataLayer initialState={initialState} reducer={reducer}>
  <App />
  </DataLayer>
  </React.StrictMode>,
)
