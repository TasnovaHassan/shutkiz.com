import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartSidebar from './components/cart/CartSidebar';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import RawFish from './pages/RawFish';
import Balachao from "./pages/Balachao";
import FishChips from "./pages/FishChips";


// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import CheckoutPage from './pages/CheckoutPage';
// import OrdersPage from './pages/OrdersPage';
// import OrderDetailPage from './pages/OrderDetailPage';
// import AccountPage from './pages/AccountPage';
// import WishlistPage from './pages/WishlistPage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import AdminDashboard from './pages/admin/AdminDashboard';
// import AdminProducts from './pages/admin/AdminProducts';
// import AdminOrders from './pages/admin/AdminOrders';
// import AdminUsers from './pages/admin/AdminUsers';
import ProtectedRoute from './components/common/ProtectedRoute';
import AdminRoute from './components/common/AdminRoute';
// import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                borderRadius: '10px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
              },
            }}
          />
          <Navbar />
          <CartSidebar />
          <Routes>
            {/* Public */}
            <Route path="/" element={<HomePage />} /> 
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/category/raw-fish" element={<RawFish />} />
            <Route path="/category/balachao" element={<Balachao />} />
            <Route path="/category/fish-chips" element={<FishChips />} />
            

            {/* <Route path="/login" element={<LoginPage />} /> */}
            {/* <Route path="/register" element={<RegisterPage />} /> */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
           

            {/* Protected */}
            <Route element={<ProtectedRoute />}>
              {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
              {/* <Route path="/orders" element={<OrdersPage />} /> */}
              {/* <Route path="/orders/:id" element={<OrderDetailPage />} /> */}
              {/* <Route path="/account" element={<AccountPage />} /> */}
              {/* <Route path="/wishlist" element={<WishlistPage />} /> */}
            </Route>

            {/* Admin */}
            <Route element={<AdminRoute />}>
              {/* <Route path="/admin" element={<AdminDashboard />} /> */}
              {/* <Route path="/admin/products" element={<AdminProducts />} /> */}
              {/* <Route path="/admin/orders" element={<AdminOrders />} /> */}
              {/* <Route path="/admin/users" element={<AdminUsers />} /> */}
            </Route>

            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

