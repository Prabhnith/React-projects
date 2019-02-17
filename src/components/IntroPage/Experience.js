import React from 'react';
import './card.css'

const experience = () => {
    return (
        <div className="CardContainer">
            <div className="Card">
                <h1>Work Experience</h1>
                <h3>Sapient (Publicis.Sapient)— Associate (Bangalore, India)</h3>
                <h5>Nov 2017 - Present (1 year, 3 months)</h5>
                <p>Here I worked as Associate Technology, as a Developer.
                Here got trained on HTML, CSS and Javascript.
                After training worked as Shadow and then in Nissan Project
            Also, got trained in React.js, Node.js</p>
            </div>

            <div className="BottomCard">
                <h3>HackerBay - CloudBoost.io</h3>
                <h5>Sept 2017 - Nov 2017 (3 months)</h5>
                <p>Provide backend services like Data tables management,
                    associating the social network accounts, creating dB etc.<br/>
                    ● Managed and optimised the Homepage and other pages<br/>
                    ● As a developer, fixed the React.js and backend reported bugs<br/>
                    ● Developed the App Usage Dashboard
                    </p>
            </div>
            
            <div className="BottomCard">
                <h3>MutoHQ - Hyderabad</h3>
                <h5>June 2017 - Aug 2017 (3 months)</h5>
                <p>Development of components for Fabrica framework using html, css and JavaScript.<br/>
                    ● As a Junior Developer, the task was to develop components and unit test it and then deploy it to staging branch.
                    </p>
            </div>

        </div>
    )
}

export default experience;