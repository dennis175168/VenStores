import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.signin.onCreated(function() {
   //console.log("b1");
    
});

Template.signin.helpers({
  
});

Template.signin.events({

    'click .b'(event) {
        console.log("b");
        //$(".c2").hide();
        //alert("123");
        $(".c1").addClass("sw");
        $(".c").addClass("hd");
    },

    'click .b1'(event) {
        console.log("b1");
        //$(".c2").hide();
        //alert("123");
        $(".c2").addClass("sw");
        $(".c1").addClass("hd");
    },

    'click .b2'(event) {
        console.log("b2");
        //$(".c2").hide();
        //alert("123");
        $(".c3").addClass("sw");
        $(".c2").addClass("hd");
    },

    'click .b3'(event) {
        console.log("b3");
        //$(".c2").hide();
        //alert("123");
        $(".c4").addClass("sw");
        $(".c3").addClass("hd");
    },

    

});