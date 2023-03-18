
import React from 'react';

import Nav from './Nav';
import Employees from './Employees';
import Footer from './Footer';
import Patients from './Patients';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div>
      
       <Router>
         
        <Nav/>
         <Routes>
             <Route path="/" element={<Home/>}/>
                
              
             <Route path="/employees" element={<Employees/>}/>

             
             <Route path="/patients" element={<Patients/>}/>

            
         </Routes>
        <Footer/> 
       </Router>
    </div>
      
     /* */
      
     
  );
}

export default App;
