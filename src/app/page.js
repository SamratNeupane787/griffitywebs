import Image from "next/image";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import AboutUs from "@/components/AboutUs";
import JoinTeam from "@/components/JoinTeam";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />

      <Services />
      <Projects />
      <AboutUs />
      <JoinTeam />
      <Footer />
    </>
  );
}
