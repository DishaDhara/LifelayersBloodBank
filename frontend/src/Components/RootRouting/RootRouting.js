import React from 'react'
import { Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import DonorReg from '../../Registration/DonorReg'
import About from '../AboutUs/About'
import ReducerExample from '../Home/Home'
import Footer from '../Layouts/Footer/Footer'
import Header from '../Layouts/Header/Header'
import Services from '../Services/Services'



export default function RootRouting() {
  return (
    
    <Router>
      <Header/>
        <Routes>
        <Route path="" element={<ReducerExample/>}/>
        <Route path='/about' element={<About/>}/>
           <Route path='/service' element={<Services/>}/> 
           <Route path="/dreg" element={<DonorReg/>}/> 

        </Routes>
        <Footer/>
    </Router>
  )
}
