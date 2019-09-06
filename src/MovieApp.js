import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios';

class MovieApp extends Component{
    constructor(){
        super();
        console.log("Constructor ran");
        this.state = { movieData: [] }
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e){
        e.preventDefault();
        console.log("user submitted form")
        const movieTitle = document.querySelector('#search-term').value;
        console.log(movieTitle)
        const searchUrl = `http://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=fec8b5ab27b292a68294261bb21b04a5`;
        const movieData = axios.get(searchUrl);
        movieData.then((resp)=>{
            console.log(resp.data);
            this.setState({
                movieData: resp.data.results
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
            <div className="container">

                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <input id="search-term" type="text" placeholder="Enter a movie title" />
                        <input type="submit" className="btn" value="Search!" />
                    </form>
                </div>

                <div className="row">
                    {movies}
                </div>
            </div>
        )
    }
}

export default MovieApp;