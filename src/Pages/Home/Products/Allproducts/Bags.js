import React, { useEffect, useState } from 'react';
import Product from './Product';

const Bags = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products?item=Bag')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id='bags'>
            <div class="divider text-3xl font-extrabold mx-28 py-5">Bags</div>

            <div className='w-2/3 mx-32 mx-auto grid grid-cols-4 gap-1 gap-0'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Bags;