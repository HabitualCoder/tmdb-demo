import axiosInstance from "@/lib/axiosInstance";
import { TMDB_API } from "@/lib/constants";
import MoviesCarousel from "@/components/client/MoviesCarousel";

export default async function LatestTVSection() {
  const res = await axiosInstance.get(TMDB_API.LATEST_TV);
  // LATEST_TV returns a single object, wrap in array for MoviesCarousel
  const movies = res.data ? [res.data] : [];
  return (
    <section className="w-full my-8">
      <h2 className="text-2xl font-bold mb-4 px-4">Latest TV</h2>
      <MoviesCarousel movies={movies} />
    </section>
  );
}
