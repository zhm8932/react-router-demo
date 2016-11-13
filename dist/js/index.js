webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports) {

	"use strict";

	// var $ = require('jquery');
	// var React = require('react');
	// var ReactDOM = require('react-dom');


	console.log("dll's React:", React);
	console.log("dll's ReactDOM:", ReactDOM);

	var a = '88883ddd33';

	console.log("a:", a);

	console.log("bbb:", a);
	console.log("bbb:", a);

	var add = function add(x, y) {
	    return x + y;
	};

	console.log("add:", add(3, 6));
	console.log("jquery:", $());

	var Hello = React.createClass({
	    displayName: "Hello",
	    render: function render() {
	        return React.createElement(
	            "p",
	            null,
	            "Hello !!!"
	        );
	    }
	});

	ReactDOM.render(React.createElement(Hello, null), document.querySelector('.app'));

/***/ }
]);