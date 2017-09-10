import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Shop } from '../../lib/collections';
import { Offer } from '../../lib/collections';
import { FileCollection } from '../../lib/collections';


Template.advertise.onCreated(function(){
    Meteor.call('load');
    Meteor.call('load_offer');
    this.subscribe('shop');
    //console.log(Shop.db.find());

  });
Meteor.subscribe("fileUploads");

Template.advertise.events({
  'click .add'(event,t){
    console.log('123');
    $(".new").css("display", "block");
  },
  'click .clo'(){
    $(".new").css("display", "none");
  },
  //新增優惠
  'click .add_offer'(event,t){
    event.preventDefault();
    const offer_startdate = t.find('#add_startdate').value;
    const offer_enddate = t.find('#add_enddate').value;
    const add_offer_text = t.find('#add_offer_text').value;
    const mail = Meteor.user().emails[0].address;
    const myshop = Shop.findOne({sh_mail: mail});
    if(offer_startdate == "" || offer_enddate == ""||add_offer_text == ""){
      console.log("打字阿");
      alert("請輸入內容");
     }else{
        console.log(offer_startdate+offer_enddate+add_offer_text+myshop.sh_id);
        Meteor.call('Offerinsert', myshop.sh_id, add_offer_text, offer_startdate, offer_enddate);
     }
    
  },
  //更新offer_text
  'click .update_offer_text'(event,t){
    event.preventDefault();
    
    const offer_id = this.offer_id;
    const _id = this._id;
    const offer_text_content = t.find('#update_offer_text_content'+offer_id).value;
    if (offer_text_content == ""){
      console.log("請打字");
      alert("請輸入內容");
    }else{
      Offer.update({_id: _id} ,{ $set: {offer_text : offer_text_content} });
      Meteor.call('UpdateAll', 'offer','offer_text',offer_text_content,offer_id,'offer_id');
      // console.log(this);
      // console.log(offer_text_content+ offer_id);
    }
    
  },

  //更新offer_startdate
  'click .update_offer_startdate'(event,t){
    event.preventDefault();
    const offer_id = this.offer_id;
    const _id = this._id;
    const offer_startdate_content = t.find('#update_offer_startdate_content'+offer_id).value;
    if (offer_startdate_content == ""){
      console.log("請打字");
      alert("請輸入內容");
    }else{
      Offer.update({_id: _id} ,{ $set: {offer_startdate : offer_startdate_content} });
      Meteor.call('UpdateAll', 'offer','offer_startdate',offer_startdate_content, offer_id, 'offer_id');
      console.log(this);
      console.log(offer_startdate_content+ offer_id);
    }
  },

  //更新offer_enddate
  'click .update_offer_enddate'(event,t){
    event.preventDefault();
    const offer_id = this.offer_id;
    const _id = this._id;
    const offer_enddate_content = t.find('#update_offer_enddate_content'+offer_id).value;
    if (offer_enddate_content == ""){
      console.log("請打字");
      alert("請輸入內容");
    }else{
      Offer.update({_id: _id} ,{ $set: {offer_enddate : offer_enddate_content} });
      Meteor.call('UpdateAll', 'offer','offer_enddate',offer_enddate_content, offer_id, 'offer_id');
      console.log(this);
      console.log(offer_enddate_content+ offer_id);
    }
  },

  //更新圖片
  'click #choose_pic1'(event,t) {
    const mail = Meteor.user().emails[0].address;
    const myshop = Shop.findOne({sh_mail: mail});
    const shop_id = myshop.sh_id;
    const _id = myshop._id;
    const filename = FileCollection.findOne({_id:this._id}).copies.FileCollection.key;
    console.log(filename);
    t.find('#test').value = filename;
    console.log(t.find('#test').value )

  },
  //更新圖片
  'click .update_offer_pic'(event,t){
    event.preventDefault();
    const offer_id = this.offer_id;
    const _id = this._id;
    const filename = t.find('#test').value;
    console.log(filename);
    console.log(offer_id);
    Offer.update({_id: _id} ,{ $set: {offer_pic : filename} });
    Meteor.call('UpdateAll', 'offer','offer_pic',filename, offer_id, 'offer_id');
    console.log("update success");
  },

  //取消手機推播
  'click .update_offer_onsmartphone_0'(event,t){
    event.preventDefault();
    const offer_id = this.offer_id;
    const _id = this._id;
    const offer_startdate_content = t.find('#update_offer_startdate_content'+offer_id).value;
    Offer.update({_id: _id} ,{ $set: {offer_onsmartphone : 0} });
    Meteor.call('UpdateAll', 'offer','offer_onsmartphone',0, offer_id, 'offer_id');
    //console.log(this);
  },
  //設為手機推播
  'click .update_offer_onsmartphone_1'(event,t){
    event.preventDefault();
    // const mail = Meteor.user().emails[0].address;
    // const myshop = Shop.findOne({sh_mail: mail});
    // const shop_id = myshop.sh_id;
    const offer_id = this.offer_id;
    const _id = this._id;
    // const others = Offer.find({sh_id:shop_id});
    Offer.update({_id: _id} ,{ $set: {offer_onsmartphone : 1} });
    Meteor.call('UpdateAll', 'offer','offer_onsmartphone',1, offer_id, 'offer_id');

    
    
  },
    
  
});

Template.advertise.helpers({
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

    offer_info(){
      const mail = Meteor.user().emails[0].address;
      const myshop = Shop.findOne({sh_mail: mail});
      const shop_id = myshop.sh_id;
      const offers = Offer.find({sh_id:shop_id});
      return offers;
    },

    is0(){
      return '0';
    },
    is1(){
      return '1';
    },
  });