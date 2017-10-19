var React = require('react');
var ReactDOM = require('react-dom');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');
var AddForm = require('./AddForm.js');

function getAppState() {
    return {
        showForm: AppStore.getShowForm(),
        workouts:AppStore.getWorkouts()
    }
}
var App = React.createClass({
    componentDidMount:function(){
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount:function(){
        AppStore.removeChangeListener(this._onChange);
    },
    getInitialState:function(){
        return getAppState();
    },
    _onChange:function(){
        this.setState(getAppState());
    },
    render: function () {
        console.log(this.state.workouts);
        if (this.state.showForm) {
            var form = <AddForm/>;
        } else {
            var form = '';
        }
        return (
            <div>
                <h1 className="text-center page-header">WorkoutLogger</h1>
                <a href="#" className="btn btn-primary btn-block" onClick={this.onShowFormClick}>Add Workout</a>
                <br/>
                {form}
            </div>
        )
    },
    onShowFormClick: function (e) {
        e.preventDefault();
        AppActions.showForm();
    }
});

module.exports = App;