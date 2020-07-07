module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
	
  const FollowSchema = new Schema({
		follower: { type: String, ref: 'User' }, //关注者信息
		beFollowed: { type: String, ref: 'User' }, //被关注的用户信息
		createDate: { type: Date, default: Date.now } //关注时间
		
  },{versionKey:false});
  return mongoose.model('Follow', FollowSchema, 'follows');
};