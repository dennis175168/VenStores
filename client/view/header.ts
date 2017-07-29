import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


Template.header_large.onCreated(function helloOnCreated() {
    
});

Template.header_large.helpers({
    
});

Template.header_large.events({
    'click #logout': function(){
		console.log('logging out'); 
		Meteor.logout(function(){ 
		});
	},

});