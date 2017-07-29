import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Temp_Shop } from '../../lib/collections';
import { Shop } from '../../lib/collections';
import {Users} from '../../lib/collections';


Template.privacy.onCreated(function() {
    Meteor.call('load');
    //console.log(Shop.findOne({sh_id: "1"}).sh_address);
});

Template.privacy.helpers({
    info(){
        const mail = Meteor.user().emails[0].address;
        const myshop = Shop.findOne({sh_mail: mail});
        return myshop;
    },
});

Template.privacy.events({
    // 'click .test'(event){
    //   console.log(Meteor.user().emails[0].address);//Users.findOne().emails.address);
    //  },

});