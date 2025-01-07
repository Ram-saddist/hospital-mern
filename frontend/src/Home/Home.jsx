import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetchDoctors()
    }, [])
    async function fetchDoctors() {
        await axios.get("http://localhost:4000/api/patients/doctors")
            .then((res) => {
                console.log(res.data)
                setDoctors(res.data)
            })
            .catch((e) => {
                alert("error while fetching")
            })
    }
    return (
        <div className='container'>
            <div className='row mt-5'>
                {
                    doctors && doctors.map((doctorItem) => {
                        return <div key={doctorItem._id} className="col-12 col-sm-6 col-md-4 card m-3" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{doctorItem.specializaton}</h5>
                                <p className="card-text">{doctorItem.name}</p>
                                <p className="card-text">{doctorItem.email}</p>
                                <p className="card-text">{doctorItem.mobile}</p>
                                <p className="card-text">{doctorItem.designation}</p>
                            </div>
                            <div className="card-footer text-body-secondary">
                                    <p className="btn btn-primary">Book Appointment</p>
                                </div>
                        </div>
                    })
                }
            </div>

        </div>
    )
}
