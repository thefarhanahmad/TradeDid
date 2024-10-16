import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Layouts/Footer/Footer";
import { Navbar } from "./Components/Layouts/Navbar/Navbar";

import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import RegisterForm from "./Components/Auth/RegisterForm";
import LoginForm from "./Components/Auth/LoginForm";
import AllPhoneNumbers from "./Pages/AllPhoneNumbers";
import LocalNumbers from "./Pages/LocalNumbers";
import NationalNumbers from "./Pages/NationalNumbers";
import TollFreeNumbers from "./Pages/TollFreeNumbers";
import UniversalNumbers from "./Pages/UniversalNumbers";
import MobileNumbers from "./Pages/MobileNumbers";
import ShareCostNumbers from "./Pages/SharedCostNumbers";
import AllServices from "./Pages/AllServices";
import SipServices from "./Pages/SipServices";

function App() {
  return (
    <div className="w-[100vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />}>
          <Route path="signup" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>

        {/* Phone numbers */}
        <Route
          path="/phone-numbers/all-phone-numbers"
          element={<AllPhoneNumbers />}
        />
        <Route path="/phone-numbers/local-numbers" element={<LocalNumbers />} />
        <Route
          path="/phone-numbers/national-numbers"
          element={<NationalNumbers />}
        />
        <Route
          path="/phone-numbers/toll-free-numbers"
          element={<TollFreeNumbers />}
        />
        <Route
          path="/phone-numbers/universal-numbers"
          element={<UniversalNumbers />}
        />
        <Route
          path="/phone-numbers/mobile-numbers"
          element={<MobileNumbers />}
        />
        <Route
          path="/phone-numbers/shared-costs-numbers"
          element={<ShareCostNumbers />}
        />

        {/* Services */}
        <Route path="/services/all-services" element={<AllServices />} />
        <Route
          path="/services/two-way-sip-trunking"
          element={<SipServices />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
