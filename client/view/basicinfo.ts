import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Shop } from '../../lib/collections';
import { FileCollection } from '../../lib/collections';

Template.basicinfo.onCreated(function(){
  Meteor.call('load');
  this.subscribe('shop');
  //console.log(Shop.db.find());
});
Meteor.subscribe("fileUploads");
Template.basicinfo.events({
    
    //  'submit .insert'(event){
    //        event.preventDefault();
    //        //const target = event.target;
    //        const text = event.target.t1.value;//sql存入text
    // //       Meteor.call('insert',text);
    //  },

    // 'click .delete'(event){
    //   const _id = this._id;
    //   const id = Reports.findOne(this._id).id;
    //   Meteor.call('delete' , _id , id);
    //  },

    'click .update_address'(event, t){
      event.preventDefault();
      const content = t.find('#address').value;
      const mail = Meteor.user().emails[0].address;
      const myshop = Shop.findOne({sh_mail: mail});
      const shop_id = myshop.sh_id;
      const _id = myshop._id;
      //console.log(content);
      if(content == ""){
       console.log("打字阿操");
       alert("請輸入內容");
      }else{
        //Meteor.call('update', 'sh_address', content, shop_id);
        Shop.update({_id: _id} ,{ $set: {sh_address : content} });
      }
    },

    'click .update_phone'(event, t){
      event.preventDefault();
      const content = t.find('#phone').value;
      const mail = Meteor.user().emails[0].address;
      const myshop = Shop.findOne({sh_mail: mail});
      
      const shop_id = myshop.sh_id;
      const _id = myshop._id;
      //console.log(content);
      if(content == ""){
       alert("請輸入內容");
      }else{
        //Meteor.call('update', 'sh_phone', content, shop_id);
        Shop.update({_id: _id} ,{ $set: {sh_phone : content} });
      }
    },

    'click .update_info'(event, t){
      event.preventDefault();
      const content = t.find('#info').value;
      const mail = Meteor.user().emails[0].address;
      const myshop = Shop.findOne({sh_mail: mail});
      const shop_id = myshop.sh_id;
      const _id = myshop._id;
      //console.log(content);
      if(content == ""){
       console.log("打字阿操");
       alert("請輸入內容");
      }else{
        //Meteor.call('update', 'sh_info', content, shop_id);
        Shop.update({_id: _id} ,{ $set: {sh_info : content} });
      }
    },

    'click #choose_pic1': function (event,t) {
      const mail = Meteor.user().emails[0].address;
      const myshop = Shop.findOne({sh_mail: mail});
      const shop_id = myshop.sh_id;
      const _id = myshop._id;
      console.log(FileCollection.findOne({_id:this._id}).copies.FileCollection.key); 
      const filename = FileCollection.findOne({_id:this._id}).copies.FileCollection.key;
      //Meteor.call('update', 'sh_pic1', filename, shop_id);
      Shop.update({_id: _id} ,{ $set: {sh_pic1 : filename} });
      console.log("update success");
      },

    'click #choose_pic2': function (event,t) {
      const mail = Meteor.user().emails[0].address;
      const myshop = Shop.findOne({sh_mail: mail});
      const shop_id = myshop.sh_id;
      const _id = myshop._id;
      console.log(FileCollection.findOne({_id:this._id}).copies.FileCollection.key); 
      const filename = FileCollection.findOne({_id:this._id}).copies.FileCollection.key;
      //Meteor.call('update', 'sh_pic2', filename, shop_id);
      Shop.update({_id: _id} ,{ $set: {sh_pic2 : filename} });
      console.log("update success");
      },

    'click #choose_pic3': function (event,t) {
      const mail = Meteor.user().emails[0].address;
      const myshop = Shop.findOne({sh_mail: mail});
      const shop_id = myshop.sh_id;
      const _id = myshop._id;
      console.log(FileCollection.findOne({_id:this._id}).copies.FileCollection.key); 
      const filename = FileCollection.findOne({_id:this._id}).copies.FileCollection.key;
      //Meteor.call('update', 'sh_pic3', filename, shop_id);
      Shop.update({_id: _id} ,{ $set: {sh_pic3 : filename} });
      console.log("update success");
      },

    'click .update_APP'(){
      alert("此動作將修改APP與網頁資料!!")
      const mail = Meteor.user().emails[0].address;
      const myshop = Shop.findOne({sh_mail: mail});
      const shop_id = myshop.sh_id;
      const pic1 = myshop.sh_pic1;
      const pic2 = myshop.sh_pic2;
      const pic3 = myshop.sh_pic3;
      const address = myshop.sh_address;
      const phone = myshop.sh_phone;
      const info = myshop.sh_info;
      Meteor.call('update', 'sh_pic1', pic1, shop_id);
      Meteor.call('update', 'sh_pic2', pic2, shop_id);
      Meteor.call('update', 'sh_pic3', pic3, shop_id);
      Meteor.call('update', 'sh_address', address, shop_id);
      Meteor.call('update', 'sh_phone', phone, shop_id);
      Meteor.call('update', 'sh_info', info, shop_id);
      alert("更新成功");
    },
    
    // 'click #c1': function (event,t) {
    //   $(".virtual_content1").css("display", "none");
    //   $(".virtual_content2").css("display", "block");
    //   },
    // 'click #c2': function (event,t) {
    //   $(".virtual_content1").css("display", "block");
    //   $(".virtual_content2").css("display", "none");
    //   },
    
});

Template.basicinfo.helpers({
  // shop_add(){
  //   return (Shop.findOne({sh_id: "1"}).sh_address);
  // },
  // shop_pic1(){
  //   return (Shop.findOne({sh_id: "1"}).sh_pic1);
  // },
  info(){
        const mail = Meteor.user().emails[0].address;
        const myshop = Shop.findOne({sh_mail: mail});
        return myshop;
  },
  
  theFiles: function () {
    const mail = Meteor.user().emails[0].address;
    const myshop = Shop.findOne({sh_mail: mail});
    const shop_id = myshop.sh_id;
    return FileCollection.find({creatorId:shop_id});
  },

});

