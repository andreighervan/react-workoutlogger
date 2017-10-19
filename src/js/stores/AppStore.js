var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI.js');
var CHANGE_EVENT = 'change';
var _workouts = [];
var _showForm = false;

var AppStore = assign({}, EventEmitter.prototype, {
    showForm: function () {
        _showForm = true;
    },
    addWorkout:function(workout){
      _workouts.push(workout);
    },
    getShowForm:function(){
        return _showForm;
    },
    getWorkouts:function(){
        return _workouts;
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
        case AppConstants.SHOW_FORM:
            AppStore.showForm();
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.ADD_WORKOUT:
            AppStore.addWorkout(action.workout);
            appAPI.addWorkout(action.workout);
            AppStore.emit(CHANGE_EVENT);
            break;
    }
    return true;
});

module.exports = AppStore;
