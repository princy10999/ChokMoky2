import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import "./styles/css/style.css";
import "./styles/css/responsive.css";
import theme from "./styles/Theme";
import { ThemeProvider } from "@mui/material/styles";
import StickySocial from "./Components/StickySocial";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import SignupWithEmail from "./Pages/SignupWithEmail/SignupWithEmail";
import SignupWithMobile from "./Pages/SignupWithMobile/SignupWithMobile";
import OtpVerification from "./Pages/OtpVerification/OtpVerification";
import Search from "./Pages/Search/Search";
import CategorySearch from "./Pages/CategorySearch/CategorySearch";
import SrcollTop from "./Components/SrcollTop";
import Artist from "./Pages/Artist/Artist";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import EditProfile from "./Pages/EditProfile/EditProfile";
import HeaderIcon from "./Components/HeadarIcon";
import Faq from "./Pages/FAQ/Faq";
import { store } from "./store";
import { Provider, useDispatch } from "react-redux";
import Wishlist from "./Pages/Wishlist/Wishlist";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ContactUs from "./Pages/ContactUs/ContactUs";
import EmailVerification from "./Pages/emailVerification/EmailVerification";
import Loader from "./Components/Common/Loader";
import { useAppSelector } from "./Redux/app/hooks";
import { loaderFalse, isLoader } from "./Redux/Actions/loaderSlice";
import Password from "./Pages/Password/Password";
import SignupSuccess from "./Pages/signupSuccess/SignupSuccess";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
import Dashboard from "./Pages/Dashboard/Dashboard";
import OrderDetails from "./Pages/OrderDetails/OrderDetails";
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from "./Pages/TermsConditions/TermsConditions";
import SVGComponent from "./Components/Common/SVGComponent";
import { useState } from "react";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
function App() {
  const loader = useAppSelector((state) => state.loader.value)
  const [svg, setSvg] = useState(true)
  // console.log("loader",loader);
  const dispatch = useDispatch()
  setTimeout(() => {
    setSvg(false)
  }, 6000);
  return (
    <ThemeProvider theme={theme}>
      {loader && <Loader />}
      {svg && <SVGComponent />}
      {!svg && <BrowserRouter basename={"/chokmoki_web"}>
    {/* <ThemeProvider theme={theme}> */}
      {/* <BrowserRouter basename={"/chokmoki_web"}> */}
        {loader && <Loader />}
        <Header />
        <HeaderIcon />
        <StickySocial />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product-detail" element={<ProductDetails />} />
          <Route path="/signup-with-email" element={<SignupWithEmail />} />
          <Route path="/signup-with-mobile" element={<SignupWithMobile />} />
          <Route path="/otp-verification/:code/:type" element={<OtpVerification />} />
          <Route path="/search" element={<Search />} />
          <Route path="/category-search" element={<CategorySearch />} />
          <Route path="/artist-collection" element={<Artist />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/email-verification/:id" element={<EmailVerification />}/>
          <Route path="/password" element={<Password />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
          <Route path="/reset-password/:otp/:email" element={<ResetPassword />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
        <SrcollTop/>
      </BrowserRouter>}
    </ThemeProvider>
  );
}
export default App;
