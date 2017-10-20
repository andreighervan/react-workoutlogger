var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');
var Workout=require('./Workout');

var Workouts = React.createClass({
    render: function () {
        return (
           <ul className="list-group">
               {this.props.workouts.map(function(workout,i){
                   return(
                       <Workout workout={workout} key={i}/>
                   )
               })
               }
               </ul>
        )
    }
});

module.exports = Workouts;