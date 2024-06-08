import { useState } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls"
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
   // const {isFetching, dispatch} = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch,{ username, password });
    };    

    return (
        <div className='login'>
            <form className="loginForm">
                <input type="text" 
                placeholder="email" 
                className="loginInput" 
                onChange={(e) => setUsername(e.target.value)} 
                />
                <input type="password" 
                placeholder="password" 
                className="loginInput" 
                onChange={(e) => setPassword(e.target.value)} 
                />
                <button 
                className="loginButton" 
                onClick={handleLogin} 
               
                >
                    Login
                    </button>
            </form>
        </div>
    )
}

