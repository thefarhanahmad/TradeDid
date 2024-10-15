import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Layouts/Footer/Footer";
import { Navbar } from "./Components/Layouts/Navbar/Navbar";

import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import RegisterForm from "./Components/Auth/RegisterForm";
import LoginForm from "./Components/Auth/LoginForm";

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
