import { Suspense } from "react";
// import Layout from "./components/container/Layout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/home/NotFound";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="animate-spin"></div>}>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Home />} />
          {/* public routes */}
          {/* catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
