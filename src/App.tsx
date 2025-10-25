import React from 'react'
import Getdata from './components/Getdata'
import { Routes, Route} from 'react-router'
// import { SecondComponent } from './components/SecondComponent'
import Navbar from './components/Navbar/NavBar'
import Accueil from './Pages/Accueil'
import Login from './Pages/Login'
// import { SecondComponent } from './components/SecondComponent'
// import TableComponent from './components/TableComponent'


export default function App() {
  const r = window.location.pathname
  return (
    <>
      {/* <SecondComponent/> */}
     {r !== "/login" &&  <Navbar/>}
      {/* <TableComponent/> */}
      {/* <Getdata/> */}
      <Routes>
        <Route path="/" element={<Accueil/>}/>
    
         <Route path="/data" element={<Getdata/>}/>
         <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}
