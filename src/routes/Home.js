import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";


function Home(){
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState([]);
  const getMovies = async() => {
    // const response = await fetch(
    //   'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
    //   );
    //   const json = await response.json();
    //   setMovies(json.data.movies);
    //   setLoading(false);
    // };

    const json = await (
        await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
      console.log(json);
    };
  

  useEffect(() => {
    getMovies();
  }, []);
 
  return (
    <div className={styles.container}> 
      {loading ? 
        <div className={styles.loader}>
          <span>Loading...</span>
        </div> : 
        <div className={styles.movies}>
          {movie.map((movies) => (
          
            <Movie 
              key={movies.id}
              id={movies.id}
              medium_cover_image ={movies.medium_cover_image} 
              title = {movies.title}
              genres = {movies.genres}
              summary = {movies.summary}
              />
        ))}
        </div>
      }
 
    </div>
   );
}

export default Home;