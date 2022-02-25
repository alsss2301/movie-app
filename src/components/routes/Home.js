import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Movie from '../Movie';
import styles from './Home.module.css'; //같은 폴더 안에 있을때는 ./

function Home() {
    const [loading, setLoading] = useState(true);
<<<<<<< HEAD
    const [movies,setMovies] = useState([]);
=======
    const [movies,setMovies] = useState([]); //null에는 map프로토타입이 없다. 그래서 map쓰려면 초기값을 []로 한다.
    const [error, setError] = useState(null);
>>>>>>> f69c098ff83248ac7650c9595afc5084041613e9
  
      const getMovies = async () => {
          const response = await axios.get(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
          );
<<<<<<< HEAD
          setMovies(response.data.data.movies);
=======
          setMovies(response.data.data.movies); //response.data 까지는 axios에서 만들어주는 객체이고, 그 이후는 또 안에 객체가 있는지 확인해보고 코드짜야함.
        } catch (e) {
          setError(e);
        }
>>>>>>> f69c098ff83248ac7650c9595afc5084041613e9
        setLoading(false);
      };

      useEffect(()=>{
        getMovies();
      },[]);

    return (
      <div className={styles.container}> 
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );  
}

export default Home;
