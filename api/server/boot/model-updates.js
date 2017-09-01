module.exports = function(app) {

/// UPDATE ALL DATABASE TABLES TO DB 

	app.dataSources.nhl_draft_tool.autoupdate('User', function(err) {
		if (err) throw err;
	});

	app.dataSources.nhl_draft_tool.autoupdate('AccessToken', function(err) {
		if (err) throw err;
	});

	app.dataSources.nhl_draft_tool.autoupdate('ACL', function(err) {
		if (err) throw err;
	});

	app.dataSources.nhl_draft_tool.autoupdate('RoleMapping', function(err) {
		if (err) throw err;
	});

	app.dataSources.nhl_draft_tool.autoupdate('Role', function(err) {
		if (err) throw err;
	});

/*
	app.dataSources.rightfit.autoupdate('Player', function(err) {
		if (err) throw err;
	});
*/

};