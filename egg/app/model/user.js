module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
	
  const UserSchema = new Schema({
    name: { type: String }, //用户名
    sex: { type: Number, default: 0 }, //性别
		area:{ type: String, default: '' }, //地区
		phone: { type: String, required: true }, //手机
		avatar: {type: String, default: 'http://127.0.0.1:7001/public/avatar.jpg'}, //头像
		fans: {type: Number, default: 0}, //粉丝数
		follow: {type:Number, default: 0}, //关注人数
		likedAndCollected: {type: Number, default: 0} //收到的点赞和收藏数量
  },{versionKey:false});
	
  return mongoose.model('User', UserSchema, 'users');
};