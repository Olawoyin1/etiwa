// AnimatedRoutes.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SharedLayout from "../components/SharedLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import PageWrapper from "../components/PageWrapper";
import Blog from "../pages/Blog";
import Services from "../pages/Services";
import Career from "../pages/Career";
import Contact from "../pages/Contact";




export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<SharedLayout />}>
        
        <Route
          path="/"
          element={
              <motion.div
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              >
              <Home />
            </motion.div>
          }
          />

        <Route
          path="/about"
          element={<PageWrapper><About /></PageWrapper>}
          />
        
        <Route
          path="/blog"
          element={<PageWrapper><Blog /></PageWrapper>}
        />
        <Route
          path="/contact"
          element={<PageWrapper><Contact /></PageWrapper>}
        />
        <Route
          path="/career"
          element={<PageWrapper><Career /></PageWrapper>}
        />
        <Route
          path="/services"
          element={<PageWrapper><Services /></PageWrapper>}
        />
        
        

        </Route>
        
      </Routes>
    </AnimatePresence>
    </>
  );
}
