import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Home.module.css";

//url에 있는 값을 반환해주는 함수
function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const getMovie = async () => {
        const json = await(
            	//url 상에 있는 영화 이이디를 통해 영화 세부젇보 데이터를 불러옴
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();  

        

        setMovie(json.data.movie);
        setLoading(false);
    };
    const [movie, setMovie] = useState([]);
   


    useEffect( () => {
        getMovie();
    }, []);
    
    return (
    <div>
        {loading ? 
        <div className={styles.loader}>
          <span>Loading...</span>
        </div> : 
           <div className={styles.detailCon}>
               <Link to ={`/`}>Home</Link>
                <h1>{movie.title_long}</h1>
                
                <div className={styles.detailMain}>
                    <img src={movie.large_cover_image} />
                    <div>
                        <div>Download: {movie.download_count} Like: {movie.like_count} rating: {movie.rating}</div>
                        <div>{movie.genres}</div>
                        <div>{movie.description_intro}</div>
                        <a href= {movie.url}>{movie.url}</a>
                    </div>
                </div>
            </div>
        }
    </div>
    );
}

export default Detail;