import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const[username,setUsername] = useState('');
    const [password, setPassword]=useState('')
    
    const {setUser} = useContext(UserContext)   // yha se hume setUser ka access mil rha hai

    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({username,password});
    }
    // is tareeke se hum data bhej skte hai

  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={username}
        placeholder='username'
        onChange={(e)=> setUsername(e.target.value)}
        
        />
        <input type='text' value={password}
        placeholder='password'
        onChange={(e)=> setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login