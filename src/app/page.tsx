import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Suspense, lazy } from "react";
import { SkeletonCard } from "@/components/Sketon";

// Lazy-loaded components
const LazyAbout = lazy(() => import("../components/About"));

export const metadata: Metadata = {
  title: {
    absolute: "Home",
  },
};

const Preloader = () => (
  <div className="flex-center">
    {/* Your preloader component */}
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
