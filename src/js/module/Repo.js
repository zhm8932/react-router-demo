/**
 * Created by 91608 on 2016/11/13.
 */
import React from 'react';

export default React.createClass({
    render(){
        return(
            <div>
                <h2>{this.props.params.repoName}</h2>
                <h3>{this.props.params.userName}</h3>
            </div>
        )
    }
})