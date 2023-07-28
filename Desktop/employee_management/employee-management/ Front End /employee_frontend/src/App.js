import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [flag,setFlag] = useState(true);


  return (
    <>
        <div className='conatiner text-center'>
           <h3> Employee Management System</h3>
        </div>
        
        <div className='container mb-1'>
          <div className='btn-group btn-group-lg'>
            <button onClick={() => setFlag(true)} className="btn btn-primary">Add Employee </button>
            <button onClick={() => setFlag(false)} className="btn btn-primary">Show Employees</button>
          </div>
        </div>
        {
          flag && <div className="container  ">

              <EmployeeForm/>
        </div>}

        { !flag && <div className="container  ">
            <EmployeeList/>
          </div>}


    </>
  );
}

export default App;
