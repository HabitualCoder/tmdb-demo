

import TrendingMoviesSection from "@/components/server/TrendingMoviesSection";
import TrendingTVSection from "@/components/server/TrendingTVSection";
import NowPlayingSection from "@/components/server/NowPlayingSection";
import PopularMoviesSection from "@/components/server/PopularMoviesSection";
import TopRatedMoviesSection from "@/components/server/TopRatedMoviesSection";
import UpcomingMoviesSection from "@/components/server/UpcomingMoviesSection";
import PopularTVSection from "@/components/server/PopularTVSection";
import LatestTVSection from "@/components/server/LatestTVSection";
import TopRatedTVSection from "@/components/server/TopRatedTVSection";

export default function Home() {
  return (
    <main>
      <section className="w-full flex flex-col items-center justify-center py-16">
        <h2 className="text-3xl font-bold mb-4">Welcome to Movie Streaming Service</h2>
      </section>
  <TrendingMoviesSection />
  <TrendingTVSection />
  <NowPlayingSection />
  <PopularMoviesSection />
  <TopRatedMoviesSection />
  <UpcomingMoviesSection />
  <PopularTVSection />
  <LatestTVSection />
  <TopRatedTVSection />
    </main>
  );
}
