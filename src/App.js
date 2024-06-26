// App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componenets/Navbar/Navbar";
import Intro from "./componenets/Intro/intro";
import Games from "./componenets/Games/Games";
import Quizzes from "./componenets/Quizes/Quizes";
import Aboutus from "./componenets/Aboutus/Aboutus";
import SelectChoice from "./componenets/SelectChoice/SelectChoice";
import KidsClub from "./componenets/KidsClub/KidsClub";
import Login from "./componenets/LogIn/LogIn";
import KClogged from "./componenets/KClogged/KClogged";
import RecentWork from "./componenets/RecentWork/RecentWork";
import SignUp from './componenets/SignUp/SignUp';
import Footer from './componenets/Footer/Footer';
import LearnMore from "./componenets/learnmore/learnmore";





function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/KidsClub" element={<KidsClub />} />
          <Route path="/KClogged" element={<KClogged />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/learnmore" element={<learnmore />} />
          
         
        </Routes>
       
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Intro />
      <Aboutus />
      <SelectChoice />
      <RecentWork/>
      <Footer/>
    </>
  );
}

export default App;
