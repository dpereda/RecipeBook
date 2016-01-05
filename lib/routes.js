FlowRouter.route('/', {
	name: 'home',
	action: function() {
		BlazeLayout.render('HomeLayout');
	}
});
FlowRouter.route('/test', {
	name: 'test',
	action: function() {
		BlazeLayout.render('MainLayout', {main: 'Test'});
	}
});