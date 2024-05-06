import Navbar from "./componenets/Navbar/Navbar";
import Intro from  './componenets/Intro/intro'; 
import Games from './componenets/Games/Games';
import Quizes from './componenets/Quizes/Quizes'; 
import Aboutus from './componenets/Aboutus/Aboutus'; 

function App (){
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Games/>
      <Quizes/> 
      <Aboutus/> 
    </div>
  );
}
export default App; 
