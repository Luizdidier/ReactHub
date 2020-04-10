import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Profile } from "./components/pages";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/profile/:username" element={<Profile />} />
      </Route>

      <Route path="*" element={<h1>Not Found!</h1>} />
    </Routes>
  );
}
