import React from 'react'
import { render } from 'react-dom'
import {Router,Route,hashHistory,browserHistory} from 'react-router';
import App from '../module/App'
import About from '../module/About'
import Repos from '../module/Repos'
import Repo from '../module/Repo';
console.log("11111");
console.log("11111");
console.log("11111");
// console.log("render:",render)
// console.log("Router:",Router)
// console.log("Route:",Route)
// console.log("hashHistory:",hashHistory)
// render((
//     <Router history={hashHistory}>
//         <Route path="/" component={App}></Route>
//         <Route path="/about" component={About}></Route>
//         <Route path="/repos" component={Repos}></Route>
//     </Router>
// ),document.querySelector("#app"))

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/about" component={About}></Route>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}></Route>

            </Route>
        </Route>

    </Router>
),document.querySelector("#app"))

// render(<App/>, document.getElementById('app'))/
