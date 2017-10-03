import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Temp_Shop } from '../lib/collections';

FlowRouter.route('/home', {
    name:'home',
    action() {
        BlazeLayout.render('home');
    }
});

FlowRouter.route('/announce', {
    name:'announce',
    action() {
        BlazeLayout.render('announce');
    }
});

FlowRouter.route('/basicinfo', {
    name:'basicinfo',
    action() {
        BlazeLayout.render('basicinfo');
    }
});

FlowRouter.route('/privacy', {
    name:'privacy',
    action() {
        BlazeLayout.render('privacy');
    }
});

FlowRouter.route('/advertise', {
    name:'advertise',
    action() {
        BlazeLayout.render('advertise');
    }
});


FlowRouter.route('/login', {
    name:'log',
    action() {
        BlazeLayout.render('log');
    }
});

FlowRouter.route('/signin', {
    name:'signin',
    action() {
        BlazeLayout.render('signin');
    }
});

FlowRouter.route('/verify/:sh_id', {
    name:'verify',
    action: function(params) {
        console.log(params.sh_id);
        //var my_tsh = Temp_Shop.find();
        var par_id=params.sh_id;
        //console.log(my_tsh);
        BlazeLayout.render('verify',{par_id});
    }
});

FlowRouter.route('/pic', {
    name:'verify',
    action: function() {
        BlazeLayout.render('pic');
    }
});

FlowRouter.route('/finish', {
    name:'finish',
    action: function() {
        BlazeLayout.render('finish');
    }
});

FlowRouter.route('/mypic', {
    name:'mypic',
    action: function() {
        BlazeLayout.render('mypic');
    }
});

FlowRouter.route('/scanner', {
    name:'scanner',
    action: function() {
        BlazeLayout.render('scanner');
    }
});

FlowRouter.route('/prize', {
    name:'prize',
    action: function() {
        BlazeLayout.render('prize');
    }
});

FlowRouter.route('/alluser', {
    name:'alluser',
    action: function() {
        BlazeLayout.render('alluser');
    }
});

FlowRouter.route('/userprize/:mb_id', {
    name:'userprize',
    action: function(params) {
        const mb_id = params.mb_id
        BlazeLayout.render('userprize',{mb_id});
    }
});