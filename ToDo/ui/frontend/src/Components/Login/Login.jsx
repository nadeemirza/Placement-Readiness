import react from "react"
import "./login.css"
const Login=()=>{
    return(
        <div className="login-conatiner" >
            <div className="login-box">
                <div className="field">
                    <h3>Member Login</h3>
                </div>
                <div className="field">
                    <input type="email" placeholder="Enter the email"></input>
                </div>
                <div className="field"></div>
                    <input type="password" placeholder="Enter the password"></input>
                <div className="field">
                    <button>Login</button>
                </div>
                <div className="field">
                    <a><p>Forgot password ?</p></a>
                </div>
            </div>
        </div>
    )
}

export default Login