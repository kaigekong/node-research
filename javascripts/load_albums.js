var http = require('http'),
	fs = require('fs');

// 第一种
/*function load_album_list(callback) {
	fs.readdir('../albums/',function (err,files) {
		if(err){
			callback(err);
			return;
		}
		callback(null,files);
	});
}*/

// 第二种 异步过滤无效
/*function load_album_list(callback) {
	fs.readdir('../albums/',function (err,files) {
		if(err){
			callback(err);
			return;
		}

		var only_dirs = [];

		for(var i = 0; i < files.length; i++){			
			fs.stat('../albums/' + files[i],function (err,stats) {
				console.log(i);
				if (stats.isDirectory()) {
					only_dirs.push(files[i]);
				}
			});
		}
		callback(null,only_dirs);
	});
}*/

/*// 第三种 异步过滤无效处理［串行］
function load_album_list(callback) {

	fs.readdir('../albums/',function (err,files) {
		if(err){
			callback(err);
			return;
		}

		var only_dirs = [];

		(function iterator(index) {
			if (index == files.length) {
				callback(null,only_dirs);
				return;
			}

			fs.stat('../albums/' + files[index],function (err,stats) {
				if (err) {

					callback(err);
					
					return;
				}
				debugger;
				if (stats.isDirectory()) {
					only_dirs.push(files[index]);
				}
				iterator(index + 1);
			});
		})(0);
	});
}*/

// 第四种 异步过滤无效处理［并行］
function load_album_list_compare(callback) {

	fs.readdir('../albums/',function (err,files) {
		if(err){
			callback(err);
			return;
		}

		var only_dirs = [],
			i = 0,
			len = files.length,
			count = 0,
			all = 0;
		
		console.time('parallel');
		console.time('serial');

		// parallel
		for(; i < len; i++){

			(function iterator(index) {
				
				fs.stat('../albums/' + files[index],function (err,stats) {

					if (err) {
						callback(err);
						return;
					}
					
					if (stats.isDirectory()) {
						only_dirs.push(files[index]);
					}

					if (++count == len) {
						console.timeEnd('parallel');
						compare(++all,only_dirs,callback);
					}
				});
			})(i);
		}

		// serial
		(function iterator(index) {
			if (index == files.length) {
				console.timeEnd('serial');
				
				compare(++all,only_dirs,callback);
				return;
			}

			fs.stat('../albums/' + files[index],function (err,stats) {
				if (err) {
					callback(err);
					return;
				}
				
				if (stats.isDirectory()) {
					only_dirs.push(files[index]);
				}
				iterator(index + 1);
			});
		})(0);
	});
}
// 比对函数
function compare(all,only_dirs,callback) {
	if (all == 2) {
		callback(only_dirs);
	}
}

function handle_incoming_request(req,res) {
	console.log('INCOMING REQUEST: ' + req.method + ' ' + req.url);

	load_album_list_compare(function (err,albums) {

		if (err) {
			res.writeHead(503,{'Content-Type':'application/json'});
			res.end(JSON.stringify(err) + '\n');
			return;
		}

		var out = {error:null,data:{albums:albums}};

		res.writeHead(200,{'Content-Type':'application/json'});
		res.end(JSON.stringify(out) + '\n');
	});
}

var s = http.createServer(handle_incoming_request);
s.listen(8080);



