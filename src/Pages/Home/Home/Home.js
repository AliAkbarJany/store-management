import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Allproducts from '../Products/Allproducts/Allproducts';
import Bags from '../Products/Allproducts/Bags';
import Shoes from '../Products/Allproducts/Shoes';
import SunGlasses from '../Products/Allproducts/SunGlasses';
import AllCategories from '../Products/Categories/AllCategories';

const Home = () => {
    return (
        <div style={{ "backgroundColor": "#2A8C82" }}>
            <Banner></Banner>
            <Allproducts></Allproducts>
            {/* <AllCategories></AllCategories> */}
            <Shoes></Shoes>
            <Bags></Bags>
            <SunGlasses></SunGlasses>
            <Footer></Footer>
        </div>
    );
};

export default Home;