import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { Shop } from '../lib/collections';
import { Temp_Shop } from '../lib/collections';
import { FileCollection } from '../lib/collections';

Meteor.methods({
    'load'(){
          const sql ="select * from shop";
            HTTP.post("http://127.0.0.1/ajax/venus.php", { params: {sql} }, function(err, data){
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
                    });
            }
            });

    },

    'TempUserinsert'(name, phone, address, mail, admin, admin_phone){//
        const sql = "INSERT INTO temp_shop (tsh_name, tsh_mail, tsh_phone, tsh_address, tsh_admin, tsh_admin_phone) VALUES ('"+name+"','"+mail+"','"+phone+"','"+address+"','"+admin+"','"+admin_phone+"')";
        HTTP.post("http://127.0.0.1/ajax/venus.php", { params: {sql} }, function(err){});     
    },

    'load_tsh'(){
           const sql ="select * from temp_shop";
            HTTP.post("http://127.0.0.1/ajax/venus.php", { params: {sql} }, function(err, data){
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

    'Userinsert'(mail, name, phone, address, type, pic1, pic2, pic3, info, sh_admin, admin_phone){
        const sql = "INSERT INTO shop (sh_mail, sh_name, sh_phone, sh_address, sh_type, sh_pic1, sh_pic2, sh_pic3, sh_info, sh_admin, sh_admin_phone) VALUES ('"+mail+"','"+name+"','"+phone+"','"+address+"','"+type+"','"+pic1+"','"+pic2+"','"+pic3+"','"+info+"','"+sh_admin+"','"+admin_phone+"')";
        HTTP.post("http://127.0.0.1/ajax/venus.php", { params: {sql} }, function(err){}); 
    },

    'update'(column, content , id){
        const sql ="UPDATE shop SET "+column+"='"+content+"' WHERE sh_id="+id;
        HTTP.post("http://127.0.0.1/ajax/venus.php", { params: {sql} }, function(err){}); 
    },

    '123'(){
        const content = FileCollection.findOne({creatorId:3+"pic1"}).copies.FileCollection.key;
        Meteor.call('update', 'sh_pic1', content, 3);
        console.log("success");
    },
})