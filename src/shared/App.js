import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';         // Switch 컴포넌트는 라우트들을 매칭되는 첫번째 라우트만 보여준다.
import {Home, About} from 'pages';
import Menu from "components/Menu";

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>    {/**exact 는 주어진경로와 정확히 일치하여야 컴포넌트를 보여준다. */}
                <Switch>
                    <Route path="/about/:name" component={About}/>      {/** 먼저 비교할 라우트를 작성하여야 비교하여 나타내준다. */}
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        );
    }
}

export default App;