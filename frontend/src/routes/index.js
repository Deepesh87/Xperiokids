import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FalseRoute from "../common/FalseRoute";

// Lazy load all views
const Main = lazy(() => import("../views/LandingPg/Main"));
const About = lazy(() => import("../views/About us/About"));
const Gallery = lazy(() => import("../views/gallery/gallery"));
const Voice = lazy(() => import("../views/public_speaking/public-speaking-seniors"));
const VoiceJ = lazy(() => import("../views/public_speaking/public-speaking-juniors"));
const VoiceMastersLanding = lazy(() => import("../views/public_speaking_all/public-speaking"));
const Library = lazy(() => import("../views/library/library"));
const Science = lazy(() => import("../views/summercamp/science"));
const Sudoku = lazy(() => import("../views/sudoku/sudoku"));
const OlympiadFinalist = lazy(() => import("../views/olympiad/olympiad"));
const RoboticsLanding = lazy(() => import("../views/robotics/robotics-landing"));
const RoboticsSenior = lazy(() => import("../views/robotics/robotics-senior"));
const RoboticsJunior = lazy(() => import("../views/robotics/robotics-junior"));
const Finance = lazy(() => import("../views/finance/finance"));
const Terms = lazy(() => import("../views/terms/terms"));
const Bday = lazy(() => import("../views/bday/bday"));
const Camp24 = lazy(() => import("../views/summercamp24/camp24"));
const SummerCampLanding = lazy(() => import("../views/SummerCampLanding/landing"));
const VoiceMasterLeaderboard = lazy(() => import("../views/public_speaking/VoiceMasterLeaderboard"));
const Blog = lazy(() => import("../views/blog/blog-landing-page"));
const WhyRoboticsProblemSolving = lazy(() => import("../views/blog/what-is-robotics-for-kids"));
const PublicSpeakingBlog = lazy(() => import("../views/blog/public-speaking-for-kids"));
const CancellationRefunds = lazy(() => import("../views/terms/refunds"));
const PrivacyPolicy = lazy(() => import("../views/terms/privacy"));

function MainRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/public-speaking-seniors" element={<Voice />} />
        <Route path="/public-speaking-juniors" element={<VoiceJ />} />
        <Route path="/public-speaking" element={<VoiceMastersLanding />} />
        <Route path="/library" element={<Library />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sudoku" element={<Sudoku />} />
        <Route path="/olympiad" element={<OlympiadFinalist />} />
        <Route path="/robotics-for-children" element={<RoboticsLanding />} />
        <Route path="/robotics/senior" element={<RoboticsSenior />} />
        <Route path="/robotics/junior" element={<RoboticsJunior />} />
        <Route path="/finance-for-kids" element={<Finance />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/bday" element={<Bday />} />
        <Route path="/camp24" element={<Camp24 />} />
        <Route path="/summer" element={<SummerCampLanding />} />
        <Route path="*" element={<FalseRoute />} />
        <Route path="/voicemasters-leaderboard" element={<VoiceMasterLeaderboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="blog/what-is-robotics-for-kids" element={<WhyRoboticsProblemSolving />} />
        <Route path="blog/public-speaking-for-kids" element={<PublicSpeakingBlog />} />
        <Route path="/cancellation-refunds" element={<CancellationRefunds />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Suspense>
  );
}

export default MainRoutes;
