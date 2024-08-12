import { useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState(null)

  const viewLogin = (e) => {
    setError(null);
    setIsLogin(e)
  }
    return (
      <div className="auth-container">
        <div className="auth-box">
            <form action="auth">
              <h1>{isLogin ? "Login" : "Sign up"}</h1>
              <input type="email" placeholder="Email address"/>
              <input type="password" placeholder="Password"/>
              {!isLogin && <input type="password" placeholder="Confirm Password"/>}
              <input type="submit" className="create"/>
              {error && <p>{error}</p>}
            </form>
            <div className="auth-option">
              <button onClick={() => viewLogin(false)} style={{backgroundColor : !isLogin ? "white" : "gray"}}>Sign Up</button>
              <button onClick={() => viewLogin(true)} style={{backgroundColor : isLogin ? "white" : "gray"}}>Login</button>
            </div>
        </div>
        
      </div>
    );
  }
  
  
  export default Auth;
  