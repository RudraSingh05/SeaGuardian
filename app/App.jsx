import Action from '../src/jsx/action';
import Donate from '../src/jsx/donate';
import Faqs from '../src/jsx/faqs';
import Home from '../src/jsx/home';
import OurProgram from '../src/jsx/our-program';
import TheLatest from '../src/jsx/the-latest';
import OTP from '../src/jsx/otp';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../src/jsx/login';
import Ques1 from '../src/jsx/faqs-ques/ques1';
import Ques2 from '../src/jsx/faqs-ques/ques2';
import Ques3 from '../src/jsx/faqs-ques/ques3';
import Ques4 from '../src/jsx/faqs-ques/ques4';
import Ques5 from '../src/jsx/faqs-ques/ques5';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/home" />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/action" element={<Action />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/our-program" element={<OurProgram />} />
          <Route path="/the-latest" element={<TheLatest />} />

          <Route path="/ques1" element={<Ques1 />} />
          <Route path="/ques2" element={<Ques2 />} />
          <Route path="/ques3" element={<Ques3 />} />
          <Route path="/ques4" element={<Ques4 />} />
          <Route path="/ques5" element={<Ques5 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App