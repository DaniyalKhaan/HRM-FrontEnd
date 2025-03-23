import React from 'react'
import Cards from './cards'
import Main_Dashboard from './Discription/Main_Dashboard'

function Dashboard() {
  return (
    <div style={{display:"flex", alignItems:"start", justifyContent:"center", gap:"40px", margin:0, padding:0}}>
      <Cards />
      <Main_Dashboard />
    
      
    </div>
  )
}

export default Dashboard