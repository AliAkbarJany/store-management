import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAllproducts from '../../hooks/useAllproducts';

const DeleteAndAdd = ({ singleProduct }) => {
    const { _id, generalName, img } = singleProduct

    // const [allProducts, setAllproducts] = useState([])
    const [allProducts, setAllproducts] = useAllproducts()

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to Delete Device')
        if (proceed) {
            fetch(`http://localhost:5000/allproducts/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = allProducts.filter(product => product._id !== id)
                    setAllproducts(remaining)
                })
        }

    }
    return (
        <div>
            <div class="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-60' src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name:{generalName}</h2>


                    <div class=" text-center mb-4">
                        <div class="card-actions">
                            <Link to='/dashboard/addProduct'><button class="btn btn-success">Add Product</button></Link>
                        </div>

                        <button onClick={() => handleDelete(_id)} class="btn btn-error">Delete Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteAndAdd;