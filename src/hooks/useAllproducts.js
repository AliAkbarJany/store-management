import { useEffect, useState } from "react"


const useAllproducts=()=>{
    const[allProducts,setAllproducts]= useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/allproducts')
        .then(res=>res.json())
        .then(data=>setAllproducts(data))
    },[])
    return [allProducts,setAllproducts]
}
export default useAllproducts