import { useState } from "react";
import {useCookies} from "react-cookie"

function Auth() {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPwd, setConfirmPwd] = useState(null);

console.log(email, password, confirmPwd);
console.log(cookies)

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status)
  }

  const handleSubmit = async (e, endpoint) =>{
    e.preventDefault();

    // const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    
    // if (!emailPattern.test(email)) {
    //     setError("Please enter a valid email address.");
    //     return;
    // }

    if(!isLogin && password !== confirmPwd){
      setError("Error, password does not match")
      return
    }
      try {
        const response = await fetch(`${process.env.REACT_APP_SEVERURL}/${endpoint}`,{
          method: "POST",
          headers: { "Content-Type" : "application/json"},
          body: JSON.stringify({email, password})
        });
        const data = await response.json();
    
        if(data.detail){
          setError(data.detail);
        }else{
          setCookie('Email', data.email)
          setCookie('AuthToken', data.token);
    
          window.location.reload();
        }
      } catch (error) {
        setError("Failed to connect to server. Please try again.");
      }
  }



    return (
      <div className="auth-container">
        <div className="auth-box">
            <form action="auth" className="auth-form" noValidate>

              <h1>{isLogin ? "Login" : "Sign up"}</h1>
              <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} required 
              />

              <input type="password" placeholder="Password" onChange={(e) => setPassword (e.target.value)}
              />

              {!isLogin && <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPwd(e.target.value)}/>}

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
  