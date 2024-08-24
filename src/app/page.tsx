import AboutUs from "@/components/AboutUs";
import Catalog from "@/components/Catalog";
import CategoriesSlides from "@/components/CategoriesSlides";
import Hero from "@/components/Hero";
import JobsDone from "@/components/JobsDone";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
 return (
  <main className="">
   <Hero />
   <CategoriesSlides />
   <ProductsSection />
   <AboutUs/>
   <JobsDone/>
   <Catalog/>
  </main>
 );
}
