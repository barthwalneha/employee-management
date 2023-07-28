import {useState} from "react"
import service from "../service/BackendApi"
import { Alert } from "react-bootstrap"
const EmployeeForm = ()=>{

    const [name,setName] = useState(undefined)
    const [qualification,setQualification] = useState(undefined)
    const [age,setAge] = useState(undefined)
    const [savedUser, setSavedUser] = useState(undefined)

    const updateName = (event) =>{
        console.log(event)
        setName(event.target.value)
    }

    const updateAge = (event) => {
        console.log(event)
        setAge(event.target.value)
    }
    
    const updateQualification =(event) => {
        console.log(event)
        setQualification(event.target.value)
    }
    const addEmployeeDeatils = () =>{
        console.log("clicked");
       const emp = {
        name : name,
        age: age,
        qualification : qualification
       }
       service.save(emp)
       .then( (res) => setSavedUser(res.data), (error) => setSavedUser(null))
    }

    return(
        <div class="alert alert-primary ml-10 row g-15" role="alert">
        <form>
            <div className="form-group ">
                <label for="name">Name</label>
                <input 
                type="name"  onChange={updateName}
                className="form-control" id="name" value={name} aria-describedby="Name" placeholder="Enter Your Name"/>
                <small id="nameHelp" className="form-text text-muted">Please enter your full name</small>
            </div>
            <div className="form-group ">
                <label for="age">Age</label>
                <input type="number"  onChange={updateAge}  className="form-control" id="age" placeholder="Age" max = "60" min="18"/>
            </div>
            <div className="form-group">
            <label className="form-check-label" for="qualification"> Highest Education</label>
            <select  className="form-control" onChange={updateQualification} id="qualification">
                <option selected></option>
                <option>M.Tech</option>
                <option>B.Tech</option>
                <option>BBA</option>
                <option>MBA</option>
                <option>BA</option>
            </select>
            </div>


            <div type="submit" onClick={addEmployeeDeatils}  className="btn btn-info mt-2   ">Add New Employ</div>
            { savedUser ? <label className="success">Employ created with {savedUser.id}</label> : null}
        </form>
        </div>
        


    );
}
export default EmployeeForm