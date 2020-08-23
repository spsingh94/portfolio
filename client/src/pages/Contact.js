import React from "react";
import Navbar from "../components/Navbar";
import { Title } from "../components/Title";
import Crystals from "../images/bluecrystals.jpg";
import { Center } from "../components/Center";
import { Icons } from "../components/Icons";
import { Maps } from "../components/Maps";
import ContactForm from "../components/ContactForm";

function Contact() {
  const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

  const mapsSource =
    "https://www.google.com/maps/embed/v1/place?key=" +
    API_KEY +
    "&q=New+York,NewYork+NY";

  const scrollToMap = () => {
    window.scrollTo({ top: 840, behavior: "smooth" });
  };

  return (
    <div style={{backgroundColor:"black"}}>
      <Navbar />
      <Center>
        <a href="tel:+14144002564">
      <Icons>local_phone</Icons>
        </a>
      <Icons onClick={scrollToMap}>add_location</Icons>
      <a href="mailto:shaminders550@gmail.com">
      <Icons>email</Icons>
      </a>
      </Center>
      <Center>
        <Title id="sub-title">Lets Connect!</Title>
      </Center>
      <Center>
        <p style={{ textAlign: "center", color:"white" }}>
          Provide me with some of your information and a short message and I
          will get back to you at my earliest convenience.
        </p>
      </Center>
      <Center>
        <ContactForm />
      </Center>
      <Title id="my-location">Find Shaminder Singh Here -</Title>
      <Center>
        <Maps src={mapsSource} />
      </Center>
    </div>
  );
}

export default Contact;
