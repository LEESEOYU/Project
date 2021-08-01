import React, {useState} from 'react';
import ULoginForm from "./ULoginForm";
import "./ULogin.css";

function UApps(){
  const adminUser= {
    ID:"admin",
    password: "admin12345"
  }

  const [user, setUser] = useState({ID:"", password:""});
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);

    if(details.password === adminUser.password && details.ID === adminUser.ID){
      console.log("Logged in");
      setUser({
        ID: details.ID
      });
    } else {
      console.log("아이디 또는 비밀번호가 맞지않습니다.");
      setError("아이디 또는 비밀번호가 맞지않습니다.");
    }
  }
 
  const Logout = () =>{
    setUser({ID:"", password:""});
  }

  return (
    <div className="uApp">
      {(user.ID !=="") ? (
        <div className="Welcome">
          <h2>Welcome, <span>{user.ID}</span></h2>
          <button onClick = {Logout}>Logout</button>
          </div>
      ): (
        <ULoginForm Login={Login} error={error}/>
      )}
    </div>
  );
};



export default UApps;

