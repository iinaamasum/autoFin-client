import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import RequireAuth from './Pages/Auth/RequireAuth';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <section className="bg-gray-200 max-w-[2000px] mx-auto">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/parts/:partsId"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          />
        </Routes>
        <Footer />
        <Toaster />
      </Navbar>
    </section>
  );
}

export default App;
