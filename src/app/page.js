import Image from "next/image";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Projects />
    </>
  );
}
