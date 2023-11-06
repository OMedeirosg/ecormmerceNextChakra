"use client";

import { Features } from "@/components/feature/features";
import { Hero } from "@/components/hero";
import { PageLayout } from "@/components/pagelayout";

const Home = () => {
  return (
    <PageLayout>
      <Hero />
      <Features />
    </PageLayout>
  );
};
export default Home;
