import React from 'react';
import {Link} from 'react-router';
// export default React.createClass({
//     render(){
//         return(
//             <div>Repos</div>
//         )
//     }
// })

export default React.createClass({
    render(){
        return(
            <div>
                <h2>Repos</h2>
                <ul>
                    <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
                    <li><Link to="/repos/facebook/react">React</Link></li>
                </ul>
                {this.props.children}
                {console.log("this.props.children:",this.props.children)}
            </div>
        )
    }
})