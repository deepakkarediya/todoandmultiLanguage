import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./component/Home";
// import About from "./component/About";
// import Navbar from "./component/Navbar";
import './App.css'
import Add from "./TODO/Add";

function App() {

  return (
    <>
      <Add />
    </>
    // <Router>
    //   <div>
    //   <Navbar/>    
    //     <Switch>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/home">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
