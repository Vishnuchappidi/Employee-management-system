import React, { useState,useEffect } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate,useParams } from 'react-router-dom'


const EmployeeComponent = () => {
   const [firstName,setFirstName]= useState('')
   const [lastName,setLastName]=useState('')
   const [email,setEmail]=useState('')
   const {id}=useParams();
  const [errors,setErrors]= useState({
    firstName:'',
    lastName:'',
    email:''
   })
   const navigator=useNavigate();
   useEffect(()=>{
         if(id){
            getEmployee(id).then((response)=>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            }).catch(error=>{
            console.error(error);
            })
         }
   },[id])
   function saveOrUpdateEmployee(e){
    e.preventDefault();
    if(validateForm()){
        const employee={firstName,lastName,email}
    console.log(employee)
        if(id){
            updateEmployee(id,employee).then((response)=>{
                console.log(response.data);
                navigator('/employees');
            }).catch(error=>{
                console.error(error);
            })
        }else{
    createEmployee(employee).then((response) => {
        console.log(response.data);
        navigator('/employees')
    })
    }  
   }
}
   function validateForm(){
    let valid=true;
    const errorsCopy={...errors}
    if(firstName.trim()){
        errorsCopy.firstName='';
    }
    else{
        errorsCopy.firstName='First Name is Required';
        valid=false;
    }
    if(lastName.trim()){
        errorsCopy.lastName='';
    }
    else{
        errorsCopy.lastName='Last Name is Required';
        valid=false;
    }

    if(email.trim()){
       errorsCopy.email='';
      }
    else{
        errorsCopy.email='Email is Required';
         valid=false;
    }
    setErrors(errorsCopy);
    return valid;
   }
   function pageTitle(){
      if(id){
        return  <h2 className='text-center'>Update Employee</h2>
      }
      else{
        return <h2 className='text-center'>Add Employee</h2>
      }
   }
   return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
  
              <h2 className="text-center fw-bold mb-4">
                {id ? "Update Employee" : "Add Employee"}
              </h2>
  
              <form onSubmit={saveOrUpdateEmployee}>
  
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control form-control-lg"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
  
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control form-control-lg"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
  
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    className="form-control form-control-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
  
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                >
                  Save Employee
                </button>
  
              </form>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent