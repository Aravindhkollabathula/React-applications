import React, {useState} from 'react'

function StudentForm(){
    const [UserName,setUserName] = useState("")
    const [Password,setPassword] = useState("")
    const [Designation,setDesignation] = useState("")
    const [City,setCity] = useState("")

    const handleUserName =(event)=>{
        setUserName(event.target.value)
    }

    const handlePassword =(event)=>{
        setPassword(event.target.value)
    }
    const handleDesignation = (event)=>{
        setDesignation(event.target.value)
    }
    const handleCity = (event)=>{
        setCity(event.target.value)
    }
    const StudentFormSubmit = (event)=>{
        event.preventDefault()
        console.log({
            UserName : UserName,
            Password : Password,
            Designition : Designation,
             City : City
        })
        setUserName("")
        setPassword("")
        setDesignation("")
        setCity("")
    }
    return(
        <form onSubmit={StudentFormSubmit} >
            <div>
                <label htmlFor="UserName" >UserName:</label>
                <input type='text' id='UserName' name='UserName' value={UserName} onChange={handleUserName}></input>
            </div>
            <div>
                <label htmlFor="Password" >Password:</label>
                <input type='number' id='Password' name='Password' value={Password} onChange={handlePassword}></input>
            </div>
            <div>
            <label htmlFor="Designation" >Designition:</label>
                <select id='Designation' name='Designation' value={Designation} onChange={handleDesignation} >
                <option value="" >Select</option>
                <option value="react js" >react js</option>
                <option value="Dotnet" >Dotnet</option>
                <option value="Azure" >Azure</option>
                </select>
            </div>
            <div>
            <label htmlFor="City">City:</label>
                <select id='City' name='City' value={City} onChange={handleCity}>
                <option value="" >Select</option>
                <option value="AndhraPradesh" >AndhraPradesh</option>
                <option value="Banglore" >Banglore</option>
                <option value="Hyderabad" >Hyderabad</option>
                </select>
            </div>
            
          <input type='Submit' value='DataSubmit' ></input>
        </form>
    )
}
export default StudentForm