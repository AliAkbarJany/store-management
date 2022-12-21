import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Allproducts = () => {
    const [allProducts, setAllproducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => setAllproducts(data))
    }, [])
    return (
        <div>
            <div class="divider text-3xl font-extrabold mx-28 py-5">PRODUCTS</div>

            <div className='w-2/3 mx-32 mx-auto grid grid-cols-4 gap-1 gap-0'>
                {
                    allProducts.map(singleProduct => <SingleProduct key={singleProduct._id} singleProduct={singleProduct}></SingleProduct>)
                }
            </div>

        </div>
    );
};

export default Allproducts;