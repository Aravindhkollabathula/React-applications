// import logo from './logo.svg';
// import './App.css';
// import { useState } from "react";
// import AboutPage from "./Aboutpage components/AboutPage";
// import Homepage from "./Homepage Components/homepage"
import StudentForm from "./usestate/StudentForm";
import StudentDynamicForm from "./usestate/StudentDynamicForm";

function App() {
  // const [showHomePage, setShowHomePage] = useState(true)
  return (
    <div>
      {/* {showHomePage ? <Homepage /> : <AboutPage /> } */}
      {/* {showHomePage ? <button onClick={() => setShowHomePage(false) } >show About page</button> : <button onClick={() => setShowHomePage(true) } >Show Home page</button>  } */}
    {/* <StudentForm /> */}
    <StudentDynamicForm />
    
    
    </div>
  )
}

export default App;
