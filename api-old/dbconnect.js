var mysql=require('mysql');
var connection=mysql.createPool({

	host:'localhost:8889',
	user:'root',
	password:'root',
	database:'nhl_draft_tool'

});
module.exports=connection;