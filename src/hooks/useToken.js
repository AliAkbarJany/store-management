import { useEffect, useState } from "react"

const useToken=user=>{
    const [token,setToken]=useState('')

    useEffect(()=>{
        console.log('user inside useToken',user)
        
        // const name=user?.user?.displayName
        // console.log(name)

        const email =user?.user?.email
        console.log(email)
        const currentUser ={email:email}
        
        // const userName={name:name}

        
        if(email){
            fetch(`http://localhost:5000/user/${email}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('data inside usetoken',data)
                const accessToken=data.token
                localStorage.setItem('accessToken',accessToken)
                setToken(accessToken)
            })

        }

    },[user])
    return [token,setToken]
}

export default useToken;