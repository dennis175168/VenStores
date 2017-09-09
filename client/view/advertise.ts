import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Shop } from '../../lib/collections';
import { FileCollection } from '../../lib/collections';


Template.advertise.onCreated(function(){
    Meteor.call('load');
    Meteor.call('load_offer');
    this.subscribe('shop');
    //console.log(Shop.db.find());
  });
Meteor.subscribe("fileUploads");

Template.advertise.events({

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
  
  });