import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseStateOne from "../page/UseStateOne";
import Home from "../page/Home";
import UseStateTwo from "../page/UseStateTwo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<UseStateOne />} />
        <Route path="/two" element={<UseStateTwo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
