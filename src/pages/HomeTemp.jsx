import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function HomeTemp() {
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div>
            Home Page
        </div>
    )
}