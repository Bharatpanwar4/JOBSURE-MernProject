import Job from '../models/Job.js'
import BadRequestError from "../errors/bad-request.js";
import UnAuthenticatedError from "../errors/unauthenticated.js";
const createJob = async (req, res) => {
  const {position,company}=req.body
if(!position||!company){
  throw new BadRequestError('Please provide all values')
 
}  
req.body.createdBy = req.user.userId
const job  = await Job.create(req.body)
res.status(201).json({ job })
};


const getAllJobs = async (req, res) => {
 const jobs  =await Job.find({createdBy:req.user.userId})
 res.status(200).json({jobs,totalJobs:jobs.length,numOfPages:1})
};
const updateJob = async (req, res) => {
  res.send('updateJob');
};
const deleteJob = async (req, res) => {
  res.send('delete Job');
};
const showStats = async (req, res) => {
  res.send('show Stats');
};


export {createJob,getAllJobs,updateJob,deleteJob,showStats}