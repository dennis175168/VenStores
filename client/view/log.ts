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
          $('.error').css('display','block');
          //alert("請輸入正確信箱與密碼");
        }
          
        else{
          console.log("g");
          FlowRouter.go('home'); 
        }
          // The user has been logged in.
      });
         return false; 
      },

      'click #forget_btn'(e,t){
        e.preventDefault();
        const mail = t.find('#forget').value;
        const username = t.find('#username').value;
        const check = Meteor.users.findOne({username:username});
        if(mail == ""){
          alert("請填入信箱欄位");
        }else{
          if(check){
            console.log("yes");
            var options = {};
            options.email = mail;
            Accounts.forgotPassword(options, function(err){
              if (err) {
                console.log(err.reason);
              } else {
                Meteor.call('reset_pwd',username,mail);
                alert('Great success!');
              }
            });
          }else{
            console.log("nonono");
            alert("無此商家名稱!!");
          }
        }
      },

      'click .forgetpwd'(e,t){
        $('.forgetpwd1').css('display','block');
        $('.login1').css('display','none');
      },

      'click .backlogin'(e,t){
        $('.login1').css('display','block');
        $('.forgetpwd1').css('display','none');
      }

});