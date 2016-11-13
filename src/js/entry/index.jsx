// var $ = require('jquery');
// var React = require('react');
// var ReactDOM = require('react-dom');


console.log("dll's React:", React);
console.log("dll's ReactDOM:", ReactDOM);

let a = '88883ddd33';

console.log("a:",a);

console.log("bbb:",a);
console.log("bbb:",a);

let add = (x,y)=>x+y;

console.log("add:",add(3,6));
console.log("jquery:",$());

var  Hello = React.createClass({
    render(){
        return <p>Hello !!!</p>
    }
})

ReactDOM.render(<Hello/>,document.querySelector('.app'))