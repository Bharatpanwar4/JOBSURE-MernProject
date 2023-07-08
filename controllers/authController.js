import User from "../models/User.js"

import BadRequestError from "../errors/bad-request.js"
import UnAuthenticatedError from "../errors/unauthenticated.js"



const register = async (req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password){
        throw new BadRequestError('please provide all the value')
    }
    const userAlreadyExists = await User.findOne({email})
    if(userAlreadyExists){
        throw new BadRequestError('Email already in use')
    }

    const user= await User.create({name,email,password})
   const token= user.createJWT()
    res.status(201).json({user:{
        email:user.email,
        lastName:user.lastName,
        location:user.location,
        name:user.name,
    },token})
}
const login = async (req,res)=>{
  const {email,password}= req.body;
  if(!email || !password){
    throw new BadRequestError('Please provide all values')
  }
  const user = await User.findOne({email}).select("+password")
  if(!user){
    throw new UnAuthenticatedError('Invalid Credentials')
  }
  
  const isPasswordCorrect =await user.comparePassword(password)
  if(!isPasswordCorrect){
    throw new UnAuthenticatedError('Invalid Credentials')
  }
  const token =  user.createJWT()
  user.password = undefined
  res.status(200).json({user,token,location:user.location})
  console.log(user);
}
const updateUser = async (req,res)=>{
  console.log(req.user);
    res.send('updateUser user')
}


export {register,login,updateUser}