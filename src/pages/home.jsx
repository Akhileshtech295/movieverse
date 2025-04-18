import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingMoives } from "../Features/moviesSlice";

import MovieList from "../components/movieList";
const Home = () => {
  const dispatch = useDispatch();
  const { trending, status } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getTrendingMoives());
  }, [dispatch]);
  return (
    <div className='container p-4'>
      <h1 className='text-2xl font-bold text-blue-700'>Trending Movies</h1>
      {status === "Loading" ? (
        <div className='py-10 text-center'>
          <p className='text-xl font-semibold text-gray-800'>Loading</p>
        </div>
      ) : (
        <div className=' py-10'>
          <MovieList movies={trending} />
        </div>
      )}
    </div>
  );
 };