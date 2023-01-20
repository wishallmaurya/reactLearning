import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Linkdin from "./components/Linkdin";
import Email from "./components/Email";
import UserDetails from "./components/UserDetails";
import Context from "./components/Context";
import { useState,createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const AppState = createContext();

function App() {
  const [data]=useState('Context data')
  const [name]=useState('vishal')
  return (
    <AppState.Provider value={{data,name}}>

    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/:userId" element={<UserDetails />} />

          <Route path="/about" element={<About />} />


            {/* context api */}

          <Route path="/context" element={<Context />} />

          {/* nested routing */}
          <Route path="/contact" element={<Contact />}>
            {/* isse default nested route me open hoga */}
            <Route index element={<Linkdin />} />
            <Route path="/contact/linkdin" element={<Linkdin />} />
            <Route path="/contact/email" element={<Email />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
    </AppState.Provider>

  );
}

export default App;
export {AppState};
