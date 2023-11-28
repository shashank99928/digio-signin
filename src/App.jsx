import React, { useEffect, useState } from "react";
import { SigningModal } from "./components/Signing.modal";
import RegisterAadhaar from "./components/RegisterAadhaar.modal";
import Login from "./components/Login";
import Layout from "./components/Layout";

const PAGES = {
  login: "LOGIN",
  Register: "REGISTER",
  SignedIn: "SIGNED_IN",
};

function App() {
  const [page, setPage] = useState(PAGES.login);
  const [open, setOpen] = useState(true);
  const [isSiggnedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Display a custom message in the alert
      const message = "Are you sure you want to leave?";
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };

    // Attach the event listener when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    setPage(PAGES.Register);
  };

  const handleRegister = () => {
    setIsSignedIn(setIsSignedIn);
    setPage(PAGES.SignedIn);
  };

  return (
    <div>
      {page === PAGES.login ? (
        <Login onSubmit={handleLogin} />
      ) : (
        <Layout open={isSiggnedIn}>
          <>
            {page === PAGES.Register && (
              <RegisterAadhaar onSubmit={handleRegister} />
            )}

            {page === PAGES.SignedIn && <SigningModal />}
          </>
        </Layout>
      )}
    </div>
  );
}

export default App;
