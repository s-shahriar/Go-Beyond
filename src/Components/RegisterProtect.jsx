import Lottie from "lottie-react";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import groovyWalkAnimation from "../assets/animation.json";

const RegisterProtect = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const Loading = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <Lottie animationData={groovyWalkAnimation} />
      </div>
    );
  };

  if (loading) {
    return (
        <div className="flex justify-center">
        <Loading />
      </div>
    );
  }

  if (!user) {
    return <div>{children}</div>;
  }


  return <Navigate to="/" />;
};

export default RegisterProtect;