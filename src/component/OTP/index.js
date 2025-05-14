import React from "react";
import OtpInput from "./OtpInput";

export default function OTP() {

  return (
    <>
      <div>
        <OtpInput No_Otp_input={4} autofocus={true} />
      </div>
      <div>
        <OtpInput No_Otp_input={6} autofocus={false} />
      </div>
    </>
  );
}
