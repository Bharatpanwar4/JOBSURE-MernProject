import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"
const UserSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 25,
    trim: true,
  },
  email: { 
    type:String,
    required: [true, "Please provide email"],
    validate:{
        validator:validator.isEmail,
        message:'Please provide a valid email',
    },
    unique: true,
  },
  password: {
    type:String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  lastName: { type:String, maxlength: 20, trim: true, default: "LastName" },
  location: {
    type:String,
    required: [true, "Please provide name"],
    maxlength: 20,
    default: "my city",
  },
});
UserSchema.pre('save',async function(){
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
})

UserSchema.methods.createJWT = function(){
  console.log(this)
}

export default mongoose.model('User', UserSchema)