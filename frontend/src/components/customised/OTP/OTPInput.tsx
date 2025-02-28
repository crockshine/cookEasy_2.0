import styles from './OtpInput.module.css'
import React from 'react';
import {
    InputOTP,
    InputOTPSlot,
} from "@/src/components/ui/input-otp"

const OtpInput = () => {
    return (
        <InputOTP maxLength={4} name={'otp'} required>
            <InputOTPSlot index={0}/>
            <InputOTPSlot index={1}/>
            <InputOTPSlot index={2}/>
            <InputOTPSlot index={3}/>
        </InputOTP>
    )
};

export default OtpInput;