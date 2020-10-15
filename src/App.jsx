import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import WhySolar from "./components/WhySolar";
import AboutUs from "./components/AboutUs";
import FAQs from "./components/FAQs";
import QuotesPage from "./components/QuotesPage";
import Footer from "./components/Footer";
import AdminLoginPage from "./components/AdminLoginPage"

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/whysolar" component={WhySolar} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/quotes" component={QuotesPage} />
        <Route path="/adminlogin" component={AdminLoginPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;