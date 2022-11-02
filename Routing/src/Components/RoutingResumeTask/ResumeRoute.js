import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../Basic Routing/PageNotFound";
import Academics from "./Academics";
import ContactDetails from "./ContactDetails";
import Header from "./Header";
import Hobbies from "./Hobbies";
import Home from "./Home";
import Portfolio from "./Portfolio";
import ProfessionalSummary from "./ProfessionalSummary";
const ResumeRoute = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="academics" element={<Academics />} />
        <Route path="professoinalSummary" element={<ProfessionalSummary />} />
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contactDetails" element={<ContactDetails />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
};

export default ResumeRoute;
