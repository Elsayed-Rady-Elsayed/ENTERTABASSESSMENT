"use client";

import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Map from "./components/map/Map";
import Location from "./components/location/Location";
import i18next from "i18next";
i18next.init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        "home": "Home",
        "works": "Works",
        "contactus": "Contact Us",
        "payment": "payment",
        "buildWebsite":"Build A Website",
        "aboutAddress":"Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.",
        "fullName":"Full Name",
        "email":"Email",
        "message":"Message",
        "submit":"Submit",
      },
    },
    ar: {
      translation: {
        "home": "الصفحة الرئيسية",
        "works": "اعمالنا",
        "contactus": "اتصل بنا",
        "payment": "عن الموقع",
        "buildWebsite":"ابني موقعك",
        "aboutAddress":"يمكنك التواصل معنا في أي وقت، ونحن نسعى للرد على جميع الإستفسارات خلال 24 ساعة في أيام عمل.",
        "fullName":"الاسم الاول",
        "email":"البريد الالكتروني",
        "message":"الرساله",
        "submit":"ارسال",
      }
      
    },
  },
});
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
