import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from 'shared/App';
/*
class Root extends Component {
    render() {
        return (
            <div>
              <BrowserRouter>
                    <App/>
            </BrowserRouter>  
            </div>
        );
    }
}
*/

const Root = () => (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
);

export default Root;