import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <section className="text-center mt-[45vh]">
        <h1 className="text-3xl font-bold text-red-500">Loading...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className="text-center mt-[45vh]">
        <h1 className="text-3xl font-bold text-red-500">{error.message}</h1>
      </section>
    );
  }

  return <section>{children}</section>;
};

export default AuthWrapper;
