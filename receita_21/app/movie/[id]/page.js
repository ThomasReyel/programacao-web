import React from 'react';
import Image from 'next/image'
export async function generateStaticParams() {
    const allMovies = await fetch('https://www.omdbapi.com/?apikey=49b43365&s=lady').then((res) => res.json())
    return allMovies.Search.map((movie) => ({
      id: movie.imdbID,
    }))
 }
 
export default async function Home({ params }) {
    const {id} = await params
    const movie = await fetch(`https://www.omdbapi.com/?apikey=49b43365&i=${id}`).then(res => res.json())
    return (
        <div>
            <h1>{movie.Title} ({movie.Year})</h1>
            <p>Director: {movie.Director}</p>
            <p>Plot: {movie.Plot}</p>
            <Image alt=''  width={100} height={200} src={`${movie.Poster}`}></Image>

        </div>
    );
};