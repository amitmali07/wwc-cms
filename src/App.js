import React from 'react';
import Header from './components/header';
import {Routes, Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
import OurService from './components/OurServicePage/OurSerivce';
import Process from './components/ProcessPage/Process';
import ContactUs from './components/ContactUsPage/ContactUs'
import Footer from './components/footer';
import AboutUs from './components/AboutUs/Us';
import Career from './components/CareerPage/Career';
import WorkDetails from './components/WorkPage/WorkDetails';
import Work from './components/WorkPage/Work';
// import CursorFollower from './components/CursorFollower';
 

function App() {

  return (
    <div>
      {/* <CursorFollower /> */}
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurService" element={<OurService />} />
          <Route path='/Work' element ={<Work />} />
          <Route path="/WorkDetails" element={<WorkDetails />} />
          <Route path="/Process" element={<Process />} />
          <Route path ="/ContactUs" element ={<ContactUs />}/>
          <Route path='/Us' element ={<AboutUs/>}/>
          <Route path='/Career' element ={<Career/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
