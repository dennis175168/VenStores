import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Temp_Shop } from '../../lib/collections';
import { Shop } from '../../lib/collections';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.log.events({

    'click #login-form' : function(e, t){
      
      e.preventDefault();
      // retrieve the input field values
      const email = t.find('#email').value
        , password = t.find('#password').value;

        // Trim and validate your fields here.... 

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){
        if (err){
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed. 
          console.log("ff");
          alert("請輸入正確信箱與密碼");
        }
          
        else{
          console.log("g");
          FlowRouter.go('home'); 
        }
          // The user has been logged in.
      });
         return false; 
      },
});