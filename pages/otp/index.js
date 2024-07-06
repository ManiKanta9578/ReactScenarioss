import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/otp.module.css'

const Index = ({ otpLength = 6 }) => {
    const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
    const ref = useRef([]);

    const handleKeyChange = (e, index) => {
        let updatedOtpFields = [...otpFields];
        let key = e.key;

        if (key === "Backspace") {
            updatedOtpFields[index] = "";
            if (index > 0) {
                ref.current[index - 1].focus();
            }
            setOtpFields(updatedOtpFields);
        } else if (key === "ArrowRight") {
            if (index + 1 < otpFields.length) {
                ref.current[index + 1].focus();
            }
            return;
        } else if (key === "ArrowLeft") {
            if (index > 0) {
                ref.current[index - 1].focus();
            }
            return;
        } else if (!isNaN(key)) {
            updatedOtpFields[index] = key;
            if (index + 1 < otpFields.length) {
                ref.current[index + 1].focus();
            }
            setOtpFields(updatedOtpFields);
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').split('');
        if (pasteData.length !== otpLength || pasteData.some(item => isNaN(item))) {
            return;
        }
        setOtpFields(pasteData);
        ref.current[pasteData.length - 1].focus();
    };

    useEffect(() => {
        ref.current[0].focus();
    }, []);

    return (
        <div className={styles.container} onPaste={handlePaste}>
            {otpFields.map((value, index) => (
                <input
                    key={index}
                    className={styles.inputFileds}
                    ref={(currentInput) => ref.current[index] = currentInput}
                    type='text'
                    value={value}
                    onKeyDown={(e) => handleKeyChange(e, index)}
                    maxLength="1"
                    aria-label={`OTP Input ${index + 1}`}
                />
            ))}
        </div>
    )
}

export default Index;