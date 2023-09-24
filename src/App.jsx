import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StateFullForm from './components/StatefulForm/StateFullForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("Sign up data", data);
  };
  const handleUpdateProfile = (data) => {
    console.log("Update profile data", data);
  };

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h3>Sign Up</h3>
          <p>Please Sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText="Update"
      >
        <div>
          <h3>Update Profile</h3>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
