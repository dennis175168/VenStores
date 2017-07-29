import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { Shop } from '../lib/collections';

Meteor.startup(() => {
     //Meteor._reload.onMigrate(() => [false]); 
  // code to run on server at startup
  // const sql ="select * from shop";
  //   HTTP.post("http://127.0.0.1/ajax/venus.php", { params: {sql} }, function(err, data){
  //     Shop.remove({});
  //     console.log(data);
  //     const info = JSON.parse(data.content);
  //     console.log( info[0].sh_name);
  //     console.log(info.length);
  //     for(var i=0; i<info.length; i++){
  //           const sh_id = info[i].sh_id;
  //           const sh_name = info[i].sh_name;
  //           const sh_phone= info[i].sh_phone;
  //           const sh_address = info[i].sh_address;
  //           const sh_type = info[i].sh_type;
  //           const sh_pic1 = info[i].sh_pic1;
  //           const sh_pic2 = info[i].sh_pic2;
  //           const sh_pic3 = info[i].sh_pic3;     
  //           const sh_info = info[i].sh_info; 
  //           const offer_pic = info[i].offer_pic; 
  //           const offer_text = info[i].offer_text; 
  //           const sh_admin = info[i].sh_admin; 
  //           const sh_admin_phone = info[i].sh_admin_phone; 
  //           Shop.insert({
  //             sh_id : sh_id,
  //             sh_name :sh_name,
  //             sh_phone :sh_phone,
  //             sh_address :sh_address,
  //             sh_type :sh_type,
  //             sh_pic1 :sh_pic1,
  //             sh_pic2 :sh_pic2,
  //             sh_pic3 :sh_pic3,
  //             sh_info :sh_info,
  //             offer_pic :offer_pic,
  //             offer_text :offer_text,
  //             sh_admin :sh_admin,
  //             sh_admin_phone :sh_admin_phone,
  //           });
  //     }
  //   });


});
