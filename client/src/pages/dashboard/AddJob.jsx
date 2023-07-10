import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import { useAppContext } from "../../context/appContext";
import Alert from "../../components/Alert.jsx";
import FormRow from "../../components/FormRow.jsx";
import FormRowSelect from "../../components/FormRowSelect.jsx";
const Addjob = () => {
  const {
    isEditing,
    showAlert,
    position,
    company,
    jobLocation,
    displayAlert,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,handleChange,clearValues
  } = useAppContext();

  const handleSubmit = (e)=>{
e.preventDefault()
if(!position || !company||!jobLocation){
  displayAlert()
  return
}
console.log('create job');
  }
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
handleChange({name,value})
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/*location */}
          <FormRow
            type="text"
            name="jobLocation"
            labelText='job location'
            value={jobLocation}
            handleChange={handleJobInput}
          />

          {/* job status */}
<FormRowSelect name='status' value={status} handleChange={handleJobInput} list={statusOptions}/>
          {/* job type */}

          <FormRowSelect name='jobType' labelText='job type' value={jobType} handleChange={handleJobInput} list={jobTypeOptions}/>

{/* btn-container */}
          
          <div className="btn-container">
          <button className="btn btn-block clear-btn" onClick={(e)=>{
  e.preventDefault()
  clearValues()
}}>
clear
</button>
          <button type="submit" className="btn btn-block submit-btn" onClick={handleSubmit}>
            submit
          </button>

          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Addjob;
