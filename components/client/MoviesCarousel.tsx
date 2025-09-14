"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

interface MoviesCarouselProps {
  movies: Movie[];
}

export default function MoviesCarousel({ movies }: MoviesCarouselProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id} className="basis-auto w-48">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : "/file.svg"}
                  alt={movie.title}
                  className="w-full h-64 object-cover object-center"
                  loading="lazy"
                />
                <div className="p-3">
                  <h3 className="text-base font-semibold mb-1 truncate" title={movie.title}>{movie.title}</h3>
                  <p className="text-xs text-muted-foreground">{movie.release_date}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
