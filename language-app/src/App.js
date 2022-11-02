import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
// import Context from "./Contexts/Context"
// import { Routes, Route } from "react-router-dom";
// import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  
  return (
    <div className="App bg-gradient-to-bl from-amber-300 via-amber-400 to-orange-500 h-[100vh] flex justify-center text-center items-center flex-col m-5">
      <Header/>
      <Content/>
      {/* <Context/>
      <WelcomeMessage/> */}


    </div>
  );
}

export default App;
