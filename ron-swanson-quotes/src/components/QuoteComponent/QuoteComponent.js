import React from 'react';
import { Image } from 'react-bootstrap'; 

import './QuoteComponent.css';

function QuoteComponent(props) {

    let showQuote = 
        (<div className="QuoteComponent">
            <div>
                {(props.isRon) ?
                <Image src={require("../../utils/images/ron-approves.jpg")} circle responsive className="QuoteComponent-img"/> :
                <Image src={require("../../utils/images/knope.png")} circle responsive className="QuoteComponent-img"/>}                
            </div>
            <div>
                <div className="QuoteComponent-quote">
                    <p>{props.quote}</p>
                </div>
            </div>
        </div>);

    return (props.quote) 
    ? showQuote 
    : <div className="QuoteComponent-quote">
        Find out what Ron has to say!
    </div>;
}

export default QuoteComponent;