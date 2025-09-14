
# TMDB Movie Streaming Landing Page

This is a modern landing page for a movie streaming service, built with [Next.js](https://nextjs.org), [shadcn/ui](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/), and [TMDB API](https://www.themoviedb.org/documentation/api). It features server and client component separation, carousels for movies/TV, and clean, reusable UI.

## Features

- Next.js App Router with server and client components
- TMDB API integration (movies & TV sections)
- shadcn/ui Carousel and Card components
- Tailwind CSS for styling
- Axios for API requests
- Modular, reusable MoviesCarousel component
- Sections: Trending Movies, Trending TV, Now Playing, Popular Movies, Top Rated Movies, Upcoming Movies, Popular TV, Latest TV, Top Rated TV

## Getting Started

1. **Install dependencies:**
	```bash
	npm install
	# or
	yarn install
	```

2. **Set up your TMDB API key:**
	- Copy your TMDB API Bearer token to a `.env` file:
	  ```env
	  TMDB_API_KEY=your_tmdb_api_key_here
	  ```

3. **Run the development server:**
	```bash
	npm run dev
	# or
	yarn dev
	```

4. Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

- `app/` — Next.js app directory (layout, page, etc.)
- `components/`
  - `server/` — Server components (data fetching)
  - `client/` — Client components (UI logic)
  - `ui/` — shadcn/ui components (Carousel, Card, etc.)
  - `common/` — Header, Footer, etc.
- `lib/` — Utilities (axios instance, constants)
- `redux/` — (Optional) Redux store setup

## Customization

- Add or remove sections by editing `app/page.tsx` and the corresponding server components.
- Update API endpoints in `lib/constants.ts` as needed.

## Credits

- [TMDB API](https://www.themoviedb.org/documentation/api)
- [shadcn/ui](https://ui.shadcn.com/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

_Built by HabitualCoder_
