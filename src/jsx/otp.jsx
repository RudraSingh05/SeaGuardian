import React, { useState } from 'react';

function OTP() {
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleChange = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);

        if (e.target.value && index < otp.length - 1) {
            document.getElementById(`otp${index + 2}`).focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace this with your verification logic
        console.log('OTP:', otp.join(''));
    };

    const handleResendOTP = () => {
        // Add logic to resend OTP
        console.log('Resend OTP');
    };

    return (
        <div id="loginForm">
            <div className="centering">
                <form className="my-form" onSubmit={handleSubmit}>
                    <div className="login-welcome-row">
                        <h1>OTP Verification</h1>
                    </div>
                    <div className="otp-container">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                className="otp-box"
                                id={`otp${index + 1}`}
                                value={value}
                                onChange={(e) => handleChange(e, index)}
                                required
                            />
                        ))}
                    </div>
                    <div>
                        <button className="bubbly-button1" type="submit">Verify OTP</button>
                    </div>
                    <div className="my-form__row3">
                        <span>Did you not receive the OTP?</span>
                        <Link href="#" title="Resend OTP" onClick={handleResendOTP}>Resend OTP</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default OTP;
