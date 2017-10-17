import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Temp_Shop } from '../../lib/collections';
import { Shop } from '../../lib/collections';
import { Board } from '../../lib/collections';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { moment } from 'meteor/momentjs:moment';

Template.home.onCreated(function(){
    Meteor.call('load');
    var date = new Date()
    var now = moment(date).format("YYYY-MM-DD");
    console.log(now);
  });

Template.home.helpers({
  notification(){
    var date = new Date()
    var now = moment(date).format("YYYY-MM-DD");
    const boardnow = Board.find({updated_at:now});
    return boardnow;
  },


  info(){
    const mail = Meteor.user().emails[0].address;
    const myshop = Shop.findOne({sh_mail: mail});
    return myshop;
  },


});