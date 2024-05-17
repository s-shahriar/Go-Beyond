import Lottie from "lottie-react";
import React, { useContext } from 'react';
import { Outlet } from "react-router-dom";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/NavBar';
import loadingAnimation from '../../assets/animation.json';

const Layout = () => {
  const {loading} = useContext(AuthContext)
  

  const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <Lottie animationData={loadingAnimation} />
      </div>
    );
  };

  return (
    <div className="relative">
    {loading ? (
      <LoadingSpinner />
    ) : (
      <div className="container m-auto">
        <Navbar />
        <Outlet></Outlet>
        <Footer />
      </div>
    )}
  </div>

  );
}

export default Layout
