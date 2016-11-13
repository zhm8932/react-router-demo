import React from 'react'
import {Link} from 'react-router';
import NavLink from './NavLink';
// export default React.createClass({
//   render() {
//     return <div>Hello, React Router!</div>
//   }
// })
// export default React.createClass({
//   render(){
//     return(
//         <div>
//           <h1>React Router Turorial</h1>
//           <ul role="nav">
//             <li><Link  to="/" activeClassName="active" onlyActiveOnIndex={true}>Index</Link></li>
//             <li><Link to="/about" activeClassName="active">About</Link></li>
//             <li><Link to="/repos" activeClassName="active">Repos</Link></li>
//           </ul>
//           <article>{this.props.children}</article>
//           {console.log("this.props.children:",this.props.children)}
//         </div>
//     )
//   }
// })
export default React.createClass({
    render(){
        return(
            <div>
                <h1>React Router Tourial</h1>
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>Index</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                </ul>
                <article>{this.props.children}</article>
            </div>
        )
    }
})