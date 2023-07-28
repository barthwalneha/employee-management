import { useEffect, useState } from "react"
import service from "../service/BackendApi"





const EmployeeList = ()=>{
    const [employeeList,setEmployeeList] = useState([])

    const getAllEmployee = () =>{
        service.getAllEmployeeList()
        .then( 
            (res) => setEmployeeList(res.data)
            );
    }
    const deleteEmp = (id) =>{
        service.delete(id).then(
            (res ) => {
                getAllEmployee();
            }
        )
    }

    useEffect(getAllEmployee,[])

    
    return(<table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Qualification</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      employeeList.map(  emp => (<tr>
                                <th scope="row">{emp.id}</th>
                                <td>{emp.name}</td>
                                <td>{emp.age}</td>
                                <td>{emp.qualification}</td>
                                <td><button onClick= {() => deleteEmp(emp.id)}className="btn btn-sm btn-primary">Delete Emp ID {emp.id}</button></td>
                                </tr>)
                      )
                    }
                    
                </tbody>
                </table>
    )
}
export default EmployeeList