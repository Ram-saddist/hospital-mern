import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    function loginForm(e){
        e.preventDefault()
        axios.post("http://localhost:4000/api/patients/login",{email,password})
            .then((res)=>{
                console.log(res)
                if(res.status===200){
                    alert("Login Successful")
                    localStorage.setItem("patientId",res.data.patientid)
                    navigate("/")
                }
            })
            .catch((error)=>{
                console.log(error)
                if(error.status===404){
                    alert("User not found")
                }
                else if(error.status===400){
                    alert("Invalid Password")
                }
            })
    }
    return (
        <div className='container'>
            <div className="row">
                <form className='col-5' onSubmit={loginForm}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
