import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

function App() {
    let data = {
        earningsmonthly : "40,000",
        earningsyearly : "215,000",
        task : "70",
        pendingRequest : "18"
    }
  return <div id="wrapper">
    <Sidebar/>
    <Dashboard data = {data}/>
  </div>
}

export default App