import React from "react";
//importing our three pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
//importing the global styles
import GlobalStyle from "./components/GlobalStyle";
//importing nav bar
import Nav from "./components/Nav";
//Creating Route for each page so that we can render out the specific page at the given url
import { Routes, Route, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetails";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="work/*" element={<OurWork />} />
          <Route path="work/:id/*" element={<MovieDetail />} />
          <Route path="contact/*" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
//part1
//in this way we can render different pages using react router dom
//for every page there is a unique path
//part2
//:id in the MOvie deatil part this means if we write any thing after /work/ girjirj
//this gonna bring to Movie Detail Section

//animate Presnece detects the changes and then automatcially when to animate
//location gives where we are on page

//Two steps of ANimate Presence
//1. Grab everything in animate Presence which detects when things change
//2. we have to pass the key i.e location.pathname gives look we are on different page make sure to start animating

//exitBeforeEnter : this property gonna make one page to fade out then allows the other page to fade in .
//it make the animation effect to wait

//adding text to check can i push changes to github via github

//Scroll top is to go to top whnever we click on any different page/Section/pathname/url ..
