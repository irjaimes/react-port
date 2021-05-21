// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  // const pages = ['About', 'Contact', 'Portfolio', 'Resume'];
  const [currentPage, setCurrenPage] = useState("About");
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Portfolio":
        return <Project />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <div className="..">
      <Navigation
        currentPage={currentPage}
        setCurrenPage={setCurrenPage}
      ></Navigation>
      <div>{renderPage(currentPage)}</div>
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
