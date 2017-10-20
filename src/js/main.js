var App = require('./components/App.js');
var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/appAPI.js');
var startData = require('./startData');

AppAPI.getWorkouts();

if (localStorage.getItem('workouts') == null) {
    startData.init();
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

