import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';
import { Shop } from '../../lib/collections';
import { Member } from '../../lib/collections';
import { Point } from '../../lib/collections';

Template.scanner.onCreated(function(){
    Meteor.call('load_member');
    Meteor.call('load_point');
  });


Template.scanner.events({
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
    'click .point_img_insert'(event,t){
        const mail = Meteor.user().emails[0].address;
        const myshop = Shop.findOne({sh_mail: mail});
        const shop_id = myshop.sh_id;
        const _id = myshop._id;
        const member_id = t.find('#result').value;
        const price = t.find('#point_img').value;
        const point = Math.round(price/100) ;//floor()
        //const now = new Date(new Date().toLocaleString('en-US'));//new Date().toLocaleString('en-US');
        var date = new Date()
        var now = moment(date).format("YYYY-DD-MM");
         console.log(member_id+ price+ shop_id+now);

        if (price == ""){
            console.log("請打字");
            alert("請輸入內容");
        }else{

            const member_name = Member.findOne({mb_id:member_id}).mb_name;
            document.getElementById("label").innerHTML = member_name;
            // console.log(this);
            // console.log(offer_text_content+ offer_id);
            try{
                const now_point = Point.findOne({mb_id:member_id}).point;
                const new_point = parseInt(now_point) + point ; 
                console.log(point);
                // console.log(now);
                Meteor.call('Shopping_recordinsert', shop_id, member_id, price, point, now);
                Meteor.call('UpdateAll', 'point', 'point', new_point, member_id, 'mb_id');
                
            }catch (e){
                alert("會員尚未註冊");
            }
        }
        
    },
    'click .point_manual_insert'(event,t){
        const mail = Meteor.user().emails[0].address;
        const myshop = Shop.findOne({sh_mail: mail});
        const shop_id = myshop.sh_id;
        const _id = myshop._id;
        const member_mail = t.find('#mail').value;
        const price = t.find('#point_manual').value;
        const point = price/100;
        var date = new Date()
        var now = moment(date).format("YYYY-DD-MM");
        if (price == ""){
            console.log("請打字");
            alert("請輸入內容");
            
          }else{
            try{
                const member = Member.findOne({mb_mail:member_mail});
                const member_id = member.mb_id;
                const now_point = Point.findOne({mb_id:member_id}).point;
                const new_point = parseInt(now_point) + point ; 
                console.log(now);
                Meteor.call('Shopping_recordinsert', shop_id, member_id, price, point, date);
                Meteor.call('UpdateAll', 'point', 'point', new_point, member_id, 'mb_id');
                
            }catch (e){
                alert("會員尚未註冊");
            }
          }
    },

});


Template.scanner.helpers({

    
    test(){
        return "tttt";
    }
});