import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Footer from "./componants/footer/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Profil from "./pages/wallet";
import Catalog from "./pages/catalog";
import Ourstory from "./pages/sory";
import Chart from "./pages/chart";
import Myproduct from "./pages/Myprduct";
import Detils from "./pages/dedils";
import Checkout from "./pages/checkout";
import ProfilePage from "./pages/profilpage";

function App() {
  return (
    <>
      <GoogleOAuthProvider
        clientId={
          "435629370707-9nk0so702m6g7q058tdln5ol0l8e1vmo.apps.googleusercontent.com"
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="footer" element={<Footer />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Profil" element={<Profil />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Ourstory" element={<Ourstory />} />
            <Route path="/Cartt" element={<Chart />} />
            <Route path="/Myproduct" element={<Myproduct />} />
            <Route path="/details" element={<Detils />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
