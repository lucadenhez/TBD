"use client";

import { ReactLenis, type LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface SmoothScrollProps {
    children: React.ReactNode
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<LenisRef>(null);

    useEffect(() => {
        // This connects Lenis's Request Animation Frame (raf) 
        // to Framer Motion's internal game loop
        function update(data: { timestamp: number }) {
            lenisRef.current?.lenis?.raf(data.timestamp);
        }

        // High-priority update in the framer-motion frame loop
        frame.update(update, true);

        return () => cancelFrame(update);
    }, []);

    return (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
            {children}
        </ReactLenis>
    );
}
