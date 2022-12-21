import React from 'react';
import useAllproducts from '../../hooks/useAllproducts';
import SingleProduct from '../Home/Products/SingleProduct/SingleProduct';
import DeleteAndAdd from './DeleteAndAdd';

const ManageProducts = () => {
    const[allProducts]=useAllproducts()
    console.log(allProducts)
    return (
        <div>
            <h2 className='text-2xl text-center font-bold mb-3'>Manage Products</h2>
            <div className='w-2/3 mx-32 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 gap-0'>
                {
                    allProducts.map(singleProduct=><DeleteAndAdd 
                        key={singleProduct._id}
                        singleProduct={singleProduct}
                    
                    >

                    </DeleteAndAdd>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;