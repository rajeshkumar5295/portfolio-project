import Intro from "./components/intro/Intro";
import './app.scss';
import Skills from "./components/skills/Skills";
import Portfolil from "./components/portfolio/Portfolil";
import Blog from "./components/blogsection/Blog";
import MainForm from "./components/form/MainForm";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/footer/Footer";

function App() {
  return (

   
    <div className="intro" >
       <Intro/>
       <Skills/>
       <Portfolil/>
       <Blog/>
       <MainForm/>
       <Footer/>

         


       <ToastContainer/>
    </div>
    
  );
}

export default App;
