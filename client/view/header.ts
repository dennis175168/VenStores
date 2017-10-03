import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Shop } from '../../lib/collections';


Template.header_large.onCreated(function helloOnCreated() {
    
});

Template.header_large.helpers({
    info(){
		const mail = Meteor.user().emails[0].address;
		const myshop = Shop.findOne({sh_mail: mail});
		return myshop.sh_name;
  },
});

Template.header_large.events({
    'click #logout': function(){
		console.log('logging out'); 
		Meteor.logout(function(){ 
		});
	},

});

Template.header_small.helpers({
	info(){
	const mail = Meteor.user().emails[0].address;
	const myshop = Shop.findOne({sh_mail: mail});
	return myshop.sh_name;
},
});
Template.header_small.events({
    'click #logout': function(){
		console.log('logging out'); 
		Meteor.logout(function(){ 
		});
	},
	

});