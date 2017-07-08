 //import { FlowRouter } from 'meteor';
// import { BlazeLayout } from 'meteor/BlazeLayout';

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

