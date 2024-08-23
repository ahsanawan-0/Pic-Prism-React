const OTP_VALIDITY_DURATION = 10 * 60 * 1000; // OTP validity duration (e.g., 10 minutes in milliseconds)

const verifyOtp=(userOtp, storedOtp, expiresAt)=> {
    const currentTime = Date.now();
    const expirationTime = new Date(parseInt(expiresAt)).getTime();

    // Check if the OTP has expired
    if (currentTime > expirationTime) {
        return { success: false, message: 'OTP has expired' };
    }

    // Check if the OTP matches
    if (userOtp === storedOtp) {
        return { success: true, message: 'OTP is valid' };
    } else {
        return { success: false, message: 'Invalid OTP' };
    }

}
module.exports=verifyOtp