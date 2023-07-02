const createJob = async (req, res) => {
  res.send('createJob');
};
const getAllJobs = async (req, res) => {
  res.send('get All Job');
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