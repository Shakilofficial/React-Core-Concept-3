import { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  //Password Validation state
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //condition for password validation
    if (password.length < 8) {
      setError("Password must be 8 Characters of longer");
    } else {
      setError("");
    }
    console.log(name, email, password);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="text" id="" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" id="" />
        <br />
        <input onChange={handlePasswordChange} type="password" name="" id="" />
        <br />
        <input type="submit" value="submit" />
        {error && <p>{error} </p>}
      </form>
    </div>
  );
};

export default StateFullForm;
