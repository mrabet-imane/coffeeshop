import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import hero1 from "../assets/images/coffee-cupcake-table.webp";
import hero2 from "../assets/images/hero2.webp";
import hero3 from "../assets/images/hero3.webp";

export default function Hero() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const slides = [
    {
      image: hero1,
      title: t("hero.slides.0.title"),
      subtitle: t("hero.slides.0.subtitle"),
    },
    {
      image: hero2,
      title: t("hero.slides.1.title"),
      subtitle: t("hero.slides.1.subtitle"),
    },
    {
      image: hero3,
      title: t("hero.slides.2.title"),
      subtitle: t("hero.slides.2.subtitle"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden flex justify-center rounded">
      
     
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 mx-auto w-[90%] rounded"
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src={slide.image}
            alt="coffee hero"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            loading="eager"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-[#50321f]/30 rounded-2xl" />
        </motion.div>
      ))}

      
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-[#FFF9F3] px-6">
        
        <motion.h1
          key={slides[index].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {slides[index].title}
        </motion.h1>

        <motion.p
          key={slides[index].subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          {slides[index].subtitle}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="
            mt-8 px-8 py-3 rounded
            bg-[#50321f]/80 text-[#FFF9F3]
            font-semibold hover:bg-[#50321f]
            transition-colors duration-300
            focus:outline-none focus:ring-2
            focus:ring-[#C89B6D]
            focus:ring-offset-2
            focus:ring-offset-transparent
          "
          aria-label={t("hero.button")}
        >
          {t("hero.button")}
        </motion.button>

      </div>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? "true" : "false"}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-white" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
