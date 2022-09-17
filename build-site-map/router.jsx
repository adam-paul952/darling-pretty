import React from "react";

import { Route, Routes } from "react-router-dom";

const router = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/sessions" />
      <Route path="/photo/:id" />
      <Route path="/contact" />
      <Route path="/login" />
      <Route path="/checkout" />
    </Routes>
  );
};

export default router;
