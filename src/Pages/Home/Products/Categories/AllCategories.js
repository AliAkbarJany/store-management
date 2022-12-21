import React from 'react';
import SingleCategories from './SingleCategories';


const allCategories=[
    {_id:1,name:'Sun-Glasses',img:'https://i.ibb.co/7Vt4M1W/sun1.png'},
    {_id:2,name:'Bag',img:'https://i.ibb.co/gmJt12D/backpack1.png'},
    {_id:3,name:'Shoes',img:'https://i.ibb.co/1dWq9mV/puma1.png'},
    
]

const AllCategories = () => {
    return (
        <div>
            <div class="divider text-3xl font-extrabold mx-28 py-5">CATEGORIES</div>
            <div className='w-2/3 mx-32 mx-auto grid grid-cols-3 gap-1 gap-0'>
                {
                    allCategories.map(categorie=> <SingleCategories
                         key={categorie._id} 
                         categorie={categorie}
                    >

                    </SingleCategories>)
                }
            </div>
        </div>
    );
};

export default AllCategories;