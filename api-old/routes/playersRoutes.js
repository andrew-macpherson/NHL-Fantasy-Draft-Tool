var express = require('express');
var router = express.Router();
var Player=require('../models/playersModel');
 
router.get('/:PlayerId?',function(req,res,next){
  if(req.params.PlayerId){
    Player.getPlayerById(req.params.PlayerId,function(err,rows){
      if(err){
        res.json(err);
      }else{
        res.json(rows);
      }
    });
  }else{
    Player.getAllPlayers(function(err,rows){
      if(err){
        res.json(err);
      }else{
        res.json(rows);
      }
    });
  }
});

router.post('/',function(req,res,next){
  Player.addPlayer(req.body,function(err,count){
    if(err){
      res.json(err);
    }else{
      res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    }
  });
});

router.delete('/:PlayerId',function(req,res,next){
  Player.deletePlayer(req.params.PlayerId,function(err,count){
    if(err){
      res.json(err);
    }else{
      res.json(count);
    }
  });
});


router.put('/:PlayerId',function(req,res,next){ 
  Player.updatePlayer(req.params.PlayerId,req.body,function(err,rows){
    if(err){
      res.json(err);
    }else{
      res.json(rows);
    }
  });
});
 module.exports=router;