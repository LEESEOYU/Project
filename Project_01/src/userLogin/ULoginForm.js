import React,{useState} from 'react';

function ULoginForm({Login, error}){
    const[details, setDetails] = useState({ID:"", password:""});

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }

    return (
        <form className="uSubmit" onSubmit = {submitHandler}>
           
            <div className="uForm-inner">
                <div>
                 <h2 className="uTitle">Login</h2>
                </div>
                
                {(error !=="") ? ( <div className="uError">{error}</div>) : ""}
              
               <form className="uForm-group">
                <div className="ID">
                    <label htmlFor="ID">ID:</label>
                    <input className="uInput" type="text" name="ID" id="ID" onChange={e => setDetails({...details, ID: e.target.value})} value={details.ID}/>
                </div>
               
                <div className="password">
                    <label htmlFor="password">Password:</label>
                    <input className="uInput" type="password" name="Password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                
                <input className="uBtn" type="submit" value="LOGIN"/>
                </form>
            </div>
        </form>
    )
}

export default ULoginForm;