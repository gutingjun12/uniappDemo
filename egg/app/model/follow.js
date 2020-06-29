module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
	
  const FollowSchema = new Schema({
		userId: { type: String }, //操作者id
		followedUserId: { type: String }, //被关注的用户id
		createDate: { type: Date, default: Date.now } //关注时间
		
  },{versionKey:false});
  return mongoose.model('Follow', FollowSchema, 'follows');
};