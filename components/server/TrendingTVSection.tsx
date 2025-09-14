import axiosInstance from "@/lib/axiosInstance";
import { TMDB_API } from "@/lib/constants";
import MoviesCarousel from "@/components/client/MoviesCarousel";

export default async function TrendingTVSection() {
  const res = await axiosInstance.get(TMDB_API.TRENDING_TV);
  const movies = res.data.results;
  return (
    <section className="w-full my-8">
      <h2 className="text-2xl font-bold mb-4 px-4">Trending TV</h2>
      <MoviesCarousel movies={movies} />
    </section>
  );
}
