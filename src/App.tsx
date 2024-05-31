import { Suspense } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Layout from "./components/container/Layout";
import Spinner from "./components/loaders/Spinner";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/" index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* public routes */}
          {/* public routes */}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
