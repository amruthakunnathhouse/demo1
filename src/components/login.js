

  import React, { useState ,useRef }from 'react';

function Login() {
  const [validationerror,setValidationerror] = useState(false);
  const [errorname,setErrorname]=useState("");
  const username = useRef(null);
  const password=useRef(null);

  function internalvalidations(e){
    e.preventDefault();
    if (username.current.value==="" && password.current.value==="") {
      setValidationerror(true);setErrorname("username and password")} 
      else if(username.current.value==="")  {setValidationerror(true);setErrorname("username")} else
      {setValidationerror(true);setErrorname("password")} 
      

     
      return true; 
  }

  return (
    <section style={{width:`100%`}}>
    <div style={{maxWidth:`960px`,margin:`0 auto`,textAlign:`center`,padding:'10%'}}>
    <form>
         <input type="text" ref={username} placeholder="username" style={{margin:'3%'}}/><br/>
         <input type="password" ref={password} placeholder="password"/><br/>
        {validationerror &&  <p style={{color:'red',margin:'0'}}> Please enter {errorname} to proceed</p>}
         <button type="submit" style={{margin:'3%',background: 'rebeccapurple',color:'#fff'}} onClick={internalvalidations}> Details</button> 
         </form>
        </div>
        </section>
    
  )
}

Login.defaultProps = {

}



export default Login
