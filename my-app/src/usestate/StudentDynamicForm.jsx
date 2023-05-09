import React,{useState} from 'react'

function StudentDynamicForm(){
    const initialUserName = {
        UserName : "",
        Password : "",
        Designation : "",
         City : ""
    }

    const [UserName,setUserName] = useState(initialUserName)
    const [allUserNames,setallUserNames] = useState([])

    const StudentFormSubmit = (event)=>{
        event.preventDefault()
        console.log(UserName)
        setUserName(initialUserName)
        setallUserNames([...allUserNames,UserName])
    }
    const handleDynamicUserName = (event) =>{
        console.log(event.target.name,event.target.value)
        setUserName({
            ...UserName,
            [event.target.name] : event.target.value
        })
    }
    const DeleteUser = (Name)=>{
        const filtereddata = allUserNames.filter((item,index) => item.UserName !== Name)
        console.log("delete",Name)
        setallUserNames(filtereddata)
    }

    return(
        <div>
            <form onSubmit={StudentFormSubmit} >
            <div>
                <label htmlFor="UserName" >UserName:</label>
                <input type='text' id='UserName' name='UserName' value={UserName.UserName} onChange={handleDynamicUserName}></input>
            </div>
            <div>
                <label htmlFor="Password" >Password:</label>
                <input type='number' id='Password' name='Password' value={UserName.Password} onChange={handleDynamicUserName}></input>
            </div>
            <div>
            <label htmlFor="Designation" >Designation:</label>
                <select id='Designation' name='Designation' value={UserName.Designation} onChange={handleDynamicUserName} >
                <option value="" >Select</option>
                <option value="react js" >react js</option>
                <option value="Dotnet" >Dotnet</option>
                <option value="Azure" >Azure</option>
                </select>
            </div>
            <div>
            <label htmlFor="City">City:</label>
                <select id='City' name='City' value={UserName.City} onChange={handleDynamicUserName}>
                <option value="" >Select</option>
                <option value="AndhraPradesh" >AndhraPradesh</option>
                <option value="Banglore" >Banglore</option>
                <option value="Hyderabad" >Hyderabad</option>
                </select>
            </div>
            
          <input type='Submit' value='DataSubmit' ></input>
        </form>
            {allUserNames.map((item,index) =>
                                    <div>
                                    <h1>UserName : {item.UserName}</h1>
                                    
                                    <h2>Password : {item.Password} </h2>
                                    <h3>Designation : {item.Designation} </h3>
                                    <h4>City : {item.City} </h4>
                                    <button onClick={() => DeleteUser(item.UserName)} >Delete</button>
                                    </div> )}
        </div>
    )
}
export default StudentDynamicForm