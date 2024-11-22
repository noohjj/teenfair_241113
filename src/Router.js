import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Detail from "./pages/detail/Detail";
import Footer from "./component/Footer";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
