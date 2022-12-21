import React from 'react';

const SingleProduct = ({singleProduct}) => {
    const{_id,generalName,img}=singleProduct
    return (
        <div>
            <div class="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-60' src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name:{generalName}</h2>
                    {/* <p>ID:{_id}</p>
                    
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;