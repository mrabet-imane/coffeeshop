//import { motion } from "motion/react";
import {lazy, Suspense } from "react";
import Header from "./components/headerComponent";
import { useEffect } from "react";
import i18n from "i18next";
const Hero = lazy(() => import('./components/Hero'));

function App() {
  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";
  }, []);
  return (
    <div className='w-full'>
      <Header />
     
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <main >
            <Hero/>
        </main>
          
       
      </Suspense>

      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Imane Coffee Shop
      </footer>
    </div>
  );
}

export default App;
