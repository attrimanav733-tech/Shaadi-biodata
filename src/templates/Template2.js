function Template2({ data }) {

return (

<div className="template" style={{
border:"2px dashed #ff4d6d",
padding:"20px",
borderRadius:"10px"
}}>

{data.photo && (
<img src={data.photo} width="120" alt="profile"/>
)}

<h2>{data.name}</h2>

<hr/>

<h3>Personal Details</h3>

<p>Age : {data.age}</p>
<p>Height : {data.height}</p>

<h3>Family Details</h3>

<p>Father : {data.father}</p>
<p>Mother : {data.mother}</p>

<h3>Education & Career</h3>

<p>Education : {data.education}</p>
<p>Profession : {data.profession}</p>

<h3>Horoscope</h3>

<p>Rashi : {data.rashi}</p>

</div>

)

}

export default Template2