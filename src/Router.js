import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Detail from "./pages/detail/Detail";
import Location from "./pages/location/Location";
import Footer from "./component/Footer";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer/>
    </HashRouter>
  );
};

export default Router;
