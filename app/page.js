import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/landing/NavBar";
import HeroSection from "../components/landing/HeroSection";



export default function Page(){
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  )
}