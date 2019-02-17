import React from 'react';
import QuoteGenerator from '../QuoteGenerator/QuoteGenerator';
import MovieSite from '../MovieSite/MovieSite';
import { Route ,Link, Switch } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <Link target="_blank" className="NavLink" to="/QuoteGenerator">Quotes</Link>
            <Link target="_blank" className="NavLink" to="/MovieSite">MovieSite</Link>
            <Switch>
            <Route path="/MovieSite"  component={MovieSite} />
            <Route path="/QuoteGenerator"  component={QuoteGenerator} />
            </Switch>
            {/* <QuoteGenerator /> */}
        </div>
    )
}

export default Projects;