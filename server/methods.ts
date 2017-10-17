import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { Shop } from '../lib/collections';
import { Offer } from '../lib/collections';
import { Offer_Level } from '../lib/collections';
import { Point } from '../lib/collections';
import { Member } from '../lib/collections';
import { Gift } from '../lib/collections';
import { Gift_Box } from '../lib/collections';
import { Board } from '../lib/collections';
import { Shopping_Record } from '../lib/collections';
import { Temp_Shop } from '../lib/collections';
import { FileCollection } from '../lib/collections';
import { Users } from '../lib/collections';
import { Accounts } from 'meteor/accounts-base';


const url ="http://127.0.0.1/ajax/venus.php";
const mail_url ="http://127.0.0.1/ajax/mailer.php";
Meteor.methods({
    'load'(){
          const sql ="select * from shop";
            HTTP.post(url, { params: {sql} }, function(err, data){
            Shop.remove({});
            console.log(data);
            const info = JSON.parse(data.content);
            console.log( info[0].sh_name);
            console.log(info.length);
            for(var i=0; i<info.length; i++){
                    const sh_id = info[i].sh_id;
                    const sh_mail = info[i].sh_mail;
                    const sh_name = info[i].sh_name;
                    const sh_phone= info[i].sh_phone;
                    const sh_address = info[i].sh_address;
                    const sh_type = info[i].sh_type;
                    const sh_pic1 = info[i].sh_pic1;
                    const sh_pic2 = info[i].sh_pic2;
                    const sh_pic3 = info[i].sh_pic3;     
                    const sh_info = info[i].sh_info; 
                    const offer_pic = info[i].offer_pic; 
                    const offer_text = info[i].offer_text; 
                    const sh_admin = info[i].sh_admin; 
                    const sh_admin_phone = info[i].sh_admin_phone; 
                    const sh_delete = info[i].sh_delete;
                    Shop.insert({
                    sh_id : sh_id,
                    sh_mail: sh_mail,
                    sh_name :sh_name,
                    sh_phone :sh_phone,
                    sh_address :sh_address,
                    sh_type :sh_type,
                    sh_pic1 :sh_pic1,
                    sh_pic2 :sh_pic2,
                    sh_pic3 :sh_pic3,
                    sh_info :sh_info,
                    offer_pic :offer_pic,
                    offer_text :offer_text,
                    sh_admin :sh_admin,
                    sh_admin_phone :sh_admin_phone,
                    sh_delete :sh_delete,
                    });
            }
            });

    },
    'load_offer' (){
        const sql ="select * from offer";
        HTTP.post(url, { params: {sql} }, function(err, data){
        Offer.remove({});
        console.log(data);
        const info = JSON.parse(data.content);
        console.log( info[0].sh_name);
        console.log(info.length);
        for(var i=0; i<info.length; i++){
                const sh_id = info[i].sh_id;
                const offer_id = info[i].offer_id;
                const offer_pic = info[i].offer_pic;
                const offer_title = info[i].offer_title;
                const offer_text= info[i].offer_text;
                const offer_startdate = info[i].offer_startdate;
                const offer_enddate = info[i].offer_enddate;
                const offer_level_id = info[i].offer_level_id;
                const offer_onsmartphone = info[i].offer_onsmartphone;
                Offer.insert({
                sh_id : sh_id,
                offer_id: offer_id,
                offer_pic :offer_pic,
                offer_title:offer_title,
                offer_text :offer_text,
                offer_startdate :offer_startdate,
                offer_enddate :offer_enddate,
                offer_level_id:offer_level_id,
                offer_onsmartphone :offer_onsmartphone,
                });
        }
        });   
    },



    'load_tsh'(){
           const sql ="select * from temp_shop";
            HTTP.post(url, { params: {sql} }, function(err, data){
                Temp_Shop.remove({});
                console.log(data);
                const info = JSON.parse(data.content);
                console.log( info[0].tsh_name);
                console.log(info.length);
                for(var i=0; i<info.length; i++){
                        const tsh_id = info[i].tsh_id;
                        const tsh_mail = info[i].tsh_mail;
                        const tsh_name = info[i].tsh_name;
                        const tsh_phone= info[i].tsh_phone;
                        const tsh_address = info[i].tsh_address;
                        const tsh_type = info[i].tsh_type;
                        const tsh_pic1 = info[i].tsh_pic1;
                        const tsh_pic2 = info[i].tsh_pic2;
                        const tsh_pic3 = info[i].tsh_pic3;     
                        const tsh_info = info[i].tsh_info; 
                        //const offer_pic = info[i].offer_pic; 
                        //const offer_text = info[i].offer_text; 
                        const tsh_admin = info[i].tsh_admin; 
                        const tsh_admin_phone = info[i].tsh_admin_phone; 
                        Temp_Shop.insert({
                        tsh_id : tsh_id,
                        tsh_mail: tsh_mail,
                        tsh_name :tsh_name,
                        tsh_phone :tsh_phone,
                        tsh_address :tsh_address,
                        tsh_type :tsh_type,
                        tsh_pic1 :tsh_pic1,
                        tsh_pic2 :tsh_pic2,
                        tsh_pic3 :tsh_pic3,
                        tsh_info :tsh_info,
                        //offer_pic :offer_pic,
                        //offer_text :offer_text,
                        tsh_admin :tsh_admin,
                        tsh_admin_phone :tsh_admin_phone,
                        });
                }
            });

    },


    'load_shoppping_record' (){
        const sql ="select * from shoppping_record";
        HTTP.post(url, { params: {sql} }, function(err, data){
        Shopping_Record.remove({});
        console.log(data);
        const info = JSON.parse(data.content);
        console.log( info[0].sh_name);
        console.log(info.length);
        for(var i=0; i<info.length; i++){
                const record_id = info[i].record_id;
                const sh_id = info[i].sh_id;
                const mb_id = info[i].mb_id;
                const price = info[i].price;
                const point = info[i].point;
                const updated_at = info[i].updated_at;
                Shopping_Record.insert({
                    record_id : record_id,
                    sh_id: sh_id,
                    mb_id : mb_id,
                    price: price,
                    point : point,
                    updated_at: updated_at,
                });
        }
        });   
    },

    'load_member' (){
        const sql ="select * from member";
        HTTP.post(url, { params: {sql} }, function(err, data){
        Member.remove({});
        console.log(data);
        const info = JSON.parse(data.content);
        console.log( info[0].sh_name);
        console.log(info.length);
        for(var i=0; i<info.length; i++){
                const mb_id = info[i].mb_id;
                const mb_mail = info[i].mb_mail;
                const mb_phone = info[i].mb_phone;
                const mb_name = info[i].mb_name;
                const mb_gender = info[i].mb_gender;
                const mb_birth = info[i].mb_birth;
                const mb_pic = info[i].mb_pic;
                Member.insert({
                    mb_id : mb_id,
                    mb_mail: mb_mail,
                    mb_phone : mb_phone,
                    mb_name: mb_name,
                    mb_gender: mb_gender,
                    mb_birth : mb_birth,
                    mb_pic: mb_pic,
                });
        }
        });   
    },

    'load_point' (){
        const sql ="select * from point";
        HTTP.post(url, { params: {sql} }, function(err, data){
        Point.remove({});
        console.log(data);
        const info = JSON.parse(data.content);
        console.log( info[0].sh_name);
        console.log(info.length);
        for(var i=0; i<info.length; i++){
                const mb_id = info[i].mb_id;
                const point = info[i].point;
                const updated_at = info[i].updated_at;
                Point.insert({
                    mb_id : mb_id,
                    point: point,
                    updated_at : updated_at,
                });
        }
        });   
    },

    'load_gift' (){
        const sql ="select * from gift";
        HTTP.post(url, { params: {sql} }, function(err, data){
        Gift.remove({});
        console.log(data);
        const info = JSON.parse(data.content);
        console.log( info[0].sh_name);
        console.log(info.length);
        for(var i=0; i<info.length; i++){
                const gift_id = info[i].gift_id;
                const sh_id = info[i].sh_id;
                const gift_name = info[i].gift_name;
                const gift_pic = info[i].gift_pic;
                const gift_coin = info[i].gift_coin;
                const gift_store = info[i].gift_store;
                Gift.insert({
                    gift_id : gift_id,
                    sh_id: sh_id,
                    gift_name : gift_name,
                    gift_pic : gift_pic,
                    gift_coin: gift_coin,
                    gift_store : gift_store,
                });
        }
        });   
    },

    'load_gift_box' (){
        const sql ="select * from gift , gift_box where gift.gift_id = gift_box.gift_id";
        HTTP.post(url, { params: {sql} }, function(err, data){
        Gift_Box.remove({});
        console.log(data);
        const info = JSON.parse(data.content);
        console.log( info[0].sh_name);
        console.log(info.length);
        for(var i=0; i<info.length; i++){
                const gift_box_id = info[i].gift_box_id;
                const gift_id = info[i].gift_id;
                const mb_id = info[i].mb_id;
                const sh_id = info[i].sh_id;
                const gift_name = info[i].gift_name;
                const gift_pic = info[i].gift_pic;
                const gift_coin = info[i].gift_coin;
                const gift_store = info[i].gift_store;
                Gift_Box.insert({
                    gift_box_id : gift_box_id,
                    gift_id : gift_id,
                    mb_id: mb_id,
                    sh_id: sh_id,
                    gift_name : gift_name,
                    gift_pic : gift_pic,
                    gift_coin: gift_coin,
                    gift_store : gift_store,
                });
        }
        });   
    },

    'load_board' (){
        const sql ="select * from board ";
        HTTP.post(url, { params: {sql} }, function(err, data){
        Board.remove({});
        console.log(data);
        const info = JSON.parse(data.content);
        console.log( info[0].sh_name);
        console.log(info.length);
        for(var i=0; i<info.length; i++){
                const bd_id = info[i].bd_id;
                const bd_title = info[i].bd_title;
                const bd_content = info[i].bd_content;
                const bd_editor = info[i].bd_editor;
                const bd_doc = info[i].bd_doc;
                const updated_at = info[i].updated_at;
                Board.insert({
                    bd_id : bd_id,
                    bd_title : bd_title,
                    bd_content: bd_content,
                    bd_editor: bd_editor,
                    bd_doc : bd_doc,
                    updated_at : updated_at,
                });
        }
        });   
    },


    
    'TempUserinsert'(name, phone, address, mail, admin, admin_phone, type){//
        const sql = "INSERT INTO temp_shop (tsh_name, tsh_mail, tsh_phone, tsh_address, tsh_admin, tsh_admin_phone, verify, tsh_type) VALUES ('"+name+"','"+mail+"','"+phone+"','"+address+"','"+admin+"','"+admin_phone+"','F','"+type+"')";
        HTTP.post(url, { params: {sql} }, function(err){});     
    },

    'Userinsert'(mail, name, phone, address, type, pic1, pic2, pic3, info, sh_admin, admin_phone){
        const sql = "INSERT INTO shop (sh_mail, sh_name, sh_phone, sh_address, sh_type, sh_pic1, sh_pic2, sh_pic3, sh_info, sh_admin, sh_admin_phone) VALUES ('"+mail+"','"+name+"','"+phone+"','"+address+"','"+type+"','"+pic1+"','"+pic2+"','"+pic3+"','"+info+"','"+sh_admin+"','"+admin_phone+"')";
        HTTP.post(url, { params: {sql} }, function(err){}); 
    },

    'Offerinsert'(sh_id, offer_text, offer_startdate, offer_enddate, offer_title, offer_level_id ){
        const offer_onsmartphone = 0;
        const sql = "INSERT INTO offer (sh_id, offer_text, offer_startdate, offer_enddate, offer_onsmartphone, offer_title, offer_level_id) VALUES ('"+sh_id+"','"+offer_text+"','"+offer_startdate+"','"+offer_enddate+"','"+offer_onsmartphone+"','"+offer_title+"','"+offer_level_id+"')";
        HTTP.post(url, { params: {sql} }, function(err){}); 
    },

    'Shopping_recordinsert'(sh_id, mb_id, price, point, updated_at ){
        const sql = "INSERT INTO shopping_record (sh_id, mb_id, price, point, updated_at) VALUES ('"+sh_id+"','"+mb_id+"','"+price+"','"+point+"','"+updated_at+"')";
        HTTP.post(url, { params: {sql} }, function(err){}); 
    },

    'update'(column, content , id){
        const sql ="UPDATE shop SET "+column+"='"+content+"' WHERE sh_id="+id;
        HTTP.post(url, { params: {sql} }, function(err){}); 
    },

    'UpdateAll'(table ,column, content , id ,key_column){
        const sql ="UPDATE "+table+" SET "+column+"='"+content+"' WHERE "+key_column+"="+id;
        HTTP.post(url, { params: {sql} }, function(err){});
    },

    'updateuser'(user_id,content){
        Meteor.users.update({_id: user_id } , { $set: {'emails.0.address' : content} });
    },

    'RemoveAll'(table,key_column,id){
        const sql ="DELETE FROM "+table+" WHERE "+key_column+"="+id;
        HTTP.post(url, { params: {sql} }, function(err){});
    },

    'removeusers'(user_id){
        Users.remove({_id:user_id});
    },
    // 'createusers'(mail , pwd ,name){
    //     Accounts.createUser({email: mail, password : pwd, username: name}, function(err){
    //         if (err) {
    //           // Inform the user that account creation failed
    //           console.log("ff");
    //         } else {
    //           // Success. Account has been created and the user
    //           // has logged in successfully. 
    //           console.log("gg");
    //         }
  
    //       });
    // },

    
    
    '123'(){
        const content = FileCollection.findOne({creatorId:3+"pic1"}).copies.FileCollection.key;
        Meteor.call('update', 'sh_pic1', content, 3);
        console.log("success");
    },
    'reset_pwd'(username,mail){
        function RandomNumber(){
            var array1 = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
        　　var Str = "";
            for (var i=1; i<=10; i++){
                var index = Math.floor(Math.random() * array1.length);
                Str = Str +array1[index];
            }
        
          　return Str;
        }
        const _id = Meteor.users.findOne({username: username})._id;
        const pwd = RandomNumber();
        Accounts.setPassword(_id, pwd, true );
        console.log(mail);
        HTTP.post(mail_url, { params: {'mail':mail,'pwd':pwd} }, function(err,data){
            console.log(data);
        });
    },

    'aa'(){
        if (Accounts.findUserByEmail("456")) {
            return true;
        } else {
        return false;
        } 
    },

})

// if (Meteor.isServer){
//     Meteor.methods({
//         'update_mail'(user_id, content){
//             const mail = Meteor.user().emails[0].address;
//             Meteor.users.update({ _id: Meteor.userId(), 'emails.address': mail }, { $set: { 'emails.address': content }});
//         },
//     })
// }