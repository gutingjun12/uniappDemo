module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
	
  const FollowSchema = new Schema({
		userId: { type: String },
		followedUserId: { type: String },
		createDate: { type: Date, default: Date.now }
		
  },{versionKey:false});
  return mongoose.model('Follow', FollowSchema, 'follows');
};