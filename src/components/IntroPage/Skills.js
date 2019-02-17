import React from 'react';
import './card.css'

const Skills = () => {
    return (
        <div className="CardRight">
            <h2>SKILLS</h2>
            <p className="SkillsPara">  <span className="Skill">Frontend:</span> HTML, CSS, Bootstrap, React.js<br/>
                <span className="Skill">Backend:</span> Node.js, Express.js<br />
                <span className="Skill">Programming:</span> C, C++ , Python, JavaScript
                    (ES6)<br />
                <span className="Skill">Databases:</span> MySQL, NoSQL, MongoDb<br />
                <span className="Skill">Deployment:</span> Heroku, Amazon AWS,
                    DigitalOcean, Google Cloud(Engine)<br />
                <span className="Skill">Operating System:</span> Linux, Windows, Mac
            </p>
        </div>
    )
}

export default Skills; 