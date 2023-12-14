import About from "@/components/About";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/Home";
import Membership from "@/components/Membership";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Services from "@/components/Services";

export default function Home() {
  return (
   <div className="max-w-screen-2xl mx-auto bg-[#FDF0F0]">
      <Navbar/>
      <HomeBanner/>
      <About/>
      <Services/>
      <Membership/>
      <NewsLetter/>
      <Footer/>
   </div>
  )
}
