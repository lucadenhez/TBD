"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

const chars = "!@#$%^&*()_+[]{};:|,.<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface DecodeTextProps {
    text: string;
    className?: string;
    speed?: number; // higher number, slower speed
    blockiness?: number // blockiness, more feels less like the matrix
}

export default function DecodeText({ text, className = "", speed = 100, blockiness = 3, ...props }: DecodeTextProps) {
    const [displayText, setDisplayText] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    const scramble = async () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += blockiness;
        }, speed);
    };

    useEffect(() => {
        scramble();
    }, [text]);

    return (
        <motion.span
            className={`font-mono inline-block cursor-default ${className}`}
        >
            <p {...props}>
                {displayText}
            </p>
        </motion.span>
    );
}
