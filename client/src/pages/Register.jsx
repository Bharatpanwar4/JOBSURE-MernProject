import { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import {useAppContext} from "../context/appContext.js"
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  //global state and useNavigate

  const {isLoading,showAlert,displayAlert,registerUser}=useAppContext()


  const toggleMember = ()=>{
    setValues({...values,isMember:!values.isMember})
  }
  const handleChange = (e) => {
    setValues({...values,[e.target.name]:e.target.value})
  };
  const onSubmit = (e) => {
    e.preventDefault()
    const {name,email,password,isMember}=values
    if(!email || !password || (!isMember && !name)){
      displayAlert()
      return   
    
    }
    const currentUser = {name,email,password}
    if(isMember){
      console.log('already a member');
    }
    else
    {
      registerUser(currentUser)
    }
    console.log(values)
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember?'Login':'Register'}</h3>
        {showAlert && <Alert/>}
        {/* name input */}
        {!values.isMember && 
        (
          <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
        )}
        
           {/* email input */}
           <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
           {/* password input */}
           <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit{" "}
        </button>
        <p>
        {values.isMember?'Not a member yet?':'Already a member?'}
          <button type="button" className="member-btn" onClick={toggleMember}>
{values.isMember?'Register':'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
