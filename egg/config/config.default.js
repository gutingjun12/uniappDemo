/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1591081329092_6030';

	// add your middleware config here
	config.middleware = [];

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	// 关闭csrf
	config.security = {
		csrf: {
			enable: false,
			ignoreJSON: true,
		},
		// 白名单
		domainWhiteList: ['http://localhost:8080'],
	};
	
	// 允许规则
	config.cors = {
	  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
	};
	
	//配置上传
	config.multipart = {
	  fileSize: '50mb',
	  mode: 'stream',
	  fileExtensions: ['.xls', '.txt'], // 扩展几种上传的文件格式
	};

	// 连接mongodb的配置
	config.mongoose = {
		client: {
			url: 'mongodb://127.0.0.1/xiaohongshu',
			options: {

			},
		},
	};


	return {
		...config,
		...userConfig,
	};
};
