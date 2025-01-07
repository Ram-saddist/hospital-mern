import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [doctors,setDoctors]=useState([])
    useEffect(()=>{
        fetchDoctors()
    },[])
    async function fetchDoctors(){
        await axios.get("http://localhost:4000/api/patients/doctors")
            .then((res)=>{
                setDoctors(res.doctors)
            })
            .catch((e)=>{
                alert("error while fetching")
            })
    }
    return (
        <div>
            from home
        </div>
    )
}
