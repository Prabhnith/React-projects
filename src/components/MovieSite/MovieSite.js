import React, { Component } from 'react';
import './MovieSite.css';
import MovieLink from './MovieLink';
import MoviePreview from './MoviePreview';

class MovieSite extends Component {
    state = {
        movies: [],
        selectedMovie: null,
        displayPreview: false
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=281f5ca6871701680c9b078371203a23&language=en-US&page=1')
            .then(res => res.json())
            .then(data => {
                const movies = data.results;
                console.log(movies);
                this.setState({ movies });
            })
    }
    handleSelectedMovie = (movie) => {
        this.setState({ selectedMovie: movie, displayPreview: true });
    }

    displayPreview() {
        if (this.state.selectedMovie && this.state.displayPreview) {
            return <MoviePreview selected={this.state.selectedMovie} />;
        }
    }
    render() {
        return (
            <div>
                <div className="Navbar">
                    <h2>Popular Movies Today!</h2>
                </div>

                <div className="MainContainer">
                    {
                        this.state.movies.map((movie, index) => {
                            return <MovieLink key={index}
                                movie={this.handleSelectedMovie.bind(this, movie)}
                                src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
                        })
                    }
                </div>
                <a style={{ 'color': 'red' }} onClick={() =>
                    this.setState({ displayPreview: !this.state.displayPreview })}>
                    {
                        (this.state.selectedMovie && this.state.displayPreview) ?
                            <MoviePreview selected={this.state.selectedMovie} /> : null
                    }
                </a>
            </div>
        );
    }
}

export default MovieSite;