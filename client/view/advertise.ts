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
    const offer_title = t.find('#add_offer_title').value;
    const offer_level = t.find('#add_offerlevel').value;
    const mail = Meteor.user().emails[0].address;
    const myshop = Shop.findOne({sh_mail: mail});
    const shop_id = myshop.sh_id;
    const myoffers = Offer.find({sh_id:shop_id});
    const count = myoffers.count();
    if(offer_startdate == "" || offer_enddate == ""||add_offer_text == ""){
      console.log("打字阿");
      alert("請輸入完整內容");
     }else if(count >= 3){
      alert("最多上傳三筆廣告");
      $(".new").css("display", "none");
     }else{
        console.log(offer_startdate+offer_enddate+add_offer_text+myshop.sh_id);
        console.log(offer_level+offer_title);
        Offer.insert({
          sh_id:myshop.sh_id,
          offer_startdate:offer_startdate,
          offer_enddate:offer_enddate,
          offer_title:offer_title,
          offer_text: add_offer_text,
          offer_level_id: offer_level,
          offer_onsmartphone:'0',
        });
        Meteor.call('Offerinsert', myshop.sh_id, add_offer_text, offer_startdate, offer_enddate, offer_title, offer_level);
        $(".new").css("display", "none");
        alert("新增成功");
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

  //更新offer_title
  'click .update_offer_title'(event,t){
    event.preventDefault();
    
    const offer_id = this.offer_id;
    const _id = this._id;
    const offer_title_content = t.find('#update_offer_title_content'+offer_id).value;
    if (offer_title_content == ""){
      console.log("請打字");
      alert("請輸入內容");
    }else{
      Offer.update({_id: _id} ,{ $set: {offer_title : offer_title_content} });
      Meteor.call('UpdateAll', 'offer','offer_title',offer_title_content,offer_id,'offer_id');
      // console.log(this);
      // console.log(offer_text_content+ offer_id);
    }
    
  },

  //更新offer_level
  'click .update_offer_level'(event,t){
    event.preventDefault();
    
    const offer_id = this.offer_id;
    const _id = this._id;
    const offer_level_content = t.find('#update_offer_level_content'+offer_id).value;
    if (offer_level_content == ""){
      console.log("請打字");
      alert("請輸入內容");
    }else{
      Offer.update({_id: _id} ,{ $set: {offer_level_id : offer_level_content} });
      Meteor.call('UpdateAll', 'offer','offer_level_id',offer_level_content,offer_id,'offer_id');
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
    const mail = Meteor.user().emails[0].address;
    const myshop = Shop.findOne({sh_mail: mail});
    const shop_id = myshop.sh_id;

    
    console.log(Offer.findOne({sh_id:shop_id,offer_onsmartphone:"1"}));
    //if 目前有設定推波
    if(Offer.findOne({sh_id:shop_id,offer_onsmartphone:"1"})!=null){
      const old_offer = Offer.findOne({sh_id:shop_id,offer_onsmartphone:"1"});
      Offer.update({_id: old_offer._id} ,{ $set: {offer_onsmartphone : 0} });
      Meteor.call('UpdateAll', 'offer','offer_onsmartphone',0, old_offer.offer_id, 'offer_id');
      //insert new offer
      const offer_id = this.offer_id;
      const _id = this._id;
      const others = Offer.find({sh_id:shop_id});
      Offer.update({_id: _id} ,{ $set: {offer_onsmartphone : 1} });
      Meteor.call('UpdateAll', 'offer','offer_onsmartphone',1, offer_id, 'offer_id');
      window.location.replace("advertise");
    }else{
      const offer_id = this.offer_id;
      const _id = this._id;
      const others = Offer.find({sh_id:shop_id});
      Offer.update({_id: _id} ,{ $set: {offer_onsmartphone : 1} });
      Meteor.call('UpdateAll', 'offer','offer_onsmartphone',1, offer_id, 'offer_id');
      window.location.replace("advertise");
    }
    

    
    
  },
  'click .delete_offer'(event,t){
    event.preventDefault();
    const offer_id = this.offer_id;
    const _id = this._id;
    const offer_startdate_content = t.find('#update_offer_startdate_content'+offer_id).value;
    Offer.remove({_id: _id});
    Meteor.call('RemoveAll', 'offer','offer_id', offer_id);
    //console.log(this);
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
    is2(){
      return '2';
    },
    is3(){
      return '3';
    },
  });