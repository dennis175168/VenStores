import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Temp_Shop } from '../../lib/collections';
import { Shop } from '../../lib/collections';
import { Users} from '../../lib/collections';


Meteor.users.allow({
    update: function() {
        return true;
    }
});

Template.privacy.onCreated(function() {
    Meteor.call('load');
});

Template.privacy.helpers({
    info(){
        const mail = Meteor.user().emails[0].address;
        const myshop = Shop.findOne({sh_mail: mail});
        return myshop;
    },
});

Template.privacy.events({
    // 'click .update_name'(event, t){
    //     event.preventDefault();
    //     const content = t.find('#name').value;
    //     const mail = Meteor.user().emails[0].address;
    //     const myshop = Shop.findOne({sh_mail: mail});
    //     const shop_id = myshop.sh_id;
    //     const _id = myshop._id;
    //     //console.log(content);
    //     if(content == ""){
    //      console.log("打字阿操");
    //      alert("請輸入內容");
    //     } else{
    //       Meteor.call('update', 'sh_name', content, shop_id);
    //       Shop.update({_id: _id} ,{ $set: {sh_name : content} });
    //     }
    // },

    'click .update_person'(event, t){
        event.preventDefault();
        const content = t.find('#person').value;
        const mail = Meteor.user().emails[0].address;
        const myshop = Shop.findOne({sh_mail: mail});
        const shop_id = myshop.sh_id;
        const _id = myshop._id;
        //console.log(content);
        if(content == ""){
         console.log("打字阿操");
         alert("請輸入內容");
        } else{
          Meteor.call('update', 'sh_admin', content, shop_id);
          Shop.update({_id: _id} ,{ $set: {sh_admin : content} });
        }
    },

    'click .update_person_phone'(event, t){
        event.preventDefault();
        const content = t.find('#person_phone').value;
        const mail = Meteor.user().emails[0].address;
        const myshop = Shop.findOne({sh_mail: mail});
        const shop_id = myshop.sh_id;
        const _id = myshop._id;
        //console.log(content);
        if(content == ""){
         console.log("打字阿操");
         alert("請輸入內容");
        } else{
          Meteor.call('update', 'sh_admin_phone', content, shop_id);
          Shop.update({_id: _id} ,{ $set: {sh_admin_phone : content} });
        }
    },

    // 'click .update_mail'(event, t){
        
    //     event.preventDefault();
    //     const content = t.find('#mail').value;
    //     const mail = Meteor.user().emails[0].address;
    //     const myshop = Shop.findOne({sh_mail: mail});
    //     const shop_id = myshop.sh_id;
    //     const _id = myshop._id;
    //     const user_id = Meteor.user()._id;
    //     var user = Meteor.users.findOne();
    //     console.log(user);
    //     if(content == ""){
    //      console.log("打字阿操");
    //      alert("請輸入內容");
    //     } else{
    //        Meteor.call('updateuser' , user_id, content)
    //        Meteor.call('update', 'sh_mail', content, shop_id);
    //        Shop.update({_id: _id} ,{ $set: {sh_mail : content} });
    //     }
    // },

    'click .update_pwd'(event, t){
        const oldPassword = t.find('#oldPassword').value;
        const newPassword = t.find('#newPassword').value;
        const newPassword2 = t.find('#newPassword2').value;
        if(newPassword == newPassword2){
            Accounts.changePassword(oldPassword, newPassword, function(err){
                if (err) {
                    console.log(err.reason);
                    if(err.reason=="Incorrect password"){
                        alert('請輸入正確密碼');
                    }
                } else {
                    alert('密碼成功修改!');
                }
            });
        }else{
            $('.error').css('display','block');
            alert('確認新密碼失敗!');
        }
        
    },
});