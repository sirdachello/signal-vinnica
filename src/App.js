import Header from "./Components/Header";
import React from "react";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
// const LazyFooter = React.lazy(() => import("./Components/Footer"));
// const LazyHome = React.lazy(() => import("./Routes/Home"));

export default function App() {
  return (
    <>
      <Header />
        <Home />
      <Footer />
    </>
  );
}
