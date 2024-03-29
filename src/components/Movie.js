import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, medium_cover_image, title, genres, summary}){
    return (
        <div className={styles.movie}>
              <img src={medium_cover_image} className ={styles.movie__img} />
              <div>
                <h2 className={styles.movie__title}>
                    <Link to ={`/movie/${id}`}>{title}</Link>
                </h2>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                {/* slice 시작과 끝의 값이 필요 */}
                <ul className={styles.movie__genres}>
                    {genres.map((g) => (
                    <li key = {g}>{g}</li>
                    ))}
                </ul>

              </div>
          </div>
    );
}

Movie.propTypes = {
    //proptypes 통해서 아래에 있는 값들이 옯바른 타입으로 불러오는지 확인
    id : PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
}

export default Movie;