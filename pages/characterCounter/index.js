import React, { useRef, useState } from 'react';
import styles from '../../styles/CharacterCounter.module.css';

const CharacterCounter = ({ maxLength = 100 }) => {
    const ref = useRef();
    const [charCount, setCharCount] = useState(0);

    const handleChange = () => {
        let currentLength = ref.current.value.length;
        setCharCount(currentLength);
    }

    const getRemainingClass = () => {
        const remaining = maxLength - charCount;
        if (remaining <= 10) return styles.danger;
        if (remaining <= 20) return styles.warning;
        return '';
    }

    return (
        <div className={styles.container}>
            <textarea
                ref={ref}
                maxLength={maxLength}
                onChange={handleChange}
                rows={5}
                className={styles.textarea}
            />
            <p className={`${styles.characterCount} ${getRemainingClass()}`}>
                Remaining characters: {maxLength - charCount}
            </p>
        </div>
    )
}

export default CharacterCounter;