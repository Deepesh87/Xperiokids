import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FalseRoute from "../common/FalseRoute";

// Lazy load all views
const Main = lazy(() => import("../views/LandingPg/Main"));
const About = lazy(() => import("../views/About us/About"));
const Gallery = lazy(() => import("../views/gallery/gallery"));
const Voice = lazy(() => import("../views/voicemasters/voicemasters-seniors"));
const VoiceJ = lazy(() => import("../views/voicemasters/voicemasters-juniors"));
const VoiceMastersLanding = lazy(() => import("../views/voicemasters_all/voicemasters"));
const Science = lazy(() => import("../views/summercamp/science"));
const Sudoku = lazy(() => import("../views/sudoku/sudoku"));
const OlympiadFinalist = lazy(() => import("../views/olympiad/olympiad"));
const Robotics = lazy(() => import("../views/robotics/robotics"));
const Finance = lazy(() => import("../views/finance/finance"));
const Terms = lazy(() => import("../views/terms/terms"));
const Bday = lazy(() => import("../views/bday/bday"));
const Camp24 = lazy(() => import("../views/summercamp24/camp24"));
const SummerCampLanding = lazy(() => import("../views/SummerCampLanding/landing"));
const VoiceMasterLeaderboard = lazy(() => import("../views/voicemasters/VoiceMasterLeaderboard"));


function MainRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/voicemasters-seniors" element={<Voice />} />
        <Route path="/voicemasters-juniors" element={<VoiceJ />} />
        <Route path="/voicemasters" element={<VoiceMastersLanding />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sudoku" element={<Sudoku />} />
        <Route path="/olympiad" element={<OlympiadFinalist />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route path="/finance-for-kids" element={<Finance />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/bday" element={<Bday />} />
        <Route path="/camp24" element={<Camp24 />} />
        <Route path="/summer" element={<SummerCampLanding />} />
        <Route path="*" element={<FalseRoute />} />
        <Route path="/voicemasters-leaderboard" element={<VoiceMasterLeaderboard />} />
      </Routes>
    </Suspense>
  );
}

export default MainRoutes;
