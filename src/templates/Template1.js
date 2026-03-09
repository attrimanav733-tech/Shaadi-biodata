function Template1({data}){

return(

<div className="template">

{data.photo && <img src={data.photo} width="120" alt="profile" />}

<h2>{data.name}</h2>

<p>Age : {data.age}</p>
<p>Height : {data.height}</p>

<p>Father : {data.father}</p>
<p>Mother : {data.mother}</p>

<p>Education : {data.education}</p>
<p>Profession : {data.profession}</p>

<p>Rashi : {data.rashi}</p>

</div>

)

}

export default Template1