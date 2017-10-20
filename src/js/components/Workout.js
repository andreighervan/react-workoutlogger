var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var Workout = React.createClass({
    render: function () {
        if(this.props.workout.miles!=''){
            var miles=' | '+this.props.workout.miles+" miles";
        }else{
            var miles='';
        }
        return (
          <li className="list-group-item">
              {this.props.workout.type} - {this.props.workout.minutes} Minutes {miles} <a href="#" className="delete" onClick={this.onDelete.bind(this,this.props.workout.id)}>x</a>
              </li>
        )
    },
    onDelete:function(i,j){
        AppActions.removeWorkout(i);
    }
});

module.exports = Workout;