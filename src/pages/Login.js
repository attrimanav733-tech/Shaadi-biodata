import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../App.css"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = ()=>{

const user = JSON.parse(localStorage.getItem("user"))

if(!email || !password){
alert("Please fill all fields")
return
}

if(!user){
alert("Please register first")
return
}

if(user.email === email && user.password === password){
navigate("/dashboard")
}else{
alert("Invalid email or password")
}

}

return(

<div className="auth-container">

<div className="auth-card">

<h1 className="app-title">Welcome to ShaadiBio</h1>
<p className="app-subtitle">Marriage BioData Generator</p>

<h2>Login</h2>

<input 
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input 
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

<p onClick={()=>navigate("/register")}>
Create Account
</p>

</div>

</div>

)

}

export default Login