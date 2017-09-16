import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

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
        var a=params.sh_id;
        BlazeLayout.render('verify',{a});
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