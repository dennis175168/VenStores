import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';
import { Shop } from '../../lib/collections';
import { Member } from '../../lib/collections';
import { Point } from '../../lib/collections';
import { Gift } from '../../lib/collections';
import { Gift_Box } from '../../lib/collections';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.prize.onCreated(function(){
    Meteor.call('load_member');
    Meteor.call('load_gift');
    Meteor.call('load_gift_box');
  });


  Template.prize.events({
    'click .point_insert'(event,t){
        const mail = Meteor.user().emails[0].address;
        const myshop = Shop.findOne({sh_mail: mail});
        const shop_id = myshop.sh_id;
        const _id = myshop._id;
        console.log(t.find('#result').value);
        console.log(shop_id);

    },

    'click .manual_button'(){
        $('.manual').css("display", "block");
        $('#mainbody').css("display", "none");
    },

    'click .scan_button'(){
        $('.manual').css("display", "none");
        $('#mainbody').css("display", "block");
    },
    'click .find_user_prize1'(event,t){
        const mail = Meteor.user().emails[0].address;
        const myshop = Shop.findOne({sh_mail: mail});
        const shop_id = myshop.sh_id;
        const _id = myshop._id;
        const member_id = t.find('#result').value;
        window.location.replace("userprize/"+member_id);
        
        
    },
    'click .find_user_prize2'(event,t){
        const mail = Meteor.user().emails[0].address;
        const myshop = Shop.findOne({sh_mail: mail});
        const shop_id = myshop.sh_id;
        const _id = myshop._id;
        const member_mail = t.find('#mail').value;
        
        try{
            const member_id = Member.findOne({mb_mail:member_mail}).mb_id;
            window.location.replace("userprize/"+member_id);
        }catch (e){
            alert("此信箱尚未註冊");
        }
        
    },

});