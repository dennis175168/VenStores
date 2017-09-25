import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Temp_Shop } from '../../lib/collections';
import { Shop } from '../../lib/collections';
import { Users} from '../../lib/collections';
import { FileCollection } from '../../lib/collections';

Template.alluser.helpers({
    user(){
        return FileCollection.find();
    },
});