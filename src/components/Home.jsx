import React, {useState, useEffect} from 'react';
import {trend} from '../assets';
import axios from 'axios';
import Card from "./Card.jsx";

function Home() {
    const [movieData, setMovieData] = useState([]);
    const [tvData, setTvData] = useState([]);
    const [movieCount, setMovieCount] = useState(12);
    const [tvCount, setTvCount] = useState(12);
    const [visibleMovies, setVisibleMovies] = useState([]);
    const [visibleTVShows, setVisibleTVShows] = useState([]);


    useEffect(() => {
        getTrendingMovieData("movie");
        getTrendingMovieData("tv");
      }, []);

      const getTrendingMovieData = async (type) => {
        try {
          const apiKey = "975c7e1c1e681b71428833941632c0fa";
          const response = await axios.get(
            `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie`
          );
          console.log(21, response.data.results);
  
          if (type === "movie") {
            setMovieData(response.data.results);
            setVisibleMovies(response.data.results.slice(0, movieCount));
          } else if (type === "tv") {
            setTvData(response.data.results);
            setVisibleTVShows(response.data.results.slice(0, tvCount));
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      const loadMoreMovies = () => {
        setMovieCount(movieCount + 12);
        setVisibleMovies(movieData.slice(0, movieCount + 12));
      };
  
      const loadMoreTVShows = () => {
        setTvCount(tvCount + 12);
        setVisibleTVShows(tvData.slice(0, tvCount + 12));
      };

    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <h3 className='text-white font-bold mt-24 ml-16'>FIND MOVIES</h3>

                    <h1 className="  text-4xl font-sans bg-gradient-to-r from-blue-500 via-red-500 to-pink-500 bg-clip-text text-transparent ml-16 text-gradient">
                        TV SHOWS AND MOVIES
                    </h1>

                    <p className='text-white ml-16 mt-6'>Lorem ipsum hasbbeen the industy's standard dummy text<br />
                        ever since the 1500s, when an unknown printer took a gallery<br />
                        of type and scrambled it to make a type specimen book.</p>


                    <button className=' ml-16 mt-6 border-2 border-white px-4 py-2 text-white font-bold rounded flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30" ><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" fill='#ffffff' /></svg>
                        Watch Tutorial</button>
                </div>
                <div></div>
            </div>
            <div className='flex px-10 mt-10 items-center'>
                <div className='flex'>
                    <img src={trend} />
                    <h3>Trending</h3>
                </div>
                <span className='w-full h-[1px] bg-gray-600 flex-1 mx-4'></span>
                <button>Show More</button>
            </div>
            <div className='grid grid-cols-6'>
            {visibleMovies.map((item) => (
                <Card
                  key={item.id}
                  image={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  name={item.original_title}
                  date={item.release_date.slice(0, 4)}
                  rate={item.vote_average.toFixed(1)}
                />
              ))}
            </div>

            <div className="flex mt-10 mb-4 justify-between items-center w-full px-8">
            <h2 className="text-white font-bold text-3xl uppercase ml-10">
              YOU MAY LIKE THIS
            </h2>
            <span className="bg-gray-600 h-[1px] flex-1 mx-3"></span>
            <button onClick={loadMoreTVShows}>See More</button>
          </div>
          <div className="flex flex-wrap justify-center">
            {visibleTVShows.map((item) => (
              <Card
                key={item.id}
                image={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                name={item.original_name}
                date={item.first_air_date.slice(0, 4)}
                rate={item.vote_average.toFixed(1)}
              />
            ))}
          </div>
        </div>
    )
}

export default Home;
