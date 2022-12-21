import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCategories = ({categorie}) => {
    const {_id,name,img}=categorie
    const navigate=useNavigate()

    const navigateToSelectedCategorie=(id)=>{

        navigate(`/dispalyAllCategories/${id}`)

        /*

        if(id===1){
            navigate(`/sunGlasses/${id}`)
        }
        else if(id===2){
            navigate(`/bags/${id}`)
        }
        else{
            navigate(`/shoes/${id}`)
        }

        */

        // id === 1 ? navigate(`/sunGlasses/${id}`) : (( id === 2) ? navigate(`/bags/${id}`) : navigate(`/shoes/${id}`))
        
    }

    return (
        <div onClick={()=> navigateToSelectedCategorie(_id)}>
             <div class="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-60' src={img} alt="Shoes" /></figure>
                <div class="card-body text-center">
                    <h2 class="card-title text-2xl">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default SingleCategories;