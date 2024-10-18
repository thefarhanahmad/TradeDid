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
import TwoWaySms from "./Pages/TwoWaySip";
import Capacity from "./Pages/Capacity";
import EmergencyCalling from "./Pages/EmergencyCalling";
import PhoneNumberPorting from "./Pages/PhoneNumberPorting";
import ForwardSMSDelivery from "./Pages/ForwardingSMSDelivery";
import FaxPage from "./Pages/FaxPage";
import AllTools from "./Pages/AllTools";
import SelfService from "./Pages/SelfService";

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
        <Route path="/services/two-way-sms" element={<TwoWaySms />} />
        <Route path="/services/capacity" element={<Capacity />} />
        <Route
          path="/services/emergency-calling"
          element={<EmergencyCalling />}
        />
        <Route
          path="/services/phone-number-porting"
          element={<PhoneNumberPorting />}
        />
        <Route
          path="/services/voice-forwarding-sms"
          element={<ForwardSMSDelivery />}
        />
        <Route path="/services/fax" element={<FaxPage />} />

        {/* Tools */}
        <Route path="/tools/all-tools" element={<AllTools />} />
        <Route path="/tools/self-service-portal" element={<SelfService />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
