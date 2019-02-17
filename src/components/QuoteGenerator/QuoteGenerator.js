import React, { Component } from 'react';
import './QuoteGenerator.css';

const background_images = [
    'https://cdn.magdeleine.co/wp-content/uploads/2014/11/wdXqHcTwSTmLuKOGz92L_Landscape-1400x957.jpg',
    'https://cdn.magdeleine.co/wp-content/uploads/2014/09/6H-1400x933.jpg',
    'https://ununsplash.imgix.net/uploads/1413387158190559d80f7/6108b580?q=75&fm=jpg&s=d1c3df390a81d3371d05730a396ca390',
    'https://images.unsplash.com/photo-1427464407917-c817c9a0a6f6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=812662922febc6b1006719224d6c3772',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=61282cfeed75871385c84c2a44a8e594',
    'https://images.unsplash.com/photo-1460500063983-994d4c27756c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=27c2758e7f3aa5b8b3a4a1d1f1812310',
    'https://isorepublic.com/wp-content/uploads/2015/10/up-in-the-clouds-1500x997.jpg',
    'https://images.unsplash.com/photo-1452711932549-e7ea7f129399?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=58b1e18ecae2804d6f2df344530bdaf6',
    'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=9ab739b6338ab856496c9cec7578f58f',
    'https://images.unsplash.com/photo-1433190152045-5a94184895da?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4578a679069b9fb7be2d39d5d2d1e2bf',
    'https://images.unsplash.com/photo-1445127040028-b1bdb9acd16e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=5f10c1c850239222d20e96ae1b8b5862',
    'https://images.unsplash.com/photo-1437651025703-2858c944e3eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=42cead70c6b9ecf7212d794c2f5541dc'
];
class QuoteGenerator extends Component {
    state = {
        quote: ["I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on them unless they act."],
        author: "Buddha"
    }

    getRandomBackgroundImage(min = 0, max = background_images.length) {
        var index = Math.floor(Math.random() * (max - min)) + min;
        var url = 'url(' + background_images[index] + ')';
        return url;
    }
    componentDidMount() {
        document.body.style.backgroundImage = this.getRandomBackgroundImage();
    }

    handleQuoteChange = () => {
        fetch('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    quote: json.quoteText,
                    author: json.quoteAuthor
                });
                
            })
            .catch(err=>console.log(err));
    };

    render() {
        return (
            <div>
                <div className="QuoteContainer">
                    <blockquote ><i className="fa fa-quote-left"></i>
                        <span id="quote" className="QuoteDiv">{this.state.quote}</span>
                        <i className="fa fa-quote-right"></i>
                    </blockquote>

                    <footer className="QuoteAuthor" id="quote_author" ><b>~{this.state.author || "Unknown"}</b></footer>
                    <button className="Button QuoteButton" onClick={this.handleQuoteChange}>Random Quote</button>
                </div>
            </div>
        );
    }
}

export default QuoteGenerator;