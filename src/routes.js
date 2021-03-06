import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Profile, Ranking, SearchLog } from "./components/pages";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/:username" element={<Profile />} />
      </Route>
      <Route path="/dashboard/ranking" element={<Ranking />}>
        <Route path="/:username" element={<Profile />} />
      </Route>
      <Route path="/search/log" element={<SearchLog />} />
      <Route path="*" element={<h1>Not Found!</h1>} />
    </Routes>
  );
}
