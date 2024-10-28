import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./Components/common/Footer/Footer";
import { Navbar } from "./Components/common/Navbar/Navbar";
import AuthPage from "./Pages/Authentication/AuthPage";
import HomePage from "./Pages/HomePage";
import RegisterForm from "./Components/Auth/RegisterForm";
import LoginForm from "./Components/Auth/LoginForm";
import AllPhoneNumbers from "./Pages/PhoneNumbers/AllPhoneNumbers";
import LocalNumbers from "./Pages/PhoneNumbers/LocalNumbers";
import NationalNumbers from "./Pages/PhoneNumbers/NationalNumbers";
import TollFreeNumbers from "./Pages/PhoneNumbers/TollFreeNumbers";
import UniversalNumbers from "./Pages/PhoneNumbers/UniversalNumbers";
import MobileNumbers from "./Pages/PhoneNumbers/MobileNumbers";
import ShareCostNumbers from "./Pages/PhoneNumbers/SharedCostNumbers";
import AllServices from "./Pages/Services/AllServices";
import SipServices from "./Pages/Services/SipServices";
import TwoWaySms from "./Pages/Services/TwoWaySip";
import Capacity from "./Pages/Services/Capacity";
import EmergencyCalling from "./Pages/Services/EmergencyCalling";
import PhoneNumberPorting from "./Pages/Services/PhoneNumberPorting";
import ForwardSMSDelivery from "./Pages/Services/ForwardingSMSDelivery";
import FaxPage from "./Pages/Services/FaxPage";
import AllTools from "./Pages/Tools/AllTools";
import SelfService from "./Pages/Tools/SelfService";
import PhoneNumberSelection from "./Pages/Tools/PhoneNumberSelection";
import BusinessPhoneSystem from "./Pages/Tools/BusinessPhoneSystem";
import TradeDidApi from "./Pages/Tools/TradeDidApi";
import PhoneSystemAPI from "./Pages/Tools/PhoneSystemAPI";
import AllIntegrations from "./Pages/Integrations/AllIntegrarions";
import OTPForm from "./Components/Auth/OTPForm";
// import DefaultLayout from "./Pages/Dashboard/layout/DefaultLayout";
import { useSelector } from "react-redux";
import Dashboard from "./Pages/Dashboard/DashBoard";
import Overview from "./Pages/Dashboard/Overview";
import BuyNumbers from "./Pages/Dashboard/PhoneNumbers/ManageNumbers";
import NumberPorting from "./Pages/Dashboard/PhoneNumbers/NumberPorting";
import MyNumbers from "./Pages/Dashboard/PhoneNumbers/MyNumbers";
import PortingRequest from "./Pages/Dashboard/PhoneNumbers/PortingRequest";
import PortabilityChecks from "./Pages/Dashboard/PhoneNumbers/PortabilityChecks";
import PortingNumbers from "./Pages/Dashboard/PhoneNumbers/PortingNumbers";
import PhoneCapacity from "./Pages/Dashboard/PhoneNumbers/Capacity";
import ExtendedCapacity from "./Pages/Dashboard/PhoneNumbers/ExtendedCapacity";
import StandardCapacity from "./Pages/Dashboard/PhoneNumbers/StandardCapacity";
import Configuration from "./Pages/Dashboard/PhoneNumbers/Configuration";
import ConfigurationProfile from "./Pages/Dashboard/PhoneNumbers/ConfigurationProfile";
import ConfigRules from "./Pages/Dashboard/PhoneNumbers/ConfigRules";
import InboundTrunks from "./Pages/Dashboard/Voice/InboundTrunks";
import OutBondTrunks from "./Pages/Dashboard/Voice/OutbondTrunks";
import EmergencyCallTrunks from "./Pages/Dashboard/Voice/EmergencyCalling";
import SMSTrunks from "./Pages/Dashboard/SMS/SMSTrunks";
import SMSCampaign from "./Pages/Dashboard/SMS/SMSCampaign";
import CloudPhoneSystem from "./Pages/Dashboard/CloudPhoneSystem";
import Statistics from "./Pages/Dashboard/Statistics/Statistics";
import VoiceIn from "./Pages/Dashboard/Statistics/VoiceIn";
import VoiceOut from "./Pages/Dashboard/Statistics/VoiceOut";
import SMSIn from "./Pages/Dashboard/Statistics/SMSIn";
import SMSOut from "./Pages/Dashboard/Statistics/SMSOut";
import Reports from "./Pages/Dashboard/Statistics/Reports";
import ReportSMSIn from "./Pages/Dashboard/Statistics/ReportSMSIn";
import ReportVoiceIn from "./Pages/Dashboard/Statistics/ReportVoiceIn";
import ReportVoiceOut from "./Pages/Dashboard/Statistics/ReportVoiceOut";
import ReportSMSOut from "./Pages/Dashboard/Statistics/ReportSMSOut";
import CallLogs from "./Pages/Dashboard/Statistics/CallLogs";
import CallInbound from "./Pages/Dashboard/Statistics/CallInbound";
import CallOutbound from "./Pages/Dashboard/Statistics/CallOutbound";
import SMSLogs from "./Pages/Dashboard/Statistics/SMSLogs";
import SMSInbound from "./Pages/Dashboard/Statistics/SMSInbound";
import SMSOutbound from "./Pages/Dashboard/Statistics/SMSOutbound";
import Exports from "./Pages/Dashboard/Statistics/Exports";
import IdentityAddress from "./Pages/Dashboard/IdentityAddresses/IdentityAddress";
import Identities from "./Pages/Dashboard/IdentityAddresses/Identities";
import Addresses from "./Pages/Dashboard/IdentityAddresses/Addresses";
import Verifications from "./Pages/Dashboard/IdentityAddresses/Verifications";
import TradedidAPI from "./Pages/Dashboard/APIS/TradedidAPI";
import CallEventsAPI from "./Pages/Dashboard/APIS/CallEventsAPI";
import Billing from "./Pages/Dashboard/Billing/Billing";
import PaymentMethod from "./Pages/Dashboard/Billing/PaymentMethod";
import WireTransfer from "./Pages/Dashboard/Billing/WireTransfer";
import BillingHistory from "./Pages/Dashboard/Billing/BillingHistory";
import BillReports from "./Pages/Dashboard/Billing/BillReports";
import BillPayments from "./Pages/Dashboard/Billing/BillPayments";
import BillOrders from "./Pages/Dashboard/Billing/BillOrders";
import BillInvoices from "./Pages/Dashboard/Billing/BillInvoices";
import AmazonIntegration from "./Pages/Integrations/AmazonIntegration";
import ZenesysIntegration from "./Pages/Integrations/ZenesysIntegration";
import RibbonIntegration from "./Pages/Integrations/RibbonIntegration";
import ZappierIntegaration from "./Pages/Integrations/ZappierIntegration";
import PabblyIntegration from "./Pages/Integrations/PabblyIntegration";
import Operator from "./Pages/Solutions/Operator";
import Enterprise from "./Pages/Solutions/Enterprise";
import UseCases from "./Pages/Solutions/UseCases";
import SuccessStories from "./Pages/Solutions/SuccessStories";
import SolutionPartners from "./Pages/Solutions/SolutionPartners";
import GlobalCoverage from "./Pages/Coverage&Prices/GlobalCoverage";
import DIDPricing from "./Pages/Coverage&Prices/DIDPricing";
import SIPTrunkPricing from "./Pages/Coverage&Prices/SIPTrunkPricing";
import RegulatoryRequirements from "./Pages/Coverage&Prices/RegulatoryRequirement";
import Documentation from "./Pages/Resources/Documentation";
import Networks from "./Pages/Resources/Network";
import Blog from "./Pages/Resources/Blog";
import ContactUs from "./Pages/Resources/Contacts";
import AboutUs from "./Pages/Resources/AboutUs";
import EbookLibrary from "./Pages/Resources/EbookLibrary";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const location = useLocation();
  console.log("isAuthenticated : ", isAuthenticated);
  console.log("user : ", user);
  // Check if the current path includes '/dashboard'
  const isDashboardPath = location.pathname.startsWith("/dashboard");
  return (
    <div className="w-[100vw]">
      {isDashboardPath ? "" : <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />}>
          <Route path="signup" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="otp" element={<OTPForm />} />
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
        <Route path="/tools/porting-tool" element={<PhoneNumberPorting />} />
        <Route
          path="/tools/selection-tool"
          element={<PhoneNumberSelection />}
        />
        <Route
          path="/tools/business-phone-systems"
          element={<BusinessPhoneSystem />}
        />
        <Route path="/tools/TRADEDID-api" element={<TradeDidApi />} />
        <Route path="/tools/phone-systems-api" element={<PhoneSystemAPI />} />

        {/* Integrations */}
        <Route
          path="/Integrations/all-integration"
          element={<AllIntegrations />}
        />
        <Route
          path="/Integrations/amazon-integration"
          element={<AmazonIntegration />}
        />
        <Route
          path="/Integrations/genesys-integration"
          element={<ZenesysIntegration />}
        />
        <Route
          path="/Integrations/ribbon-integration"
          element={<RibbonIntegration />}
        />
        <Route
          path="/Integrations/zapier-integration"
          element={<ZappierIntegaration />}
        />
        <Route
          path="/Integrations/pabbly-integration"
          element={<PabblyIntegration />}
        />

        {/* Solutions */}
        <Route path="/solutions/operator" element={<Operator />} />
        <Route path="/solutions/enterprise" element={<Enterprise />} />
        <Route path="/solutions/use-cases" element={<UseCases />} />
        <Route path="/solutions/success-stories" element={<SuccessStories />} />
        <Route
          path="/solutions/solution-partners"
          element={<SolutionPartners />}
        />

        {/* Coverage and Prices */}
        <Route path="/coverage-prices/coverage" element={<GlobalCoverage />} />
        <Route path="/coverage-prices/did-pricing" element={<DIDPricing />} />
        <Route
          path="/coverage-prices/sip-trunking-pricing"
          element={<SIPTrunkPricing />}
        />
        <Route
          path="/coverage-prices/regulatory-requirements"
          element={<RegulatoryRequirements />}
        />

        {/* Resources */}
        <Route path="/resources/documentation" element={<Documentation />} />
        <Route path="/resources/network" element={<Networks />} />
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/contacts" element={<ContactUs />} />
        <Route path="/resources/about-us" element={<AboutUs />} />
        <Route path="/resources/e-book-library" element={<EbookLibrary />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Dashboard default route */}
          <Route path="overview" element={<Overview />} />

          {/* Phone Numbers routes */}
          <Route path="phone/buy-numbers" element={<BuyNumbers />} />
          <Route path="phone/my-numbers" element={<MyNumbers />} />
          <Route path="phone/porting" element={<NumberPorting />}>
            <Route path="porting-request" element={<PortingRequest />} />
            <Route path="porting-checks" element={<PortabilityChecks />} />
            <Route path="porting-numbers" element={<PortingNumbers />} />
          </Route>
          <Route path="phone/capacity" element={<PhoneCapacity />}>
            <Route path="extend-capacity" element={<ExtendedCapacity />} />
            <Route path="standard-capacity" element={<StandardCapacity />} />
          </Route>
          <Route path="phone/configuration/" element={<Configuration />}>
            <Route path="profile" element={<ConfigurationProfile />} />
            <Route path="rules" element={<ConfigRules />} />
          </Route>
          <Route path="voice/inbound-trunks" element={<InboundTrunks />} />
          <Route path="voice/outbound-trunks" element={<OutBondTrunks />} />
          <Route
            path="voice/emergency-calling"
            element={<EmergencyCallTrunks />}
          />
          <Route path="sms-trunks" element={<SMSTrunks />} />
          <Route path="sms-campaigns" element={<SMSCampaign />} />
          <Route path="cloud-phone-system" element={<CloudPhoneSystem />} />

          {/* statistics */}
          <Route path="statistics" element={<Statistics />}>
            <Route path="voice-in" element={<VoiceIn />} />
            <Route path="voice-out" element={<VoiceOut />} />
            <Route path="sms-in" element={<SMSIn />} />
            <Route path="sms-out" element={<SMSOut />} />
          </Route>
          <Route path="reports" element={<Reports />}>
            <Route path="voice-in" element={<ReportVoiceIn />} />
            <Route path="voice-out" element={<ReportVoiceOut />} />
            <Route path="sms-in" element={<ReportSMSIn />} />
            <Route path="sms-out" element={<ReportSMSOut />} />
          </Route>
          <Route path="call-logs" element={<CallLogs />}>
            <Route path="inbound" element={<CallInbound />} />
            <Route path="outbound" element={<CallOutbound />} />
          </Route>
          <Route path="sms-logs" element={<SMSLogs />}>
            <Route path="inbound" element={<SMSInbound />} />
            <Route path="outbound" element={<SMSOutbound />} />
          </Route>
          <Route path="exports" element={<Exports />} />
          <Route path="identity-addresses" element={<IdentityAddress />}>
            <Route path="identities" element={<Identities />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="verification" element={<Verifications />} />
          </Route>
          <Route path="tradedid-apis" element={<TradedidAPI />} />
          <Route path="call-event-apis" element={<CallEventsAPI />} />
          <Route path="billing" element={<Billing />}>
            <Route path="payment-methods" element={<PaymentMethod />} />
            <Route path="wire-transfer" element={<WireTransfer />} />
          </Route>
          <Route path="billing-history" element={<BillingHistory />}>
            <Route path="bill-reports" element={<BillReports />} />
            <Route path="bill-payments" element={<BillPayments />} />
            <Route path="bill-orders" element={<BillOrders />} />
            <Route path="bill-invoices" element={<BillInvoices />} />
          </Route>
        </Route>
      </Routes>
      {isDashboardPath ? "" : <Footer />}
    </div>
  );
}

export default App;
