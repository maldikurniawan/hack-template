import React, { useRef, useState, useEffect } from 'react';

const CYCLES_PER_LETTER = 3;
const SHUFFLE_TIME = 75;
const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&?';

type Props = {
    children: React.ReactNode;
};

const ScrambleText: React.FC<Props> = ({ children }) => {
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const TARGET_TEXT = typeof children === 'string' ? children : String(children);

    const [text, setText] = useState(TARGET_TEXT);

    useEffect(() => {
        scramble();
        return () => {
            stopScramble();
        };
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = TARGET_TEXT.split('')
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                    const randomChar = CHARS[randomCharIndex];

                    return randomChar;
                })
                .join('');

            setText(scrambled);
            pos++;

            if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
                stopScramble();
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current as NodeJS.Timeout);
        setText(TARGET_TEXT);
    };

    return (
        <div onMouseEnter={scramble} onMouseLeave={stopScramble}>
            {text}
        </div>
    );
};

export default ScrambleText;
