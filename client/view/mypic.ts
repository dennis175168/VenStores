import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Temp_Shop } from '../../lib/collections';
import { Shop } from '../../lib/collections';
import { FileCollection } from '../../lib/collections';
import { LogoCollection } from '../../lib/collections';

Meteor.subscribe("fileUploads");
Template.mypic.events({
    'click #deleteFileButton ': function (event) {
    console.log("deleteFile button ", this);
    FileCollection.remove({_id:this._id});
},
    'change .upload-class': function (event, template) {
        const mail = Meteor.user().emails[0].address;
        const myshop = Shop.findOne({sh_mail: mail});
        const shop_id = myshop.sh_id;
        console.log(shop_id);
        const count = FileCollection.find({creatorId:shop_id}).count();

        if(count>=3){
            alert("商家圖片上船上限為3張");
        }else{
            $('.upload').click(function(){
            console.log("uploading...")
                FS.Utility.eachFile(event, function (file) {
                    console.log("each file...");
                    var yourFile = new FS.File(file);
                    yourFile.creatorId = shop_id; // todo
                    console.log(yourFile);
                    FileCollection.insert(yourFile, function (err, fileObj) {
                        console.log("callback for the insert, err: ", err);
                        if (!err) {
                        console.log("inserted without error");
                        }
                        else {
                        console.log("there was an error", err);
                        }
                    });
                });
            });
        }
        
        
    }
});

Template.mypic.helpers({
  theFiles: function () {
    const mail = Meteor.user().emails[0].address;
    const myshop = Shop.findOne({sh_mail: mail});
    const shop_id = myshop.sh_id;
    return FileCollection.find({creatorId:shop_id});
  }
});