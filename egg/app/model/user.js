module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
	
  const UserSchema = new Schema({
    name: { type: String },
    sex: { type: Number },
		age: { type: String },
		phone: { type: String },
		avatar: {type: String},
		fans: {type: Number},
		follow: {type:Number}
  },{versionKey:false});
  return mongoose.model('User', UserSchema, 'users');
};