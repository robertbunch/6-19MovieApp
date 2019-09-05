import React, { Component } from 'react';
import Movie from './Movie';

class MovieApp extends Component{
    constructor(){
        super();
        console.log("Constructor ran");
        this.state = { movieData: [] }
    }

    componentDidMount(){
        const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
        console.log("Component mounted!!");
        fetch(url).then((response)=>{
            return response.json();
        }).then((movieJSON)=>{
            console.log(movieJSON);
            // NO NO NO NO NO NO NO NO NO NO
            // STOP STOP STOP STOP STOP STOP
            // BAD BAD BAD BAD BAD BAD
            // this.state.movieData = movieJSON
            this.setState({
                movieData: movieJSON.results
            })
        })
    }

    render(){
        console.log("COmponent REndered");
        console.log(this.state.movieData);

        const movies = this.state.movieData.map((movie, i)=>{
            return (
                <Movie key={i} movie={movie} />
            )
        })

        return(
            <div>
                {movies}
            </div>
        )
    }
}

export default MovieApp;