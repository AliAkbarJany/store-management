import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import AdminResponsibilities from './Pages/Dashboard/AdminResponsibilities';
import AddProduct from './Pages/Dashboard/AddProduct';
import Users from './Pages/Dashboard/Users';

// Toast....
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MyProfile from './Pages/Dashboard/MyProfile';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import RequireSuperAdmin from './Pages/Login/RequireSuperAdmin';
import SunGlasses from './Pages/Home/Products/Allproducts/SunGlasses';
import Bags from './Pages/Home/Products/Allproducts/Bags';
import Shoes from './Pages/Home/Products/Allproducts/Shoes';
import DispalyAllCategories from './Pages/Home/Products/Categories/DispalyAllCategories';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>

        {/* Categories................. */}
        <Route path='/sunGlasses/:id' element={<SunGlasses></SunGlasses>}></Route>
        <Route path='/bags/:id' element={<Bags></Bags>}></Route>
        <Route path='/shoes/:id' element={<Shoes></Shoes>}></Route>
        {/* ............................. */}

        {/* ........................ */}
        <Route path='/sunGlasses' element={<SunGlasses></SunGlasses>}></Route>
        <Route path='/bags' element={<Bags></Bags>}></Route>
        <Route path='/shoes' element={<Shoes></Shoes>}></Route>


        <Route path='/dispalyAllCategories/:id' element={<DispalyAllCategories></DispalyAllCategories>}></Route>
        {/* ...................... */}


        {/* Dashboard......... */}
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='adminResponsibilities' element={<AdminResponsibilities></AdminResponsibilities>}></Route>
          <Route path='manageProducts' element={
            <RequireSuperAdmin>
              <ManageProducts></ManageProducts>
            </RequireSuperAdmin>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='users' element={
            <RequireSuperAdmin>
              <Users></Users>
            </RequireSuperAdmin>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
