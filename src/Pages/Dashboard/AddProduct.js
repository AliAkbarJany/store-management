import React from 'react';

const AddProduct = () => {
    const handleAdd = event => {
        event.preventDefault()
        const generalName = event.target.generalName.value
        const brandName = event.target.brandName.value
        const description=event.target.description.value
        const price = event.target.price.value
        const quantity = event.target.quantity.value
        const img = event.target.img.value
        console.log(generalName,brandName,description,price,quantity)

        const products = {
            generalName: event.target.generalName.value,
            brandName: event.target.brandName.value,
            description: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            img

        }
        console.log(products)

        fetch('http://localhost:5000/allproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className='flex justify-center items-center '>

            <div class="card w-96 bg-base-100 shadow-xl image-full">
                {/* <figure><img src="" alt="Shoes" /></figure> */}
                <div class="card-body">
                    <h2 class="text-3xl font-bold">Add a Product</h2>
                    <form onSubmit={handleAdd} className='grid gap-3 justify-items-center'>

                        <input type="text" name='generalName' placeholder="Enter Product General Name" class="input  text-red-400 input-bordered w-full max-w-xs" />

                        <input type="text" name='brandName' placeholder="Enter Product Brand Name" class="input  text-red-400 input-bordered w-full max-w-xs" />

                        <textarea name="description" class="textarea textarea-bordered text-black w-full" placeholder="Write your description"></textarea>

                        <input type="text" name='price' placeholder="Price" class="input text-red-500 input-bordered w-full max-w-xs" />

                        <input type="number" name='quantity' placeholder=" Quantity" class="input text-red-500 input-bordered w-full max-w-xs" />

                        <input type="text" name='img' placeholder="Enter your photo URL link" class="input text-red-500 input-bordered w-full max-w-xs" />

                        <button class="btn btn-success" type='submit'>
                            Add A Product
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;