import { motion } from "motion/react";
import { Suspense } from "react";
import Header from "./components/headerComponent";
import { useEffect } from "react";
import i18n from "i18next";
function App() {
  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";
  }, []);
  return (
    <div className='w-full'>
      <Header />

      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <main className="mx-auto max-w-5xl px-6 py-12">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-amber-100 text-2xl font-semibold text-amber-900 p-6 rounded-xl shadow-md inline-block min-h-screen"
          >
            Hello ☕
          </motion.div>
        </main>
      </Suspense>

      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Imane Coffee Shop
      </footer>
    </div>
  );
}

export default App;
