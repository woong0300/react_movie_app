import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  //setState를 할 때 모든, state들을 다 선언해 놓을 필요는 없지만 좋은 습관이다.
  //Javascript가 내 함수를 기다리도록 만드는 제일 쉬운 방법
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false});
  };
  componentDidMount(){
    this.getMovies();
    // setTimeout( () => {
    //   this.setState({isLoading: false});
    // }, 6000);
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : ( 
          <div className="movies">
            {movies.map(movie  => (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
