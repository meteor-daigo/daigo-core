Package.describe({
	summary: "The core package for Daigo. Required for other Daigo packages to work"
});

var both = ['client', 'server'];

Package.on_use(function (api) {
	api.use('deps', both);
	api.use('livedata', both);
	api.use('mongo-livedata', both);

	api.add_files('logs.js', both);
	api.add_files('daigo.js', both);
	api.add_files('client.js', 'client');

	if (typeof api.export !== 'undefined') {
		api.export(['Daigo', 'DaigoLogs'], both);
	}
});