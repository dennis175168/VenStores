import { Meteor } from 'meteor/meteor';
import { FileCollection } from '../lib/collections.ts';

Meteor.publish("fileUploads", function () {
  console.log("publishing fileUploads");
  return FileCollection.find();
});