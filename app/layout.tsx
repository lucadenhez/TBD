import { Metadata } from "next";
import SmoothScroll from "./(site)/components/util/SmoothScroll";

export const metadata: Metadata = {
    title: "Team TBD",
    description: "Team page for Team 203. IDP Spring '26.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning>
            <body suppressHydrationWarning>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    )
}
