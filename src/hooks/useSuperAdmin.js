import { useEffect, useState } from "react"

const useSuperAdmin=user=>{
    const [superAdmin,setSuperAdmin]=useState(false)

    const [superAdminLoading,setSuperAdminLoading]=useState(true)

    useEffect(()=>{
        const email=user?.email
        console.log(email)
        if(email){
            fetch(`http://localhost:5000/superAdmin/${email}`,{
                method:'GET',
                headers:{
                    'content-type':'application/json',
                    // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('data',data)
                setSuperAdmin(data.SuperAdmin)
                
                setSuperAdminLoading(false)
            })
        }

    },[user])
    return [superAdmin,superAdminLoading, setSuperAdmin]
}

export default useSuperAdmin