import { Metadata } from "next";

import { Suspense, lazy } from "react";

// Lazy-loaded components
const LazyAbout = lazy(() => import("../components/About"));

export const metadata: Metadata = {
  title: {
    absolute: "Home",
  },
};

const Preloader = () => (
  <div className="flex-center">
    <div>Loading...</div>
  </div>
);

const About = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <LazyAbout />
      </Suspense>
    </>
  );
};

export default About;
