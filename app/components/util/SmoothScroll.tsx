"use client";

import { ReactLenis, type LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface SmoothScrollProps {
    children: React.ReactNode
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<LenisRef>(null);
    const pathname = usePathname();

    useEffect(() => {
        function update(data: { timestamp: number }) {
            lenisRef.current?.lenis?.raf(data.timestamp);
        }
        frame.update(update, true);
        return () => cancelFrame(update);
    }, []);

    useEffect(() => {
        lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
    }, [pathname]);

    return (
        <ReactLenis root options={{ autoRaf: false, duration: 1.5 }} ref={lenisRef}>
            {children}
        </ReactLenis>
    );
}
