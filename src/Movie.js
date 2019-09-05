// The very first thing we always import in a new COmponet
import React from 'react';

function Movie(props){
    const imagePath = `http://image.tmdb.org/t/p/w300${props.movie.poster_path}`;		
    const moviePath = `http://www.themoviedb.org/movie/${props.movie.id}`    

    return(
        <div className="col s3 center">
            <a href={moviePath}>
                <img src={imagePath} />
            </a>
            <div>
                {props.movie.title}
            </div>
        </div>
    )
}

export default Movie;
