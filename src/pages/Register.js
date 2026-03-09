import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../App.css"

function Register(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleRegister = ()=>{

if(!name || !email || !password){
alert("Please fill all fields")
return
}

const user = {name,email,password}

localStorage.setItem("user", JSON.stringify(user))

alert("Registration Successful")

navigate("/")
}

return(

<div className="auth-container">

<div className="auth-card">

<h2>Register</h2>

<input 
type="text"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

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

<button onClick={handleRegister}>
Register
</button>

<p onClick={()=>navigate("/")}>
Back to Login
</p>

</div>

</div>

)
}

export default Register