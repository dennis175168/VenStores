import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Temp_Shop } from '../../lib/collections';
import { Shop } from '../../lib/collections';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Board } from '../../lib/collections';

Template.announce.onCreated(function(){
    Meteor.call('load_board');
  });

Template.announce.helpers({
  board_info(){
    const board_info = Board.find();
    return board_info;
  },


});