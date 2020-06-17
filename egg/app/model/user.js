module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
	
  const UserSchema = new Schema({
    name: { type: String },
    sex: { type: Number, default: 0 },
		area:{ type: String, default: '' },
		phone: { type: String, required: true },
		avatar: {type: String, default: 'http://127.0.0.1:7001/public/avatar.jpg'},
		fans: {type: Number, default: 0},
		follow: {type:Number, default: 0},
		likedAndCollected: {type: Number, default: 0}
  },{versionKey:false});
	
  return mongoose.model('User', UserSchema, 'users');
};