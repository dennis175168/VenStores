import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Shop } from '../../lib/collections';

Template.scanner.events({
    'click .point_insert'(event,t){
        const mail = Meteor.user().emails[0].address;
        const myshop = Shop.findOne({sh_mail: mail});
        const shop_id = myshop.sh_id;
        const _id = myshop._id;
        console.log(t.find('#result').value);
        console.log(shop_id);
    }
});