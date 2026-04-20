import { useEffect, useState } from "react";
import { getCourses } from "../services";
import { Hero } from "../components/Hero";
import { CategoryGrid } from "../components/CategoryGrid";
import { CoursesGrid } from "../components/CoursesGrid";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import { CTABanner } from "../components/CTABanner";
import { Footer } from "../components/Footer";

function Home() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      const data = await getCourses();
      setCourses(data);
      setIsLoading(false);
    }
    fetchCourses();
  }, []);

  return (
    <main className="bg-[#0F0A1E] min-h-screen overflow-x-hidden">
      <Hero />
      <CategoryGrid />
      {!isLoading && <CoursesGrid courses={courses} />}
      <HowItWorks />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}

export default Home;
