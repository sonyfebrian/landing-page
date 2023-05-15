import React from "react";
import Navbar from "components/Navbar";
import Hero from "components/Hero";
import CardWork from "components/CardWork";
import Discover from "components/Discover";
import CardFeatures from "components/CardFeatures";
import Static from "components/Static";
import Program from "components/Program";
import CardTestimonials from "components/CardTestimonials";
import Footer from "components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardWork />
      <Discover />
      <CardFeatures />
      <Static />
      <Program />
      <CardTestimonials />
      <Footer />
    </>
  );
}
