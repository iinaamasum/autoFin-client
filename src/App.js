import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import RequireAuth from './Pages/Auth/RequireAuth';
import Blog from './Pages/Blog/Blog';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import AllProducts from './Pages/Dashboard/AllProducts';
import AllUser from './Pages/Dashboard/AllUser';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Purchase from './Pages/Purchase/Purchase';
import Error404 from './Shared/Error404';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <section className="bg-gray-200 max-w-[2000px] mx-auto">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myPortfolio" element={<MyPortfolio />} />
          <Route
            path="/parts/:partsId"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<MyProfile />} />
            <Route path="addReview" element={<AddReview />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="payment/:orderId" element={<Payment />} />
            <Route path="updateProfile" element={<UpdateProfile />} />
            <Route path="allProducts" element={<AllProducts />} />
            <Route path="allUser" element={<AllUser />} />
            <Route path="manageOrder" element={<ManageOrder />} />
            <Route path="addProduct" element={<AddProduct />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
        <Toaster />
      </Navbar>
    </section>
  );
}

export default App;
