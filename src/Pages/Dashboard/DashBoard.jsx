import React, { useState } from "react";
import Sidebar from "../../Components/Dashboard/Sidebar";
import Header from "../../Components/Dashboard/Header";
import Banner from "../../Components/Dashboard/Banner";
import Card from "../../Components/Dashboard/Card";
import NewsUpdate from "../../Components/Dashboard/NewsUpdate";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="bg-blue-50 min-h-screen">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="lg:ml-64">
        <Header setIsOpen={setIsSidebarOpen} />
        <main className="pt-20 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
