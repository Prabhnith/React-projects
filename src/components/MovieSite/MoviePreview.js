import React from 'react';
import "./MoviePreview.css";

const MoviePreview = (props) => {
    return (
        <div className="MoviePreview">
            <div >
                <h2>{props.selected.original_title}</h2>
                <img alt="" className="PreviewImgResponsive"
                    src={`http://image.tmdb.org/t/p/w300/${props.selected.poster_path}`}>
                </img>
            </div>
            <div className=" MovieSummary">
                <h3>Description:</h3><p>{props.selected.overview}</p>
                <h3>Release Date:</h3><p>{props.selected.release_date}</p>
                <h3>Rating:</h3><p>{props.selected.vote_average}</p>
            </div>
        </div>
    );

}

export default MoviePreview;