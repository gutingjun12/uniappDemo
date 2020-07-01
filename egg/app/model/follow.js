module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
	
  const FollowSchema = new Schema({
		user: { type: String, ref: 'User' }, //操作者信息
		followedUser: { type: String, ref: 'User' }, //被关注的用户信息
		createDate: { type: Date, default: Date.now } //关注时间
		
  },{versionKey:false});
  return mongoose.model('Follow', FollowSchema, 'follows');
};