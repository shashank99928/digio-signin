import React, { useState } from "react";
import CompanyLogo from "../assets/companylogo.png";
import DigioLogo from "../assets/digio-logo.jpg";

const validEmail = "test@gmail.com";

const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = () => {
    if (email === validEmail) {
      onSubmit();
    }
  };

  return (
    <div>
      <div
        style={{
          background: "#0561b0",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          padding: "18px",
        }}
      >
        <div style={{ color: "white" }}>
          <h2>Sign document using</h2>
          <div>{email}</div>
        </div>
        <div>
          <img
            src={CompanyLogo}
            width={"100px"}
            height={"50px"}
            style={{ background: "white", objectFit: "contain" }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "60vh",
        }}
      >
        <div>
          {email && <div>{email} uses Gmail?</div>}
          <h2>Login using google</h2>
          <button>Google Puls</button>
        </div>

        <div>
          <hr />
          <div>OR</div>
          <hr />
        </div>

        <div>
          <div>Proceed with your email</div>
          <input
            onChange={handleEmailChange}
            placeholder="please enter email"
            value={email}
            maxLength={50}
          />

          <div>
            By continuing,I confirm to the Tem{" "}
            <a href="http://digio.in" target="_blank">
              Digio.in
            </a>
            <button onClick={handleEmailSubmit}>Continue</button>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            src={DigioLogo}
            alt="digio-logo"
            width={"100px"}
            height={"50px"}
            style={{ background: "white", objectFit: "contain" }}
          />
          <div>
            <div>Powered by</div>
            <a href="http://digio.in" target="_blank">
              www.digio.in
            </a>
          </div>

          <div>1/3 steps</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
