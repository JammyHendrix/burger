var orm = require('../Config/orm.js');

var burger = {
	all: function(cb){
		orm.all('burgers.js',function(res){
			cb(res);
		});
	},
	update: function(id,cb){
		orm.update('burgers.js',id,cb);
	},

	create: function(name,cb){
		orm.create('burgers.js', name, cb);
	}
};

module.exports = burger;