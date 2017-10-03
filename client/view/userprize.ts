import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';
import { Shop } from '../../lib/collections';
import { Member } from '../../lib/collections';
import { Point } from '../../lib/collections';
import { Gift } from '../../lib/collections';
import { Gift_Box } from '../../lib/collections';

Template.userprize.onCreated(function(){
    Meteor.call('load_member');
    Meteor.call('load_gift');
    Meteor.call('load_gift_box');
  });


  Template.userprize.events({
    'click #delete_gift'(event,t){
        const mail = Meteor.user().emails[0].address;
        const myshop = Shop.findOne({sh_mail: mail});
        const shop_id = myshop.sh_id;
        const _id = myshop._id;
        console.log(this.gift_box_id);
        Gift_Box.remove({_id:this._id});
        Meteor.call('RemoveAll','gift_box','gift_box_id',this.gift_box_id);

    },

    'click #back'(event,t){
        FlowRouter.go('prize'); 

    },

});

Template.userprize.helpers({

    userprize(){
        var member_id = FlowRouter.getParam("mb_id");
        const prize = Gift_Box.find({mb_id:member_id});
        return prize;
    }
    
});
