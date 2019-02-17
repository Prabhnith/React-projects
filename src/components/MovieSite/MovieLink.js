import React from 'react';

const MovieLink = (props) => {
    return (
        <div>
            <a className="MovieLink"
                onClick={props.movie}>
                <img alt="" className="MovieImgResponsive"
                    src={props.src}>
                </img>
            </a>
        </div >
    )
};

export default MovieLink;