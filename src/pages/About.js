import React, { Component } from 'react';
import queryString from 'query-string';


const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    
    const detail = query.detail === 'true';

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: blahblah'}      {/**주소 뒤에 ?detail=true가 붙어야만 detail:blah..출력 */}
        </div>
    );
};


export default About;