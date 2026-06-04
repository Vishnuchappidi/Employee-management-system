import React,{useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
const ListEmployeeComponent = () => {
    const [employees,setEmployees]=useState([])
    const navigator=useNavigate();
    useEffect(()=>{
        getAllEmployees();
    },[])
    function getAllEmployees(){
    listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }
    function addNewEmployee(){
        navigator('/add-employee')
    }
    function updateEmployee(id){
        navigator(`/edit-employee/${id}`);
    }
    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then((response)=>{
            getAllEmployees();
    }).catch(error=>{
        console.error(error);
    })
    }
    return (
        <div className="container mt-5">
      
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="fw-bold">Employee Management</h1>
              <p className="text-muted">Manage your employees efficiently</p>
            </div>
      
            <button
              className="btn btn-primary btn-lg"
              onClick={addNewEmployee}
            >
              + Add Employee
            </button>
          </div>
      
          <div className="card shadow-lg border-0">
              <div className="card-body">
                  <div className="table-responsive">
                  <table className="table table-hover align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
      
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.email}</td>
      
                      <td className="text-center">
                      <button className="btn btn-warning btn-sm me-2">
                          <i className="bi bi-pencil-square"></i>
                             </button>
                             <button className="btn btn-danger btn-sm">
                                   <i className="bi bi-trash"></i>
                               </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
      
              </table>
               </div>
            </div>
          </div>
      
        </div>
      )
}

export default ListEmployeeComponent