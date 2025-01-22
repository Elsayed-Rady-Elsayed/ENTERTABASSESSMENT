"use client";

import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Map from "./components/map/Map";
import Location from "./components/location/Location";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header/>
      <Map/>
      <Location/>
      <Form/>
      <Footer />
    </div>
  );
}
