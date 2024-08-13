import { useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPwd, setConfirmPwd] = useState(null);

  const viewLogin = (e) => {
    setError(null);
    setIsLogin(e)
  }

  const handleSubmit = async (e, endpoint) =>{
    e.preventDefault();
    if(!isLogin && password !== confirmPwd){
      return setError("Error")
    }
    await fetch(`${process.env.REACT_APP_SEVERURL}/${endpoint}`)
  }




    return (
      <div className="auth-container">
        <div className="auth-box">
            <form action="auth" className="auth-form">
              <h1>{isLogin ? "Login" : "Sign up"}</h1>
              <input type="email" placeholder="Email address"/>
              <input type="password" placeholder="Password"/>
              {!isLogin && <input type="password" placeholder="Confirm Password"/>}
              <input type="submit" className="create" onClick={(e) => handleSubmit(e, isLogin ? "login" : "signup")}/>
              {error && <p>{error}</p>}
            </form>
            <div className="auth-option">
              <button onClick={() => viewLogin(false)} style={{backgroundColor : !isLogin ? "white" : "rgb(74, 165, 135)", color: !isLogin ? "#333" : "white"}}>Sign Up</button>
              <button onClick={() => viewLogin(true)} style={{backgroundColor : isLogin ? "white" : "rgb(74, 165, 135)", color: !isLogin ? "white" : "#333"}}>Login</button>
            </div>
        </div>
        
      </div>
    );
  }
  
  
  export default Auth;
  