import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Temp_Shop } from '../../lib/collections';
import { FileCollection } from '../../lib/collections';
import { LogoCollection } from '../../lib/collections';
import { Shop } from '../../lib/collections';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.signin.onCreated(function() {
   
    
});

Template.signin.helpers({
  
});

Template.signin.events({

    'click .b'(event,t) {
        console.log("b");
        //$(".c2").hide();
        //alert("123");
        // event.preventDefault();
        // const aaa = t.find('#aa').value;
        // console.log(aaa);
        $(".c1").css("display", "block");
        $(".c").css("display", "none");
    },

    'click .b1'(event,t) {
        console.log("b1");
        //$(".c2").hide();
        //alert("123");
        event.preventDefault();
        const sh_type = t.find('#sh_type').value;
        const sh_name = t.find('#sh_name').value;
        const sh_phone = t.find('#sh_phone').value;
        const sh_address = t.find('#sh_address').value;
        const sh_mail = t.find('#sh_mail').value;
        const sh_admin = t.find('#sh_admin').value;
        const sh_admin_phone = t.find('#sh_admin_phone').value;
        
        
        //console.log(Accounts.findUserByEmail(sh_mail));
        if(Shop.findOne({sh_mail:sh_mail}) == null){
            if(sh_name == "" || sh_phone == "" || sh_address == "" || sh_mail == "" || sh_admin == "" || sh_admin_phone == ""){
                alert("請輸入完整資訊");
            }else{
                $(".c2").css("display", "block");
                $(".c1").css("display", "none");
            }
            document.getElementById("lab_sh_type").innerHTML=sh_type;
            document.getElementById("lab_sh_name").innerHTML=sh_name;
            document.getElementById("lab_sh_phone").innerHTML=sh_phone;
            document.getElementById("lab_sh_address").innerHTML=sh_address;
            document.getElementById("lab_sh_mail").innerHTML=sh_mail;
            document.getElementById("lab_sh_admin").innerHTML=sh_admin;
            document.getElementById("lab_sh_admin_phone").innerHTML=sh_admin_phone;
            //console.log(document.getElementById("sh_type").value);
        }else if(Shop.findOne({sh_mail:sh_mail}).sh_delete == 'T'){
            document.getElementById("alert1").innerHTML='此商家已被商圈清除,請輸入被清除舊信箱及密碼登入,已確認清除,完成後信箱方可再進行註冊';
            alert('按下確定跳轉至登入頁面,請輸入被清除舊信箱及密碼登入');
            FlowRouter.go('log'); 
        }else{
            alert("信箱已被使用過");
        }
       
    },

    'click .b11'(event) {
        console.log("b11");
        $('.c').css("display", "block");
        $('.c1').css("display", "none");
        
    },

    'click .b2'(event,t) {
        console.log("b2");
        $(".c3").css("display", "none");
        $(".c2").css("display", "none");
        const sh_type = t.find('#sh_type').value;
        const sh_name = t.find('#sh_name').value;
        const sh_phone = t.find('#sh_phone').value;
        const sh_address = t.find('#sh_address').value;
        const sh_mail = t.find('#sh_mail').value;
        const sh_admin = t.find('#sh_admin').value;
        const sh_admin_phone = t.find('#sh_admin_phone').value;
        Meteor.call('TempUserinsert', sh_name, sh_phone, sh_address, sh_mail, sh_admin, sh_admin_phone, sh_type);
        FlowRouter.go('finish');
    },

    'click .b22'(event) {
        console.log("b22");
        $('.c1').css("display", "block");
        $('.c2').css("display", "none");
    },

    // 'click .b3'(event ,t) {
    //     console.log("b3");
    //     $(".c4").css("display", "block");
    //     $(".c3").css("display", "none");

    //     event.preventDefault();
    //     const sh_name = t.find('#sh_name').value;
    //     const sh_phone = t.find('#sh_phone').value;
    //     const sh_address = t.find('#sh_address').value;
    //     const sh_mail = t.find('#sh_mail').value;
    //     const sh_admin = t.find('#sh_admin').value;
    //     const sh_admin_phone = t.find('#sh_admin_phone').value;
    //     ////
    // },

    // 'click .b33'(event) {
    //     console.log("b33");
    //     $(".c2").css("display", "block");
    //     $(".c3").css("display", "none");
    // },

    // 'click .b44'(event) {
    //     console.log("b44");
    //     $(".c3").css("display", "block");
    //     $(".c4").css("display", "none");
    // },

    // 'click .b4'(event) {
    //     console.log("b4");
    //     //alert("123");
    // },

    // 'change .logo-upload-class': function (event, template,t) {
    //     const sh_mail = t.find('#sh_mail').value;
    //     $('#upload').click(function(event,t1){

    //         console.log("uploading...")
    //         FS.Utility.eachFile(event, function (file) {
    //         console.log("each file...");
    //         var yourFile = new FS.File(file);
    //         yourFile.creatorId = sh_mail; // todo
    //         console.log(yourFile);
    //         FileCollection.insert(yourFile, function (err, fileObj) {
    //             console.log("callback for the insert, err: ", err);
    //             if (!err) {
    //             console.log("inserted without error");
    //             }
    //             else {
    //             console.log("there was an error", err);
    //             }
    //         });
    //         });
    //     });
        
    //   },

    // 'change .basic-upload-class': function (event, template) {
    //     $('#upload').click(function(){

    //         console.log("uploading...")
    //         FS.Utility.eachFile(event, function (file) {
    //         console.log("each file...");
    //         var yourFile = new FS.File(file);
    //         yourFile.creatorId = 456; // todo
    //         console.log(yourFile);
    //         LogoCollection.insert(yourFile, function (err, fileObj) {
    //             console.log("callback for the insert, err: ", err);
    //             if (!err) {
    //             console.log("inserted without error");
    //             }
    //             else {
    //             console.log("there was an error", err);
    //             }
    //         });
    //         });
    //     });
        
    //   },
    // 'click #upload'(event ,t){
    //     console.log("789")
    //     const sh_name = t.find('#sh_name').value;
    //     const sh_phone = t.find('#sh_phone').value;
    //     const sh_address = t.find('#sh_address').value;
    //     const sh_mail = t.find('#sh_mail').value;
    //     const sh_admin = t.find('#sh_admin').value;
    //     const sh_admin_phone = t.find('#sh_admin_phone').value;
    //     //Meteor.call('TempUserinsert', sh_name, sh_phone, sh_address, sh_mail, sh_admin, sh_admin_phone);
        
    //     FlowRouter.go('finish');
    // },

    

});



// Template.pic.helpers({
//   theFiles: function () {
//     return FileCollection.find();
//   }
// });
// Template.pic.events({
//       'click #deleteFileButton ': function (event) {
//         // console.log("deleteFile button ", this);
//         console.log(this);
//         FileCollection.remove({_id:this._id});
//         console.log("123");

//       },
// });