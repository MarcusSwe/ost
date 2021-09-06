import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext  } from "../../context/AuthContext";

export const Register = () => {

    const [user, setUser] = useState({username: "", password: ""});
    const { setIsAuth, setActiveUser } = useContext(AuthContext);
    const history = useHistory();

    const changeUserData = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const registerUser = (e) => {
        e.preventDefault();       
        setIsAuth(true);
        setActiveUser(user);
        history.push("/");
    }
    
    return (
      
            <div className="loginDiv">                           
                <form onSubmit = {registerUser}>
                    <h4>New Account</h4>
                    <p>Input new username and password to create new user account.</p>
                    <label for="login-usenamer">Username  </label>
                    <input type="text" name="username" placeholder="Username" className="new-username" onChange={changeUserData} />
                    <label for="login-password">  Password  </label>
                    <input type="password" name="password" placeholder="Password" className="login-password" onChange={changeUserData} />
                    <button type="submit" className="new-user"> Create </button>
                </form>    
            </div>
    )
}
