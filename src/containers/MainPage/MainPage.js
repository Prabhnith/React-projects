import React, {Component} from 'react';
import Particles from 'react-particles-js';
import particleParams from '../../particlesjs-config.json';
// import QuoteGenerator from '../../../src/components/QuoteGenerator/QuoteGenerator';
// import MovieSite from '../../../src/components/MovieSite/MovieSite';
// import WeatherNow from '../../../src/components/WeatherNow/WeatherNow';
// import TicTacToe from '../../../src/components/';
// import LocalWeather from '../../../src/components/';
import AboutMe from '../../components/IntroPage/Aboutme';
import Experience from '../../components/IntroPage/Experience';
import Contacts from '../../components/IntroPage/Contacts';
import Education from '../../components/IntroPage/Education';
import Skills from '../../components/IntroPage/Skills';
import Languages from '../../components/IntroPage/Languages';
import Trainings from '../../components/IntroPage/Trainings';
import './MainPage.css';

class MainPage extends Component{

    render(){
        return(
            <div>
                    <Particles params={particleParams}/>
            <div className="Left">
                
                <AboutMe />
                <Experience />
                {/* <QuoteGenerator /> */}
                {/* <MovieSite /> */}
                 {/* <WeatherNow /> */}
                {/*<TicTacToe /> */}
            </div>
                <div className="Right">
                    <Contacts />
                    <Education/>
                    <Skills />
                    <Languages/>
                    <Trainings />
                </div>
            </div>
        );
    }
}

export default MainPage;