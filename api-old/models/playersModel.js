var db=require('../dbconnection');
 
var Player={
	getAllPlayers:function(callback){
		return db.query("Select * from players",callback);
	},
	getPlayerById:function(id,callback){
		return db.query("select * from players where PlayerId=?",[id],callback);
	},
	addPlayer:function(Task,callback){
		return db.query("Insert into players values(?,?,?)",[Player.PlayerId,Player.LastName,Player.firstName],callback);
	},
	deletePLayer:function(id,callback){
		return db.query("delete from player where PlayerId=?",[id],callback);
	},
	updatePlayer:function(id,Task,callback){
		return db.query("update player set LastName=?,FirstName=? where Id=?",[Player.LastName,Player.firstName,id],callback);
	} 
};
 module.exports=Player;