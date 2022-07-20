import React from "react";
import { HomeDark, NotFound } from "../views";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollTopBehaviour />
        <Routes>
          <Route path="/" element={<HomeDark />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
