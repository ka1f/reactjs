/* eslint-disable no-unused-vars */
import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username, password})
    }
  return (
    <div><h2>Login</h2>
    <input type="email" placeholder="email" 
    value={username}
    onChange={(e) => setUsername(e.target.value)} name="email" id="email"/>
    {"   "}
    <input type="password" placeholder="pass.." 
    value={password}
    onChange={(e) => setPassword(e.target.value)} name="password" id="password" />
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login