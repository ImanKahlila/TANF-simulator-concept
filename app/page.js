import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/landing/NavBar";
import HeroSection from "../components/landing/HeroSection";
import HeroSectionCards from "../components/landing/HeroSectionCards";
import Fintech from "../components/landing/FintechSection";
import CashFlow from "../components/landing/CashFlowSection";
import FullSuiteProducts from "../components/landing/FullSuiteProducts";



export default function Page(){
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroSectionCards />
      <Fintech />
      <CashFlow />
      <FullSuiteProducts />
    </>
  )
}