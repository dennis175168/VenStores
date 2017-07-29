import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Temp_Shop } from '../../lib/collections';
import { FileCollection } from '../../lib/collections';
import { LogoCollection } from '../../lib/collections';


Meteor.subscribe("fileUploads");
    Template.pic.events({
      'click #deleteFileButton ': function (event) {
        console.log("deleteFile button ", this);
        FileCollection.remove({_id:this._id});
        
      },
      'change .your-upload-class': function (event, template) {
        
        $('.upload').click(function(){
            console.log("uploading...")
            FS.Utility.eachFile(event, function (file) {
            console.log("each file...");
            var yourFile = new FS.File(file);
            yourFile.creatorId = 456; // todo
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
    });

Template.pic.helpers({
  theFiles: function () {
    return FileCollection.find();
  }
});