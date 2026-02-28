import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../components/Contact";
 

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/contact" element={<Contact />} />

        {/* redirect any of the temporary paths back to home so the
          hash-links defined in the navbar can still resolve when the
          user lands directly on them (for example /#testimonials) */}
        <Route path="/services" element={<Navigate to="/" replace />} />
        <Route path="/mentor" element={<Navigate to="/" replace />} />
        <Route path="/testimonials" element={<Navigate to="/" replace />} />

        {/* catch‑all: any unknown path should just render home for now */}
        <Route path="*" element={<Navigate to="/" replace />} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;