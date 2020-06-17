'use strict';

const Controller = require('egg').Controller;

const fs = require('fs');
const path = require('path');
//故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
//管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');
const dayjs = require('dayjs');

class fileController extends Controller {

	// 上传文件
	async uploadFile() {
		const stream = await this.ctx.getFileStream();
		console.log('-----------获取数据 start--------------');
		console.log(stream.fields);
		console.log('-----------获取数据 end--------------');
		// 基础的目录
		const uplaodBasePath = 'app/public/uploads';
		// 生成文件名
		const filename =
			`${Date.now()}${Number.parseInt(
	      Math.random() * 1000,
	    )}${path.extname(stream.filename).toLocaleLowerCase()}`;
		// 生成文件夹
		const dirname = dayjs(Date.now()).format('YYYY/MM/DD');

		function mkdirsSync(dirname) {
			if (fs.existsSync(dirname)) {
				return true;
			} else {
				if (mkdirsSync(path.dirname(dirname))) {
					fs.mkdirSync(dirname);
					return true;
				}
			}
		}
		mkdirsSync(path.join(uplaodBasePath, dirname));
		// 生成写入路径
		const target = path.join(uplaodBasePath, dirname, filename);
		// 写入流
		const writeStream = fs.createWriteStream(target);
		try {
			//异步把文件流 写入
			await awaitWriteStream(stream.pipe(writeStream));
		} catch (err) {
			//如果出现错误，关闭管道
			await sendToWormhole(stream);
			this.ctx.body = '写入文件错误，关闭管道';
		}
		console.log(uplaodBasePath)
		this.ctx.body = {
			data: 'http://127.0.0.1:7001/public/uploads/' + dirname + '/' + filename
		};


	}

}

module.exports = fileController;
