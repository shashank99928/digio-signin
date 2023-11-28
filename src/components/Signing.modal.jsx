import React, { useEffect, useState } from "react";

export const SigningModal = () => {
  const [signed, setSigned] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSigned(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {}, 4000);
  }, []);

  return (
    <div
      style={{
        background: "white",
      }}
    >
      <h1>{signed ? "Signing..." : "Signed"}</h1>
      <div>Mutual Non- Disclose Agreement</div>
    </div>
  );
};
