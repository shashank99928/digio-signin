import React, { useState } from "react";
import { SigningModal } from "./Signing.modal";
import AadhaarLogo from "../assets/aadhaar-Logo.png";
import { Alert, Snackbar } from "@mui/material";

const validOtp = "123456";

const RegisterAadhaar = ({ onSubmit }) => {
  const [aadhaar, setAadhaar] = useState();
  const [consent, setConsent] = useState(false);
  const [verify, setVerified] = useState(false);
  const [otp, setOpt] = useState("");
  const [error, setError] = useState("");

  const handleAadhaarChange = (e) => {
    setAadhaar(e.target.value);
  };

  const handleVerifyAadhaar = () => {
    if (aadhaar?.length === 12) {
      setVerified(true);
    }
    // TODO : show a toast and validation if error
  };
  const handleConsent = () => {
    setConsent(!consent);
  };

  const handleOtpOnChange = (e) => {
    console.log("dsfsdfdsm", e.target.value);
    setOpt(e.target.value);
  };

  const handleSubmitOpt = () => {
    if (validOtp === otp) {
      onSubmit();
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setVerified(false);
  };

  return (
    <div style={{ background: "white", padding: "16px" }}>
      <Snackbar open={verify} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Aadhaar is valid
        </Alert>
      </Snackbar>
      <h2>RegisterAadhaar</h2>
      <hr />
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <img
              src={AadhaarLogo}
              alt="Aadhaar logo"
              height={"30px"}
              style={{ marginRight: "16px" }}
            />
          </div>
          <div>
            <input
              style={{ marginRight: "8px" }}
              value={aadhaar}
              type="text"
              placeholder="Please enter valid Aadhaar"
              onChange={handleAadhaarChange}
              maxLength={12}
              minLength={12}
            />
            <button onClick={handleVerifyAadhaar} disabled={!aadhaar}>
              Verify
            </button>

            <div>
              <input
                onClick={handleConsent}
                type="checkbox"
                id="consent"
                name="consent"
                value={consent}
              />
              <label>
                I agree to eSign <span>Kyc document</span> Kyc document to get
                started
              </label>
              <br />
            </div>

            <div>
              <input
                style={{ marginRight: "8px" }}
                onChange={handleOtpOnChange}
                type="text"
                placeholder="please enter valid otp"
                value={otp}
                maxLength={6}
                minLength={6}
              />
              <button onClick={handleSubmitOpt} disabled={!otp}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAadhaar;
