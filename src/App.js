import './App.css';
import AboutMe from './components/pages/AboutMe';
import Skills from './components/pages/Skills.js';
import Main from './components/Main';
import { Routes, Route } from "react-router-dom";
import Projects from './components/pages/Projects.js';
function App() {
  return (
    <>  
        <Routes>
            <Route path='/' index element={<Main />}></Route>
            <Route path='/AboutMe' element={<AboutMe />}></Route>
            <Route path='/Skills' element={<Skills />}></Route>
            <Route path='/Projects' element={<Projects />}></Route>
        </Routes>
    </>
  );
};
export default App;
