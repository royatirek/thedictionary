import React from 'react';
import {Link} from 'react-router-dom';

const frequentWords = (props) => {
    //console.log(props);
    return(
       
        
        <div className = "align-items-centre card-body frequentWords">

        <ul className="list-group">
            <li className="list-group-item active"><b>Trending</b></li>
            {props.frequentWords.map((array,index)=>
            <li key={index} className="list-group-item" onClick={props.goToTop}>
            <Link to={`/browse/${array['word']}`}>{array['word']}</Link>
            </li>)}

        </ul>
        </div>
       
        
    );
}

export default frequentWords;
