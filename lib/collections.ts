import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Shop = new Mongo.Collection('shop');
export const Offer = new Mongo.Collection('offer');
export const Temp_Shop = new Mongo.Collection('temp_shop');
export const Users = Meteor.users;

export const FileCollection = new FS.Collection("FileCollection", {
    stores: [new FS.Store.FileSystem("FileCollection", {path: "../../../../../public/uploads"})]//{path: "~/meteor_uploads"}
});
FileCollection.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc) {
        return true;
    },
    remove: function (userId, doc) {
        return true;
    },
    download: function (userId, doc) {
        return true;
    }
});

export const LogoCollection = new FS.Collection("LogoCollection", {
    stores: [new FS.Store.FileSystem("LogoCollection", {path: "../../../../../public/upload/logo"})]//{path: "~/meteor_uploads"}
});
LogoCollection.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc) {
        return true;
    },
    remove: function (userId, doc) {
        return true;
    },
    download: function (userId, doc) {
        return true;
    }
});