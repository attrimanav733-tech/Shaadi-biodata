import { useState } from "react";
import "../App.css";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";

function Dashboard(){

const [formData,setFormData] = useState({})
const [template,setTemplate] = useState("1")

const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
}

const calculateAge=(dob)=>{
const birthDate = new Date(dob)
const today = new Date()

let age = today.getFullYear() - birthDate.getFullYear()

return age
}

const handleDOB=(e)=>{
const dob = e.target.value
const age = calculateAge(dob)

setFormData({...formData,dob:dob,age:age})
}

const handlePhoto=(e)=>{
const file = e.target.files[0]
setFormData({...formData,photo:URL.createObjectURL(file)})
}

return(

<div className="dashboard-container">

<div className="form-section">

<h2>Personal Details</h2>

<input name="name" placeholder="Name" onChange={handleChange}/>

<input type="date" onChange={handleDOB}/>

<input value={formData.age || ""} placeholder="Age" readOnly/>

<input name="height" placeholder="Height" onChange={handleChange}/>

<h2>Family Details</h2>

<input name="father" placeholder="Father Name" onChange={handleChange}/>

<input name="mother" placeholder="Mother Name" onChange={handleChange}/>

<h2>Education</h2>

<input name="education" placeholder="Education" onChange={handleChange}/>

<input name="profession" placeholder="Profession" onChange={handleChange}/>

<h2>Horoscope</h2>

<input name="rashi" placeholder="Rashi" onChange={handleChange}/>

<h2>Upload Photo</h2>

<input type="file" onChange={handlePhoto}/>

<h2>Template</h2>

<button className="template-btn" onClick={()=>setTemplate("1")}>
Template 1
</button>

<button className="template-btn" onClick={()=>setTemplate("2")}>
Template 2
</button>

</div>

<div className="preview-section">

<h2>Live Preview</h2>

{template==="1"
?<Template1 data={formData}/>
:<Template2 data={formData}/>
}

</div>

</div>

)
}

export default Dashboard