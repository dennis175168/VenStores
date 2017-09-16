import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Temp_Shop } from '../../lib/collections';
import { Shop } from '../../lib/collections';




Template.verify.onCreated(function() {
   Meteor.call('load_tsh');
    
});

Template.verify.helpers({
  
});

Template.verify.events({

    'click #ver'(event,t) {
        const pwd = t.find('#pwd').value;
        const tsh_id = t.find('#tsh_id').value;
        
        console.log( JSON.stringify(Temp_Shop.findOne({tsh_id: tsh_id}).tsh_mail));
        
        const tsh_mail = Temp_Shop.findOne({tsh_id: tsh_id}).tsh_mail;
        const tsh_name = Temp_Shop.findOne({tsh_id: tsh_id}).tsh_name;
        const tsh_phone = Temp_Shop.findOne({tsh_id: tsh_id}).tsh_phone;
        const tsh_address = Temp_Shop.findOne({tsh_id: tsh_id}).tsh_address;
        const tsh_type = Temp_Shop.findOne({tsh_id: tsh_id}).tsh_type;
        const tsh_pic1 = Temp_Shop.findOne({tsh_id: tsh_id}).tsh_pic1;
        const tsh_pic2 = Temp_Shop.findOne({tsh_id: tsh_id}).tsh_pic2;
        const tsh_pic3 = Temp_Shop.findOne({tsh_id: tsh_id}).tsh_pic3;
        const tsh_info = Temp_Shop.findOne({tsh_id: tsh_id}).tsh_info;
        const tsh_admin = Temp_Shop.findOne({tsh_id: tsh_id}).tsh_admin;
        const tsh_admin_phone = Temp_Shop.findOne({tsh_id: tsh_id}).tsh_admin_phone;
        console.log(tsh_name);
        Accounts.createUser({email: tsh_mail, password : pwd, username: tsh_name}, function(err){
          if (err) {
            // Inform the user that account creation failed
            console.log("ff");
          } else {
            // Success. Account has been created and the user
            // has logged in successfully. 
            console.log("gg");
            Meteor.call('Userinsert', tsh_mail, tsh_name, tsh_phone, tsh_address, tsh_type, tsh_pic1, tsh_pic2, tsh_pic3, tsh_info, tsh_admin, tsh_admin_phone);
            FlowRouter.go('home');

          }

        });
        console.log( "finish");
    },
  
});